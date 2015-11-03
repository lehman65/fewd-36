var red = document.querySelector(".stop");
var yellow = document.querySelector(".slow");
var green = document.querySelector(".go");


// Events

red.addEventListener("click", onRed);
yellow.addEventListener("click", onYellow);
green.addEventListener("click", onGreen);
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