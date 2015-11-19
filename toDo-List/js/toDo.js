//EVENT LISTENERS
document.addEventListener("DOMContentLoaded", function(){
	var input = document.querySelector(".task-item");
	var taskButton = document.querySelector("button");
	var list = document.querySelector(".tasks");
	var date = document.querySelector(".date");
	taskButton.addEventListener("click", addTask);
	
		function addTask(){
			//DECORATE
			var task = input.value;
			var taskDate = date.value;
			var addLi = document.createElement("li");
			var checkbox = document.createElement("input");
			var labelTask = document.createElement("label");
			var labelDate = document.createElement("label");
			//SET ATTRIB. TASK + DATE
				checkbox.setAttribute("type", "checkbox");
				labelTask.textContent = task;
				labelDate.textContent = "(" + taskDate + ")";
				labelDate.classList.add("gray");
			//ADD TO LI/TASKS
					list.appendChild(addLi);
					addLi.appendChild(checkbox);
					addLi.appendChild(labelTask);
					addLi.appendChild(labelDate);
		}	
});