// Structure
// ----------------------------------------------
var pictures = document.querySelector(".pictures");
var names = document.querySelector(".names");
var feed = document.querySelector(".feed");

// Events
// ----------------------------------------------


// Setup
// ----------------------------------------------
var cat = {
	picture: "baby.jpg",
	name: "Dipsy"
};

// Event handlers
// ----------------------------------------------
window.addEventListener("load", setupPage)
;
// Update page functions
// ----------------------------------------------
function setupPage() {
	mockPictures.forEach(createPicture);
	mockNames.forEach(createName);
	mockFeed.forEach(createPost);
}

function createName(item) {
	//step 1 create elements
	var li = document.createElement("li");
	
	 //step 2 decorate elements
	 li.textContent = item;

	//step3 insert in the dom
	names.appendChild(li);
	
}


function createPicture(item) {
	//step 1 create elements
	var li = document.createElement("li");
	var img = document.createElement("img");
	 //step 2 decorate elements
	 img.setAttribute("src", "images/" + item);

	//step3 insert in the dom
	li.appendChild(img);
	pictures.appendChild(li);
}

function createPost(item) {
	//step 1 create elements
	var li = document.createElement("li");
	var p = document.createElement("p");
	var img = document.createElement("img");
	
	 //step 2 decorate elements
	 p.textContent = item.name;
	 img.setAttribute("src", "images/" + item.picture);
	 

	//step3 insert in the dom
	li.appendChild(p);
	li.appendChild(img);
	feed.appendChild(li);
	
}







