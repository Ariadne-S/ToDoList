function isWhitespace(text) {
    return !/\S/.test(text);
}

function dateFormat(d){
    var monthNames = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

    var currDate = d.getDate();
    var currMonth = d.getMonth();
    var currYear = d.getFullYear();
    return (currDate + " " + monthNames[currMonth] + " " + currYear);
}

function addToDo() {
    var reminderInputValue = reminderInput.value; 
    if (reminderInputValue != "" && !isWhitespace(reminderInputValue)) {
        var todoItems = document.querySelector(".todo-items");
        var item = document.createElement ("li");
        var text = document.createElement("span");
        var deleteButton =document.createElement("button");
        text.innerText = reminderInputValue;
        deleteButton.innerText = "X";
        deleteButton.className = "delete-button";
        item.appendChild(text);
        item.appendChild(deleteButton);
        todoItems.appendChild(item);
        reminderInput.value = "";

        //
        deleteButton.addEventListener("click", function(){
            item.remove();
        });
   }
}

var d = new Date();
document.getElementById("date").innerText = dateFormat(d);

var reminderInput = document.getElementById("reminder-input");

var button = document.querySelector(".button");
button.addEventListener("click", addToDo);
reminderInput.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        addToDo();
    }
});

var ticked = document.querySelector(item);
ticked.classList.add("itemComplete");