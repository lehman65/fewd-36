var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var box5 = document.querySelector(".box5");
var box6 = document.querySelector(".box6");
var box7 = document.querySelector(".box7");
var box8 = document.querySelector(".box8");
var box9 = document.querySelector(".box9");

box1.addEventListener("click", play);
box2.addEventListener("click", play);
box3.addEventListener("click", play);
box4.addEventListener("click", play);
box5.addEventListener("click", play);
box6.addEventListener("click", play);
box7.addEventListener("click", play);
box8.addEventListener("click", play);
box9.addEventListener("click", play);

var turn = "X";

function play (event) {
	var box = event.target;
	box.textContent = turn;
	if (turn =="X") {
		turn="O";
	}
	else { 
		turn="X";
	}
}