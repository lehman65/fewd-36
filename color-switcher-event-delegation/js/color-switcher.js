// Structure
// -------------------------------------
var list = document.querySelector("ul");

// Events
// -------------------------------------
list.addEventListener("click", changeColor);

// Event handler functions
// -------------------------------------
function changeColor(event) {

	// Return early unless the swatch was clicked
	if (event.target.tagName === "UL") {
		return;
	}

	var swatch = event.target;
	var color = swatch.className;
	var color = swatch.getAttribute("class");

	var body = document.querySelector("body");
	body.className = color;

	var name = document.querySelector("span");
	name.textContent = color;
}
