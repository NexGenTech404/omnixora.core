/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader =
document.getElementById("loader");

if(loader){

loader.style.display="none";

}

},2500);

});

/* MOBILE MENU */

const menuBtn =
document.getElementById("menuBtn");

const sidebar =
document.getElementById("sidebar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("active");

});

}

/* PROFILE SYSTEM */

const saveProfileBtn =
document.getElementById("saveProfile");

const nameInput =
document.getElementById("nameInput");

const bioInput =
document.getElementById("bioInput");

const displayName =
document.getElementById("displayName");

const bioPreview =
document.getElementById("bioPreview");

function loadProfile(){

const profile =
JSON.parse(
localStorage.getItem(
"vk_profile"
)
);

if(!profile) return;

displayName.textContent =
profile.name;

bioPreview.textContent =
profile.bio;

nameInput.value =
profile.name;

bioInput.value =
profile.bio;

}

const savedAvatar =
localStorage.getItem(
"vk_avatar"
);

if(savedAvatar){

avatarPreview.innerHTML =

`<img src="${savedAvatar}"
style="
width:100%;
height:100%;
object-fit:cover;
border-radius:50%;
">`;

}

function saveProfile(){

const profile = {

name:
nameInput.value || "Prime User",

bio:
bioInput.value || "Creator"

};

localStorage.setItem(
"vk_profile",
JSON.stringify(profile)
);

displayName.textContent =
profile.name;

bioPreview.textContent =
profile.bio;

showNotification(
"Profile Saved ⚡"
);

}

if(saveProfileBtn){

saveProfileBtn.addEventListener(
"click",
saveProfile
);

}

loadProfile();

/* AI CHAT */

const aiInput =
document.getElementById("aiInput");

const sendAI =
document.getElementById("sendAI");

const chatArea =
document.getElementById("chatArea");

const aiReplies = [

"Greetings Commander. Neural systems operational.",

"OmnixoraCore is monitoring all active modules.",

"Analysis complete. System integrity remains stable.",

"Your request has been received and processed.",

"Core intelligence is active and awaiting instructions.",

"Scanning knowledge archives... Results available.",

"Mission parameters accepted. Proceeding.",

"Welcome back Commander. All systems online.",

"Neural network synchronization successful.",

"Future pathways calculated successfully."

];

function addMessage(text,type){

const msg =
document.createElement("div");

msg.className =
type === "user"
? "user-msg"
: "bot-msg";

msg.innerText = text;

chatArea.appendChild(msg);

chatArea.scrollTop =
chatArea.scrollHeight;

}

function typeBotMessage(text){

const msg =
document.createElement("div");

msg.className =
"bot-msg";

chatArea.appendChild(msg);

let i = 0;

const typing =
setInterval(()=>{

msg.innerText += text.charAt(i);

i++;

if(i >= text.length){

clearInterval(typing);

}

chatArea.scrollTop =
chatArea.scrollHeight;

},25);

}

function sendMessage(){

const text =
aiInput.value.trim();

const lower =
text.toLowerCase();

if(!text) return;

addMessage(text,"user");

if(lower.includes("hello")){

setTimeout(()=>{

typeBotMessage(
"Greetings Commander. OmnixoraCore welcomes you."
);

},500);

return;

}

if(lower.includes("who are you")){

setTimeout(()=>{

typeBotMessage(
"I am Omnixora AI Core, the intelligence layer of this system."
);

},500);

return;

}

if(lower.includes("status")){

setTimeout(()=>{

typeBotMessage(
"All primary systems operational. No anomalies detected."
);

},500);

return;

}

unlockAchievement(
"AI Commander"
);

aiInput.value = "";

setTimeout(()=>{

const randomReply =

aiReplies[
Math.floor(
Math.random() *
aiReplies.length
)
];

typeBotMessage(
randomReply
);

},700);

}

if(sendAI){

sendAI.addEventListener(
"click",
sendMessage
);

}

if(aiInput){

aiInput.addEventListener(
"keypress",
e=>{

if(e.key==="Enter"){

sendMessage();

}

});

}

/* THEME SYSTEM */

const themeButtons =
document.querySelectorAll(
"[data-theme]"
);

