const popup = document.querySelector('.startpopup');
function closepopup(){
  popup.close();
  sendmessage();
}

const rickrollvideo = document.querySelector('#rickroll');

function megarickroll(){
  document.getElementById("rickrollpopup").close();
  document.getElementById('rickroll').pause();
  document.getElementById('rickroll').currentTime = 0
  document.getElementById("rickrollpopup2").close();
  document.getElementById('rickroll2').pause();
  document.getElementById('rickroll2').currentTime = 0
document.getElementById("rickrollpopup").close();
document.getElementById("rickrollpopup2").close();
document.getElementById('lose').showModal();
document.getElementById('lose').style.display = "block"
setTimeout(function(){
document.getElementById('lose').style.fontSize = "80px"
document.getElementById('lose').style.color = "darkred"
document.getElementById('lose').style.height = "40%"
document.getElementById("lose").innerHTML = "NOW...TIME FOR <br>YOUR PUNISHMENT";
}, 2500);
setTimeout(function(){
document.getElementById('megarickrollspopup').showModal();
var videos = document.querySelectorAll('#megarickrolls');

for (var i = 0; i < videos.length; i++) {
  videos[i].play();
}
}, 4000);
}

function rickrolltest2(){
  if(isRickroll == 1){
    document.getElementById("rickrollpopup2").showModal();
    document.getElementById('rickroll2').play();

    rickrolled++
    if(rickrolled == 1){
      document.getElementById("rickrolled1").style.display = "block";
    }
    if(rickrolled == 2){
      document.getElementById("rickrolled2").style.display = "block";
    }
    if(rickrolled == 3){
      document.getElementById("rickrolled3").style.display = "block";
    }
    if(rickrolled > 2){
      megarickroll()
      }
  }
  if(isRickroll == 0){
    document.getElementById("notrickrollpopup").showModal();
    messageLvl++
    document.getElementById('mailtext').innerHTML = ""
    isRickroll = 0
    document.getElementById("mailbutton").style.visibility = 'hidden';
  }
}
function rickrolltest(){
  if(isRickroll == 0){
    document.getElementById("rickrollpopup").showModal();
    document.getElementById('rickroll').play();
    rickrolled++
    if(rickrolled == 1){
      document.getElementById("rickrolled1").style.display = "block";
    }
    if(rickrolled == 2){
      document.getElementById("rickrolled2").style.display = "block";
    }
    if(rickrolled == 3){
      document.getElementById("rickrolled3").style.display = "block";
    }
    if(rickrolled > 2){
      megarickroll()
      }
  }

  if(isRickroll == 1){
    document.getElementById("rickrollpopup3").showModal();
    messageLvl++
    document.getElementById('mailtext').innerHTML = ""
    isRickroll = 0
    document.getElementById("mailbutton").style.visibility = 'hidden';
  }
}
function exitrickroll(){
  document.getElementById("rickrollpopup").close();
  document.getElementById('rickroll').pause();
  document.getElementById('rickroll').currentTime = 0
  document.getElementById("rickrollpopup2").close();
  document.getElementById('rickroll2').pause();
  document.getElementById('rickroll2').currentTime = 0
  document.getElementById("rickrollpopup3").close();
  document.getElementById("notrickrollpopup").close();
  setTimeout(function(){
    mailping = 0
    sendmessage();
    }, 1000);
  }

function antirickroll1(){
document.getElementById("antirickroll1").style.visibility = 'hidden';
if(isRickroll == 0){
  document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ No rickrolls found.";
  previous = document.getElementById('terminal').innerHTML;
  document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
  }
if(isRickroll == 1){
  document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ Rickroll detected!";
  previous = document.getElementById('terminal').innerHTML;
  document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
  }
}
function antirickroll2(){
  document.getElementById("antirickroll2").style.visibility = 'hidden';
  if(isRickroll == 0){
    document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ No rickrolls found.";
    previous = document.getElementById('terminal').innerHTML;
    document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
    }
  if(isRickroll == 1){
    document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ Rickroll detected!";
    previous = document.getElementById('terminal').innerHTML;
    document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
    }
  }
  function antirickroll3(){
    document.getElementById("antirickroll3").style.visibility = 'hidden';
    if(isRickroll == 0){
      document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ No rickrolls found.";
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      }
    if(isRickroll == 1){
      document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ Rickroll detected!";
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      }
    }
    function antirickroll4(){
      document.getElementById("antirickroll4").style.visibility = 'hidden';
      if(isRickroll == 0){
        document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ No rickrolls found.";
        previous = document.getElementById('terminal').innerHTML;
        document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
        }
      if(isRickroll == 1){
        document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ Rickroll detected!";
        previous = document.getElementById('terminal').innerHTML;
        document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
        }
      }
      function antirickroll5(){
        document.getElementById("antirickroll5").style.visibility = 'hidden';
        if(isRickroll == 0){
          document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ No rickrolls found.";
          previous = document.getElementById('terminal').innerHTML;
          document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
          }
        if(isRickroll == 1){
          document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ Rickroll detected!";
          previous = document.getElementById('terminal').innerHTML;
          document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
          }
        }

