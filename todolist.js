var button = document.querySelector(".button");
button.addEventListener("click", function(){
    var todoItems = document.querySelector(".todo-items");
    var item = document.createElement ("li");
    item.innerText = "Go to Bed!";
    todoItems.appendChild(item);
})