function applyTheme(theme){

document.body.classList.remove(
"theme-orange",
"theme-violet",
"theme-shadow"
);

if(theme !== "cyan"){

document.body.classList.add(
"theme-" + theme
);

}

localStorage.setItem(
"vk_theme",
theme
);

showNotification(
"Theme Updated 🎨"
);

}

themeButtons.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

applyTheme(
btn.dataset.theme
);

}
);

});

const savedTheme =
localStorage.getItem(
"vk_theme"
);

if(savedTheme){

applyTheme(savedTheme);

}

/* SETTINGS BUTTON */

const toggleTheme =
document.getElementById(
"toggleTheme"
);

if(toggleTheme){

toggleTheme.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"theme-shadow"
);

showNotification(
"Shadow Mode Changed"
);

}
);

}

/* RESET */

const resetData =
document.getElementById(
"resetData"
);

if(resetData){

resetData.addEventListener(
"click",
()=>{

const confirmReset =
confirm(
"Delete all PrimeVerse data?"
);

if(confirmReset){

localStorage.clear();

location.reload();

}

}
);

}

/* NOTIFICATION */

function showNotification(text){

const notify =
document.createElement("div");

notify.innerText = text;

notify.style.position="fixed";
notify.style.top="25px";
notify.style.right="25px";

notify.style.padding="16px 22px";

notify.style.borderRadius="16px";

notify.style.background=
"rgba(0,245,255,.15)";

notify.style.border=
"1px solid rgba(0,245,255,.4)";

notify.style.backdropFilter=
"blur(10px)";

notify.style.zIndex="999999";

notify.style.color="white";

document.body.appendChild(
notify
);

setTimeout(()=>{

notify.remove();

},2500);

}

/* DASHBOARD COUNTER */

function animateCounter(
element,
target
){

let current = 0;

const speed =
target / 80;

const interval =
setInterval(()=>{

current += speed;

if(current >= target){

current = target;

clearInterval(interval);

}

element.innerText =
Math.floor(current)
.toLocaleString();

},20);

}

const xpValue =
document.getElementById(
"xpValue"
);

if(xpValue){

animateCounter(
xpValue,
12450
);

}

/* MARKETPLACE */

const marketCards =
document.querySelectorAll(
".market-card"
);

marketCards.forEach(card=>{

card.addEventListener(
"click",
()=>{

showNotification(
card.innerText +
" Added To Wishlist"
);

}
);

});

/* HERO BUTTON */

const heroButton =
document.querySelector(
".primary-btn"
);

if(heroButton){

heroButton.addEventListener(
"click",
()=>{

document
.getElementById(
"dashboard"
)
.scrollIntoView({

behavior:"smooth"

});

}
);

}

/* WELCOME SYSTEM */

const username = localStorage.getItem("vk_username");

if(!username){

setTimeout(()=>{

const name = prompt(
"Welcome To VK.PrimeVerse ⚡\nEnter Your Name:"
);

if(name){

localStorage.setItem(
"vk_username",
name
);

showNotification(
"Welcome " + name + " 🚀"
);

}

},1000);

}

/* DAILY REWARD */

function claimDailyReward(){

const lastReward =
localStorage.getItem(
"vk_daily_reward"
);

const today =
new Date().toDateString();

if(lastReward !== today){

let xp =
parseInt(
localStorage.getItem(
"vk_xp"
) || 0
);

xp += 500;

localStorage.setItem(
"vk_xp",
xp
);

localStorage.setItem(
"vk_daily_reward",
today
);

showNotification(
"+500 XP Daily Reward 🎁"
);

}

}

claimDailyReward();

/* XP SYSTEM */

let xp =
parseInt(
localStorage.getItem(
"vk_xp"
) || 12450
);

function updateXP(){

const xpElement =
document.getElementById(
"xpValue"
);

if(xpElement){

xpElement.innerText =
xp.toLocaleString();

}

const level =
Math.floor(
xp / 1000
);

const xpFill =
document.getElementById(
"xpFill"
);

const levelTitle =
document.getElementById(
"levelTitle"
);

const xpProgress =
document.getElementById(
"xpProgress"
);

const nextRank =
document.getElementById(
"nextRank"
);

if(levelTitle){

levelTitle.innerText =
"LEVEL " + level;

}

const currentLevelXP =
level * 1000;

const nextLevelXP =
(level + 1) * 1000;

const progress =

((xp-currentLevelXP)/
(nextLevelXP-currentLevelXP))
*100;

if(xpFill){

xpFill.style.width =
progress + "%";

}

if(xpProgress){

xpProgress.innerText =

xp.toLocaleString()
+
" / "
+
nextLevelXP.toLocaleString()
+
" XP";

}

let rank = "Rookie";

if(level >= 5)
rank = "Explorer";

if(level >= 10)
rank = "Creator";

if(level >= 20)
rank = "Elite";

if(level >= 40)
rank = "Legend";

if(nextRank){

nextRank.innerText =
"CURRENT RANK: " + rank;

}

updateRank(level);

}

