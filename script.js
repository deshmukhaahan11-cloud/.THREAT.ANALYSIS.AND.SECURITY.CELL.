const users=["nightagent01","nightagent02","nightagent03","nightagent04","president"];

function login(){
if(users.includes(user.value)&&pass.value==="RED"){
loginBox.classList.add("hidden");
roleBox.classList.remove("hidden");
}else alert("ACCESS DENIED");
}

function openTASC(){
roleBox.classList.add("hidden");
tascPanel.classList.remove("hidden");
loadData();
}

function openAgent(){
roleBox.classList.add("hidden");
agentPanel.classList.remove("hidden");
}

function show(id){
document.querySelectorAll(".section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}

function alertSystem(){
alert("🚨 TASC ALERT ACTIVATED 🚨");
new Audio("https://www.soundjay.com/button/beep-07.wav").play();
}

function saveData(id){
localStorage.setItem(id,document.getElementById(id).value);
alert("SAVED");
}

function loadData(){
["tsData","classData"].forEach(id=>{
if(localStorage.getItem(id))
document.getElementById(id).value=localStorage.getItem(id);
});
}

function addWanted(){
let name=wantedName.value;
if(!name)return;
let list=JSON.parse(localStorage.getItem("wanted")||"[]");
list.push(name);
localStorage.setItem("wanted",JSON.stringify(list));
renderWanted();
wantedName.value="";
}

function renderWanted(){
let list=JSON.parse(localStorage.getItem("wanted")||"[]");
wantedList.innerHTML="";
list.forEach(n=>{
let li=document.createElement("li");
li.textContent=n;
wantedList.appendChild(li);
});
}
renderWanted();
