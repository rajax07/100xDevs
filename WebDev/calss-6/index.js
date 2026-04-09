// DOM (Document Object Model) / DOM Manipulation

let todoIndex = 1;


function addTodo(){
    // write the code that reads the contents of the input box
    // createss a new todo on the html dom
           // step 1 - create a new div element i js (as a variable)
           // step 2 - insert that div element to  a parent div
    // clears the input box
    
    const element = document.getElementById("todoInput")
    const todo = element.value;
    if (todo === ""){
        return;
    }
    element.value = "";

    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id","todo" + todoIndex);

    const todoSpan = document.createElement("span")
    todoSpan.innerHTML = todo;

    todoDiv.appendChild(todoSpan)

    const todoButton = document.createElement("button")
    todoButton.innerHTML = "Delete todo"
    todoButton.setAttribute("onClick", "deleteTodo(" + todoIndex + ")");

    todoDiv.appendChild(todoButton)

    document.getElementById("todos").appendChild(todoDiv)
    todoIndex = todoIndex + 1;



}

function deleteTodo(index) {
    // alert("delete todo called with" + index);
    const divElement = document.getElementById("todo" + index);
    divElement.parentElement.removeChild(divElement);
    // alternatively
    // document.getElementById("todos").removeChild(divElement);

}