const profileXP =
document.getElementById(
"profileXP"
);

if(profileXP){

profileXP.innerText =
xp.toLocaleString();

}

const profileRank =
document.getElementById(
"profileRank"
);

if(profileRank){

let currentRank = "Rookie";

if(xp >= 5000) currentRank = "Explorer";
if(xp >= 10000) currentRank = "Creator";
if(xp >= 20000) currentRank = "Elite";
if(xp >= 40000) currentRank = "Legend";

profileRank.innerText =
currentRank;

}

function addXP(amount){

xp += amount;

localStorage.setItem(
"vk_xp",
xp
);

updateXP();

showNotification(
"+" + amount + " XP"
);

}

/* RANK SYSTEM */

function updateRank(level){

const rankCards =
document.querySelectorAll(
".rank-card h3"
);

let rank = "Rookie";

if(level >= 5)
rank = "Explorer";

if(level >= 10)
rank = "Creator";

if(level >= 20)
rank = "Elite";

if(level >= 40)
rank = "Legend";

rankCards.forEach(card=>{

card.innerText =
rank;

});

}

/* PROFILE ACHIEVEMENT */

if(saveProfileBtn){

saveProfileBtn.addEventListener(
"click",
()=>{

unlockAchievement(
"Profile Created"
);

addXP(200);

}
);

}

/* TEMPLATE ACHIEVEMENT */

themeButtons.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

unlockAchievement(
"Theme Master"
);

addXP(100);

});

});

/* COMMUNITY FEED */

const communitySection =
document.getElementById(
"community"
);

if(communitySection){

const feed =
document.createElement("div");

feed.style.marginTop="30px";

feed.innerHTML = `

<div class="community-card">
🔥 New Creator Joined PrimeVerse
</div>

<div class="community-card">
⚡ Gaming Tournament Starts Soon
</div>

<div class="community-card">
🌌 Galaxy Drift Theme Trending
</div>

`;

communitySection.appendChild(
feed
);

}

/* MUSIC PLAYER */

const musicPlayer =
document.getElementById(
"musicPlayer"
);

if(musicPlayer){

musicPlayer.volume = 0.4;

}

/* AVATAR RANDOMIZER */


if(avatarPreview){

avatarPreview.addEventListener(
"click",
()=>{

const icons = [

"VK",
"⚡",
"🎮",
"🚀",
"🌌",
"👑",
"🔥"

];

avatarPreview.innerText =

icons[
Math.floor(
Math.random() *
icons.length
)
];

addXP(50);

}
);

}

/* MARKET XP */

marketCards.forEach(card=>{

card.addEventListener(
"click",
()=>{

addXP(75);

}
);

});

/* SCROLL REVEAL */

const observer =
new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform=
"translateY(0px)";

}

});

},

{
threshold:0.1
}

);

document
.querySelectorAll(
".dash-card,.community-card,.game-card,.template-card,.market-card"
)
.forEach(card=>{

card.style.opacity=0;

card.style.transform=
"translateY(40px)";

card.style.transition=
".7s ease";

observer.observe(card);

});

/* CYBER CLOCK */

const cyberClock =
document.createElement("div");

cyberClock.style.position=
"fixed";

cyberClock.style.bottom=
"20px";

cyberClock.style.right=
"20px";

cyberClock.style.padding=
"12px 18px";

cyberClock.style.borderRadius=
"16px";

cyberClock.style.background=
"rgba(0,0,0,.4)";

cyberClock.style.backdropFilter=
"blur(10px)";

cyberClock.style.border=
"1px solid rgba(0,245,255,.2)";

cyberClock.style.zIndex=
"9999";

document.body.appendChild(
cyberClock
);

setInterval(()=>{

const now =
new Date();

cyberClock.innerText =

now.toLocaleTimeString();

},1000);

