var red = document.querySelector(".stop");
var yellow = document.querySelector(".slow");
var green = document.querySelector(".go");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
// Events

//red.addEventListener("click", onRed);
//yellow.addEventListener("click", onYellow);
//green.addEventListener("click", onGreen);
button1.addEventListener("click", onGreen);
button1.addEventListener("click", onYellow);
button2.addEventListener("click", onRed);
button2.addEventListener("click", onGreen);
button3.addEventListener("click", onRed);
button3.addEventListener("click", onYellow);
// Functions

function onRed() {
	red.classList.remove("stop");
	
}

function onYellow() {
	yellow.classList.remove("slow");
}

function onGreen(){
	green.classList.remove("go");
}