document.addEventListener("DOMContentLoaded", function() {
    // Select the necessary elements
    const addButton = document.getElementById("button1");
    const taskInput = document.getElementById("b1");
    const taskList = []; // This array will hold the tasks
    
    // Function to add a new task
    addButton.addEventListener("click", function() {
        const task = taskInput.value.trim();
        if (task !== "") {
            taskList.push(task); // Add task to the array
            updateTaskDisplay(); // Update the task display
            taskInput.value = ""; // Clear input after adding
        } else {
            alert("Please enter a valid task!");
        }
    });

    // Function to remove a task
    function removeTask(taskToRemove) {
        const index = taskList.indexOf(taskToRemove);
        if (index !== -1) {
            taskList.splice(index, 1); // Remove the task from the array
            updateTaskDisplay(); // Update the task display
        } else {
            alert("Task not found!");
        }
    }

    // Function to update the task list display
    function updateTaskDisplay() {
        const taskDisplay = document.getElementById("taskList");
        taskDisplay.innerHTML = ""; // Clear the list before updating
        
        taskList.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = task;

            // Create a remove button for each task
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");
            
            // Add an event listener to the remove button
            removeButton.addEventListener("click", function() {
                removeTask(task);
            });

            // Append the button to the list item
            listItem.appendChild(removeButton);
            taskDisplay.appendChild(listItem);
        });
    }
});


