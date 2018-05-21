function isWhitespace(text) {
    return !/\S/.test(text);
}

function dateFormat(date) {
    var monthNames = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var currentDate = date.getDate();
    var currentMonth = date.getMonth();
    var currentYear = date.getFullYear();
    return (currentDate + " " + monthNames[currentMonth] + " " + currentYear);
}

function addToDo() {
    var reminderInputValue = reminderInput.value; 
    if (reminderInputValue != "" && !isWhitespace(reminderInputValue)) {
        var todoList = document.querySelector(".todo-list");
        var todoItem = document.createElement ("li");
        var todoText = document.createElement("span");
        var deleteButton = document.createElement("button");
        todoText.innerText = reminderInputValue;
        todoItem.className = "todo-item";
        deleteButton.innerText = "X";
        deleteButton.className = "delete-button";
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
        reminderInput.value = "";

        deleteButton.addEventListener("click", function() {
            todoItem.remove();
        });

        todoItem.addEventListener("click", function() {
            var itemComplete = "item-complete";
            if (todoItem.classList.contains(itemComplete)) {
                todoItem.classList.remove(itemComplete);
            } else {
                todoItem.classList.add(itemComplete);
            }
        });
   }
}


var date = new Date();
document.getElementById("date").innerText = dateFormat(date);

var reminderInput = document.getElementById("reminder-input");

var addItemButton = document.querySelector(".add-button");
addItemButton.addEventListener("click", addToDo);
reminderInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addToDo();
    }
});