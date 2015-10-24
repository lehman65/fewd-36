(var color1 = document.querySelector(".olive");
var color2 = document.querySelector(".salmon");
var color3 = document.querySelector(".burlywood");
var color4 = document.querySelector(".thistle");
var body = document.querySelector("body");
body.setAttribute("class", "olive");

function changeColor(color) {
	var body = document.querySelector("body")
	body.setAttribute("class", color);
}