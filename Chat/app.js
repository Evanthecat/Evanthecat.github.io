// Initialize WebSocket connection
const socket = new WebSocket("ws://your-websocket-server-url");

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
        };
    }

    messageGroups[messageKey].messages.push(content);

    renderChatBox();
}

// Function to render the entire chat box
function renderChatBox() {
    chatBox.innerHTML = ""; // Clear the chat box

    for (const messageKey in messageGroups) {
        const group = messageGroups[messageKey];

        const messageElement = document.createElement("div");
        messageElement.classList.add(
            "message",
            group.sender === "You" ? "own-message" : "friend-message"
        );

        const messages = group.messages.map(formatMessage).join("<br>");
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
    socket.send(message);
    appendMessageOrFile(message, "You", new Date(), true);
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

// Event listener for WebSocket messages
socket.addEventListener("message", (event) => {
    const message = event.data;
    appendMessageOrFile(message, "Friend", new Date(), false);
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
            socket.send(JSON.stringify(fileContent));
            appendMessageOrFile(fileContent, "You", new Date(), true);
        };
        reader.readAsDataURL(file);
    }
});
