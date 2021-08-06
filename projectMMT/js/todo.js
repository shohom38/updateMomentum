const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//string으로 바꿔주는
}

function deleteToDo(event) {
    console.log(event.target.parentElement.innerText); //arg 값을 로그 찍고 path 활용해서 위치를 알 수 있다. 몇번째 li인지 확인 한다면?
    const delBtnPosition = event.target.parentElement;
    console.log(delBtnPosition.id);
    var conf = confirm('할 일 목록을 삭제 하시겠습니까?');
    if(conf == true){
        delBtnPosition.remove();
    }
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(delBtnPosition.id)); //빈 어레이에 필터링한 타겟팅된 list id와 toDo에 남아있는 id값이 같은 경우 삭제한다.
    saveToDos();
}

function editToDo(event) {
    console.log(event.target.parentElement.innerText); //arg 값을 로그 찍고 path 활용해서 위치를 알 수 있다. 몇번째 li인지 확인 한다면?
    const editPosition = event.target.parentElement;
    console.log(editPosition.id);
    var conf = confirm('할 일 목록을 수정 하시겠습니까?');
    if(conf == true){
        editBtnPosition.remove();
    }
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(editBtnPosition.id)); //빈 어레이에 필터링한 타겟팅된 list id와 toDo에 남아있는 id값이 같은 경우 삭제한다.
    saveToDos();
}

function paintToDo(newToDo) {
    // console.log("i will paint", newToDo);
    const list = document.createElement("li");
    const spanInList = document.createElement("span");
    list.id = newToDo.id;
    spanInList.innerText = newToDo.text;
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    editBtn.innerText = "수정하기";
    editBtn.classList.add("editBtn");
    editBtn.addEventListener("click", editToDo);
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    list.appendChild(spanInList);
    list.appendChild(editBtn);
    list.appendChild(delBtn);
    // console.log(list);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value = "";
    console.log(newToDo, toDoInput.value);
    const newTodoObj = {
    text:newToDo,
    id: Date.now(),
    }
    toDos.push(newTodoObj);//toDoInput 의 newToDo value를 toDos array에 담는다.
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("hello", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null) {
    const parsedToDos =  JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}