/* OMNIXORACORE ENTRY SYSTEM */

const entryScreen =
document.getElementById("entryScreen");

const enterButton =
document.getElementById("enterUniverse");

const mainContent =
document.getElementById("mainContent");

if(enterButton){

enterButton.addEventListener("click",()=>{

const name =
document.getElementById("entryName").value;

const age =
document.getElementById("entryAge").value;

const country =
document.getElementById("entryCountry").value;

const source =
document.getElementById("entrySource").value;

if(
!name ||
!age ||
!country ||
!source
){

alert(
"Please fill all fields."
);

return;

}

localStorage.setItem(
"omnix_user",
JSON.stringify({

name,
age,
country,
source

})
);

const portalScreen =
document.getElementById(
"portalScreen"
);

const flashScreen =
document.getElementById(
"flashScreen"
);

document.body.classList.add(
"shake-screen"
);

setTimeout(()=>{

document.body.classList.remove(
"shake-screen"
);

},350);

flashScreen.classList.add(
"flash-active"
);

setTimeout(()=>{

flashScreen.classList.remove(
"flash-active"
);

},800);

portalScreen.style.display =
"flex";

const line1 =
document.getElementById(
"bootLine1"
);

const line2 =
document.getElementById(
"bootLine2"
);

const line3 =
document.getElementById(
"bootLine3"
);

const line4 =
document.getElementById(
"bootLine4"
);

const line5 =
document.getElementById(
"bootLine5"
);

setTimeout(()=>{

typeLine(
line1,
"> Connecting Neural Core..."
);

},200);

setTimeout(()=>{

typeLine(
line2,
"> Loading Quantum Network..."
);

},900);

setTimeout(()=>{

typeLine(
line3,
"> Synchronizing Reality..."
);

},1600);

setTimeout(()=>{

typeLine(
line4,
"> Verifying Identity..."
);

},2300);

setTimeout(()=>{

typeLine(
line5,
"> Access Granted ✓"
);

},3000);

setTimeout(()=>{

portalScreen.style.display =
"none";

entryScreen.style.display =
"none";

welcomeScreen.style.display =
"flex";

welcomeUser.innerText =
name;

setTimeout(()=>{

welcomeScreen.style.display =
"none";

mainContent.style.display =
"block";

},2000);

},5000);

});

}

/* WELCOME BACK SYSTEM */

const savedUser =
JSON.parse(
localStorage.getItem(
"omnix_user"
)
);

const welcomeScreen =
document.getElementById(
"welcomeScreen"
);

const welcomeUser =
document.getElementById(
"welcomeUser"
);

if(savedUser){

entryScreen.style.display =
"none";

welcomeScreen.style.display =
"flex";

welcomeUser.innerText =
savedUser.name;

setTimeout(()=>{

welcomeScreen.style.display =
"none";

mainContent.style.display =
"block";

},2500);

}

/* BOOT SEQUENCE */

function typeLine(
element,
text,
speed = 40
){

let index = 0;

element.innerHTML = "";

const typing = setInterval(()=>{

element.innerHTML += text[index];

index++;

if(index >= text.length){

clearInterval(typing);

}

},speed);

}

/* PORTAL PARTICLES */

function createPortalParticle(){

const container =
document.getElementById(
"portalParticles"
);

if(!container) return;

const particle =
document.createElement("div");

particle.classList.add(
"portal-particle"
);

particle.style.left = "50%";
particle.style.top = "50%";

const tx =
(Math.random()*300)-150;

const ty =
(Math.random()*300)-150;

particle.style.setProperty(
"--tx",
tx + "px"
);

particle.style.setProperty(
"--ty",
ty + "px"
);

container.appendChild(
particle
);

setTimeout(()=>{

particle.remove();

},2000);

}

setInterval(()=>{

const portal =
document.getElementById(
"portalScreen"
);

if(
portal &&
portal.style.display === "flex"
){

for(let i=0;i<3;i++){

createPortalParticle();

}

}

},150);

/* LIVE CLOCK */

const liveClock =
document.getElementById(
"liveClock"
);

if(liveClock){

setInterval(()=>{

liveClock.innerText =
new Date().toLocaleTimeString();

},1000);

}

/* LIVE NOTIFICATIONS */

