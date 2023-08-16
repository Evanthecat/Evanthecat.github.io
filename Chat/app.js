        // Import the functions you need from the SDKs you need

        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
        import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";


        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyABNQUWiZ6bMWEeuLBSwd_C7G-HcVHj49U",
          authDomain: "chat-395823.firebaseapp.com",
          projectId: "chat-395823",
          storageBucket: "chat-395823.appspot.com",
          messagingSenderId: "789459025498",
          appId: "1:789459025498:web:a847bc8c7f2dfbafa02263",
          measurementId: "G-7MEP3TR7BH"
        };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const firestore = getFirestore(app);
        window.firestore = firestore;
        
        function loadAndRenderMessages() {
    const db = getFirestore(); // Get Firestore instance from app
    const messagesRef = collection(db, "messages"); // Reference to the "messages" collection

    onSnapshot(messagesRef, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const messageData = change.doc.data();
            appendMessageOrFile(
                messageData.content,
                messageData.sender,
                messageData.timestamp.toDate(),
                messageData.sender === "You"
            );
        });
    });
}

  // Call the function to start loading and rendering messages
  document.addEventListener("DOMContentLoaded", function () {
    loadAndRenderMessages();
});
  
  // DOM elements
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const uploadButton = document.getElementById("upload-button");
const fileInput = document.getElementById("file-input");

// Object to store message group information
const messageGroups = {};

// Function to append a new message or file to the chat box
function appendMessageOrFile(content, sender, timestamp, isOwnMessage) {
    const hour = timestamp.getHours();
    const minute = timestamp.getMinutes();
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = (hour % 12) || 12;
    const formattedMinute = minute.toString().padStart(2, "0");
    const messageKey = `${formattedHour}:${formattedMinute} ${period}`;

    if (!messageGroups[messageKey]) {
        messageGroups[messageKey] = {
            sender,
            messages: [],
            timestamp, // Add timestamp to the message group
        };
    }

    messageGroups[messageKey].messages.push({
        content,
        isOwnMessage,
        timestamp,
    });

    renderChatBox();
}

// Function to render the entire chat box
function renderChatBox() {
    chatBox.innerHTML = ""; // Clear the chat box

    // Sort message groups by timestamp before rendering
    const sortedMessageKeys = Object.keys(messageGroups).sort((a, b) => {
        const timestampA = messageGroups[a].timestamp;
        const timestampB = messageGroups[b].timestamp;
        return timestampA - timestampB;
    });

    for (const messageKey of sortedMessageKeys) {
        const group = messageGroups[messageKey];

        const messageElement = document.createElement("div");
        messageElement.classList.add(
            "message",
            group.sender === "You" ? "own-message" : "friend-message"
        );

        const messages = group.messages
            .map((message) => formatMessage(message.content))
            .join("<br>");
        messageElement.innerHTML = `
            <div class="message-info">${group.sender} - ${messageKey}</div>
            <div class="message-text">${messages}</div>
        `;

        chatBox.appendChild(messageElement);
    }

    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Function to format a message or file for display
function formatMessage(content) {
    if (typeof content === "string") {
        // Replace newline characters with <br> tags
        return content.replace(/\n/g, "<br>");
    } else {
        if (content.type && content.type.startsWith("image")) {
            return `<img src="${content.url}" class="image-preview">`;
        } else {
            return `
                <div class="file-info">${content.name}</div>
                <a href="${content.url}" download="${content.name}" class="download-button">Download</a>
            `;
        }
    }
}

// Function to send a message
function sendMessage(message) {
    const db = getFirestore(); // Get Firestore instance from app
    const messagesRef = collection(db, "messages"); // Reference to the "messages" collection

    addDoc(messagesRef, {
        content: message,
        sender: "You",
        timestamp: new Date(),
    });
}

// Rest of your existing event listeners...

// Event listener for Send button
sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
        sendMessage(message);
        messageInput.value = "";
    }
});

// Event listener for message input Enter key
messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        const message = messageInput.value.trim();
        if (message) {
            sendMessage(message);
            messageInput.value = "";
        }
    }
});

// Event listener for Upload button
uploadButton.addEventListener("click", () => {
    fileInput.click();
});

// Event listener for file input change
fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileData = e.target.result;
            const fileContent = {
                url: fileData,
                name: file.name,
                type: file.type,
            };
            // Replace this line with actual WebSocket sending logic
            appendMessageOrFile(fileContent, "You", new Date(), true);
        };
        reader.readAsDataURL(file);
    }
});
