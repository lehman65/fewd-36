//EVENT LISTENERS
document.addEventListener("DOMContentLoaded", function(){
	var input = document.querySelector(".task-item");
	var taskButton = document.querySelector("button");
	var list = document.querySelector(".tasks");
	var date = document.querySelector(".date");
	taskButton.addEventListener("click", createTask);
	//setup
	var totalValue = 0;
	var taskList = {
		"items": []
	};

	window.addEventListener ("load", setPageState);
	taskButton.addEventListener ("click", storage);

	function setPageState(event) {

		// error checking. return early if nothing saved yet
		if (localStorage.getItem("taskList") == null) {
			return;
		}

		// Repopulate the list
		receipt = JSON.parse(localStorage.getItem("taskList"));

		receipt.items.forEach(createTask);
	}

		
	function storage(event) {
		event.preventDefault();
var task = {
	"name": input.value,
	"date": date.value,
	"done": false
}

taskList.items.push(task);
		// get the current entry value from form, convert to number with parseFloat
		/*var lists = parseFloat(input.value);

		// update page*/
		createTask(task);

		// clean up!
		input.value = "";

		// save to local storage
		//receipt.items.push(lists);
		localStorage.setItem("taskList", JSON.stringify(taskList));
	}

	
		function createTask(task){
			//DECORATE
			
			var addLi = document.createElement("li");
			var checkbox = document.createElement("input");
			var labelTask = document.createElement("label");
			var labelDate = document.createElement("label");


			//SET ATTRIB. TASK + DATE
				checkbox.setAttribute("type", "checkbox");
				if (task.done) {
					checkbox.setAttribute("checked", true);
				}
				labelTask.textContent = task.name;
				labelDate.textContent = "(" + task.date + ")";
				labelDate.classList.add("gray");
				checkbox.addEventListener("click", taskClicked);
			//ADD TO LI/TASKS
					list.appendChild(addLi);
					addLi.appendChild(checkbox);
					addLi.appendChild(labelTask);
					addLi.appendChild(labelDate);
		}	
		function taskClicked(event) {
			console.log("taskClicked");
			var checkbox = event.target;
			var text = checkbox.nextSibling.textContent;
			console.log(checkbox.checked);
			console.log(text);
			taskList.items.forEach(updateCheckedState);
			function updateCheckedState(task) {
				if (task.name == text) {
					task.done = checkbox.checked;
					localStorage.setItem("taskList", JSON.stringify(taskList));
				}

			}
		}


});