const notifications = [

"⚡ Neural Core Stable",
"🌌 Quantum Link Established",
"🤖 Prime AI Monitoring",
"🔒 Security Layer Active",
"🚀 System Performance Optimal",
"💎 OmnixoraCore Online"

];

function addLiveNotification(){

const center =
document.getElementById(
"notificationCenter"
);

if(!center) return;

const item =
document.createElement("div");

item.className =
"notification-item";

item.innerText =

notifications[
Math.floor(
Math.random() *
notifications.length
)
];

center.prepend(item);

if(center.children.length > 4){

center.lastElementChild.remove();

}

}

setInterval(
addLiveNotification,
5000
);

/* SYSTEM METRICS */

function randomMetric(){

const cpu =
Math.floor(
Math.random()*40 + 50
);

const memory =
Math.floor(
Math.random()*35 + 55
);

const ai =
Math.floor(
Math.random()*20 + 80
);

document.getElementById(
"cpuBar"
).style.width =
cpu + "%";

document.getElementById(
"cpuText"
).innerText =
cpu + "%";

document.getElementById(
"memoryBar"
).style.width =
memory + "%";

document.getElementById(
"memoryText"
).innerText =
memory + "%";

document.getElementById(
"aiBar"
).style.width =
ai + "%";

document.getElementById(
"aiText"
).innerText =
ai + "%";

}

setInterval(
randomMetric,
3000
);

randomMetric();

/* TERMINAL SYSTEM */

const terminalInput =
document.getElementById(
"terminalCommand"
);

const terminalOutput =
document.getElementById(
"terminalOutput"
);

function addTerminalLine(text){

const line =
document.createElement("div");

line.className =
"terminal-line";

line.innerText = text;

terminalOutput.appendChild(
line
);

terminalOutput.scrollTop =
terminalOutput.scrollHeight;

}

function runCommand(cmd){

switch(cmd){

case "help":

addTerminalLine(
"help"
);

addTerminalLine(
"status"
);

addTerminalLine(
"profile"
);

addTerminalLine(
"system scan"
);

addTerminalLine(
"launch ai"
);

addTerminalLine(
"open dashboard"
);

addTerminalLine(
"open profile"
);

addTerminalLine(
"theme cyan"
);

addTerminalLine(
"theme violet"
);

addTerminalLine(
"theme orange"
);

addTerminalLine(
"clear"
);

break;

case "status":

addTerminalLine(
"System Status: ONLINE"
);

break;

case "profile":

addTerminalLine(
"User: " +
(localStorage.getItem("vk_username") || "Guest")
);

break;

case "ai":

addTerminalLine(
"Prime AI Active"
);

break;

case "clear":

terminalOutput.innerHTML = "";

break;

case "theme cyan":

applyTheme("cyan");

addTerminalLine(
"Theme switched to CYAN"
);

break;

case "theme violet":

applyTheme("violet");

addTerminalLine(
"Theme switched to VIOLET"
);

break;

case "theme orange":

applyTheme("orange");

addTerminalLine(
"Theme switched to ORANGE"
);

break;

case "open dashboard":

document
.getElementById("dashboard")
.scrollIntoView({
behavior:"smooth"
});

addTerminalLine(
"Opening Dashboard..."
);

break;

case "open profile":

document
.getElementById("profiles")
.scrollIntoView({
behavior:"smooth"
});

addTerminalLine(
"Opening Profile..."
);

break;

case "launch ai":

document
.getElementById("ai")
.scrollIntoView({
behavior:"smooth"
});

addTerminalLine(
"Launching AI Core..."
);

break;

case "system scan":

addTerminalLine(
"Scanning System..."
);

setTimeout(()=>{

addTerminalLine(
"Neural Core: Stable"
);

},500);

setTimeout(()=>{

addTerminalLine(
"Security Layer: Active"
);

},1000);

setTimeout(()=>{

addTerminalLine(
"AI Core: Online"
);

},1500);

setTimeout(()=>{

addTerminalLine(
"Scan Complete ✓"
);

},2000);

break;

default:

addTerminalLine(
"Unknown Command"
);

}

}

if(terminalInput){

terminalInput.addEventListener(
"keypress",
e=>{

if(e.key==="Enter"){

const cmd =
terminalInput.value
.toLowerCase()
.trim();

addTerminalLine(
"> " + cmd
);

runCommand(cmd);

terminalInput.value = "";

}

}
);

}