var adminlogin = 0;
var admin = 0;

help = [
"<br>‎ ‎ > help<br><br>‎ ‎ credits - displays credits...if you don't know who that is already.<br>‎ ‎ help - you know what this does.<br>‎ ‎ clear - clears all text from the terminal.<br>‎ ‎ rules - displays rules.<br><br>‎ ‎ There may also be some commands not in this list.<br><br>"
];
credits = [
"<br>‎ ‎ > credits<br><br>‎ ‎ This game was created by Evan<br>‎ ‎ Youtube: @Evan_the_cat<br><br>"
];
rules = [
  "<br>‎ ‎ > rules<br><br>‎ ‎ No cheating.<br>‎ ‎ All rickrolls that you recive in this game count as real <br>‎ ‎ rickrolls from me.<br><br>"
]

var terminalinput = "";

document.getElementById('terminalinput').addEventListener('keydown', function(e) {
  var key = e.key;
  if (key === 'Enter') {
    var terminalinput = document.getElementById('terminalinput').value;
    if (terminalinput == "help") {
      document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ " + help;
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      document.getElementById('terminalinput').value = "";
    }
    if (terminalinput == "credits") {
      document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ " + credits;
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      document.getElementById('terminalinput').value = "";
    }
    if (terminalinput == "clear") {
      document.getElementById('terminal').innerHTML = "";
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      document.getElementById('terminalinput').value = "";

      document.getElementById('terminal').innerHTML = "‎ ‎ " + "Terminal"
previous = document.getElementById('terminal').innerHTML
document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ Type help for a list of commands."
previous = document.getElementById('terminal').innerHTML
document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ ----------------------------------------"
previous = document.getElementById('terminal').innerHTML
    }
    if (terminalinput == "rules") {
      document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ " + rules;
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      document.getElementById('terminalinput').value = "";
    }
    if (terminalinput == "admin") {
      document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ " + "<br>‎ ‎ > admin<br><br>‎ ‎ Password:<br><br>";
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      document.getElementById('terminalinput').value = "";
      adminlogin = 1;
    }
    if (terminalinput == "Evaniscool" && adminlogin == 1) {
      document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ " + "Password: Evaniscool<br><br>‎ ‎ access granted.<br><br>";
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      document.getElementById('terminalinput').value = "";
      admin = 1;
    }
    if (terminalinput == "resetantirickroll" && admin == 1) {
      document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ " + "Antirickrolls reset.<br><br>";
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      document.getElementById('terminalinput').value = "";
      document.getElementById("antirickroll1").style.visibility = 'visible';
      document.getElementById("antirickroll2").style.visibility = 'visible';
      document.getElementById("antirickroll3").style.visibility = 'visible';
      document.getElementById("antirickroll4").style.visibility = 'visible';
      document.getElementById("antirickroll5").style.visibility = 'visible';
    }
    if (terminalinput != "Evaniscool" && adminlogin == 1 && terminalinput != "admin") {
      document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ " + "Password: " + document.getElementById('terminal').innerHTML + "<br><br>‎ ‎ access denied.<br><br>";
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      document.getElementById('terminalinput').value = "";
    }
    if (terminalinput == "subscribe") {
      document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ " + "<br>‎ ‎ > subscribe<br><br>‎ ‎ Running 'Subscribe'...<br><br>";
      previous = document.getElementById('terminal').innerHTML;
      document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
      document.getElementById('terminalinput').value = "";
      document.getElementById("subscribepopup").showModal();
    }
    

if (terminalinput == "help" || terminalinput == "credits" || terminalinput == "clear" || terminalinput == "rules" || terminalinput == "admin" || adminlogin == 1 && terminalinput == "Evaniscool" || admin == 1 && terminalinput == "resetantirickroll" || terminalinput == "subscribe" || terminalinput == "") {

} else {
document.getElementById('terminal').innerHTML = previous + "<br>‎ ‎ unknown command '" + terminalinput + "'<br><br>";
previous = document.getElementById('terminal').innerHTML;
document.getElementById('terminal').scrollTop = document.getElementById('terminal').scrollHeight;
document.getElementById('terminalinput').value = "";
adminlogin = 0;
}
  }
});
