const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
    // console.log("i will paint", newToDo);
    const list = document.createElement("li");
    const spanInList = document.createElement("span");
    list.appendChild(spanInList);
    spanInList.innerText = newToDo;
    console.log(list);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value = "";
    console.log(newToDo, toDoInput.value);
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);