/* DAILY MISSIONS */

const missionChecks =
document.querySelectorAll(
".missionCheck"
);

missionChecks.forEach(check=>{

check.addEventListener(
"change",
()=>{

if(check.checked){

const missionText =
check.parentElement.innerText;

if(missionText.includes("100"))
addXP(100);

if(missionText.includes("150"))
addXP(150);

if(missionText.includes("200"))
addXP(200);

showNotification(
"Mission Complete 🚀"
);

}

}
);

});

/* PROFILE DATABASE */

function saveSlot(slot){

const profile = {

name:
nameInput.value,

bio:
bioInput.value,

xp:
xp,

avatar:
avatarPreview.innerText

};

localStorage.setItem(
"vk_slot_" + slot,
JSON.stringify(profile)
);

showNotification(
"Saved To Slot " + slot
);

updateSlotStatus();

}

function loadSlot(slot){

const profile =
JSON.parse(
localStorage.getItem(
"vk_slot_" + slot
)
);

if(!profile){

showNotification(
"Empty Slot"
);

return;

}

nameInput.value =
profile.name;

bioInput.value =
profile.bio;

displayName.textContent =
profile.name;

bioPreview.textContent =
profile.bio;

avatarPreview.innerText =
profile.avatar;

xp =
profile.xp || xp;

updateXP();

showNotification(
"Loaded Slot " + slot
);

}

function deleteSlot(slot){

localStorage.removeItem(
"vk_slot_" + slot
);

showNotification(
"Deleted Slot " + slot
);

updateSlotStatus();

}

document.getElementById(
"saveSlot1"
)?.addEventListener(
"click",
()=>saveSlot(1)
);

document.getElementById(
"loadSlot1"
)?.addEventListener(
"click",
()=>loadSlot(1)
);

document.getElementById(
"deleteSlot1"
)?.addEventListener(
"click",
()=>deleteSlot(1)
);

document.getElementById(
"saveSlot2"
)?.addEventListener(
"click",
()=>saveSlot(2)
);

document.getElementById(
"loadSlot2"
)?.addEventListener(
"click",
()=>loadSlot(2)
);

document.getElementById(
"deleteSlot2"
)?.addEventListener(
"click",
()=>deleteSlot(2)
);

document.getElementById(
"saveSlot3"
)?.addEventListener(
"click",
()=>saveSlot(3)
);

document.getElementById(
"loadSlot3"
)?.addEventListener(
"click",
()=>loadSlot(3)
);

document.getElementById(
"deleteSlot3"
)?.addEventListener(
"click",
()=>deleteSlot(3)
);

function updateSlotStatus(){

for(let i=1;i<=3;i++){

const slot =
localStorage.getItem(
"vk_slot_" + i
);

const status =
document.getElementById(
"slot" + i + "Status"
);

if(!status) continue;

status.innerText =
slot
? "OCCUPIED"
: "EMPTY";

}

}

updateSlotStatus();


if(avatarUpload){

avatarUpload.addEventListener(
"change",
function(){

const file =
this.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload = function(e){

avatarPreview.innerHTML =

`<img src="${e.target.result}"
style="
width:100%;
height:100%;
object-fit:cover;
border-radius:50%;
">`;

localStorage.setItem(
"vk_avatar",
e.target.result
);

showNotification(
"Avatar Updated 📸"
);

};

reader.readAsDataURL(file);

}
);

}

const bannerUpload =
document.getElementById(
"bannerUpload"
);

if(bannerUpload){

bannerUpload.addEventListener(
"change",
function(){

const file =
this.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload = function(e){

const banner =
document.getElementById(
"profileBanner"
);

banner.style.backgroundImage =

`url(${e.target.result})`;

banner.style.backgroundSize =
"cover";

banner.style.backgroundPosition =
"center";

localStorage.setItem(
"oc_banner",
e.target.result
);

showNotification(
"Banner Updated 🚀"
);

};

reader.readAsDataURL(file);

}
);

}

const savedBanner =
localStorage.getItem(
"oc_banner"
);

if(savedBanner){

const banner =
document.getElementById(
"profileBanner"
);

if(banner){

banner.style.backgroundImage =
`url(${savedBanner})`;

banner.style.backgroundSize =
"cover";

banner.style.backgroundPosition =
"center";

}

}
