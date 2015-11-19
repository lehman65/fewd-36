// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entry = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;
//var inputVal = input.value;
var receipt = {
	"items": []

}
window.addEventListener("load", pageLoad);
form.addEventListener("submit", enter);
//event handler functions
//solution to add localstorage in color-switcher pageLoad()
function pageLoad(event)
 {
 	// error checking. return early if nothing saved yet
 		if (localStorage.getItem("receipt") == null) {
 			return;
 		}
 		//repop. list
	receipt = JSON.parse(localStorage.getItem('receipt'));
	receipt.items.forEach(createLine);
}
function enter(event) {
	event.preventDefault();
	//get the current entry val fro form, convert to number wwith parsefloat
	var entry = parseFloat(input.value);
	//update page
	receipt.items.push(entry);
	createItem(entry);
	form.reset();
	localStorage.setItem('receipt', JSON.stringify(receipt));
}

function createItem(item) {
	var li = document.createElement("li");
	entry.appendChild(li);
	//set the text content for the 
	li.textContent = item;
	//update the value for the the total
	totalValue = totalValue + item;
	total.textContent = totalValue;
	input.value = "";

}
// Events
// ------------------------------------------------
/*form.addEventListener("submit");
console.log(items);
function enter(event) {
event.preventDefault()
}


function addInput(event) {
var inputVal = input.value;
//var entriesVal = entries.value;
var newItem = document.createElement("form");
	newItem.textContent = total;
	form.appendChild(newItem);*
	}
//.className
//.textcontent
//.appendChild()--called on the parent element. pass one argument element(child)
//ex. list.appendChild(item);
//createElement()


//called on document, takes 1 arg., arg. is type of element
//passed as a string in CAPS. ex . document.createElement("LI");
//.addEventListener()*/
