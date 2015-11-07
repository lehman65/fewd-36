// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;
var inputVal = input.value;

// Events
// ------------------------------------------------
form.addEventListener("submit");
console.log(item);
function enter(event) {
event.preventDefault()
}


function addInput(event) {
var inputVal = input.value;
//var entriesVal = entries.value;
var newItem = document.createElement("form");
	newItem.textContent = total;
	form.appendChild(newItem);
	}
//.className
//.textcontent
//.appendChild()--called on the parent element. pass one argument element(child)
//ex. list.appendChild(item);
//createElement()


//called on document, takes 1 arg., arg. is type of element
//passed as a string in CAPS. ex . document.createElement("LI");
//.addEventListener()
