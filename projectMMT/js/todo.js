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

// let acceess = 2; // 중복 제어 하기 위한 기준

function editToDo(event) {

    var conf = confirm('수정할 내용을 입력한 후 엔터를 치세요!');
    if(conf == true) {
        const editBtnPosition = event.target.parentElement.childNodes[0];
        const delEditBtnPosi = event.target.parentElement;
        // console.log(delEditBtnPosi.id);
        // console.log(delEditBtnPosi);
        let findEditBtn = delEditBtnPosi.getElementsByClassName('editBtn');
        let findText = delEditBtnPosi.getElementsByClassName('spanInList');
        // console.log(findEditBtn);
        // console.log(findText);
        // console.log(findText[0].innerText);
        findText[0].innerText = '';
        findEditBtn[0].remove();
        // console.log(event.target.parentElement.innerText); //arg 값을 로그 찍고 path 활용해서 위치를 알 수 있다. 몇번째 li인지 확인 한다면?
        // console.log(editBtnPosition);
        console.log(delEditBtnPosi.id);
        console.log(delEditBtnPosi);
        var curKey = JSON.parse(localStorage.getItem(TODOS_KEY));
        // console.log(curKey[0].text, 'curKey.text');
        let curTxt = curKey[0].text;
        // console.log(curTxt);
        let curTxtPosition = editBtnPosition;
        // console.log(curTxt.innerText);
        // console.log(curTxt.innerText);
        const editInput = document.createElement("input");
        // curTxt.innerText = editInput.value;
        // if(editInput.value === curtxt.innertxt) {
    
        // }
        editInput.value = curTxt;
        console.log(editInput.value);
        
        if(editInput.value === curTxt) {
            console.log('hey');
            editBtnPosition.insertBefore(editInput, curTxtPosition[1]);
        }else {
            console.log('woo');
        }

        function addTodoByEnter(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                console.log('pushed enter!');
                curTxt = editInput.value;
                toDos.text += editInput.value;
                localStorage.setItem("toDos", toDos.text);
                console.log(curTxt);
                console.log(findText);
                saveToDos();
                findText[0].innerText += curTxt;
                console.log(toDos.text);
                console.log(toDos);
                editInput.remove();
                const editBtn = document.createElement("button");
                editBtn.innerText = "수정하기";
                editBtn.classList.add("editBtn");
                editBtn.addEventListener("click", editToDo);
                delEditBtnPosi.insertBefore(editBtn, delEditBtnPosi.lastChild);


                
                toDos = toDos.filter((toDo) => toDo.id !== parseInt(delEditBtnPosi.id)); //빈 어레이에 필터링한 타겟팅된 list id와 toDo에 남아있는 id값이 같은 경우 삭제한다.
                e.preventDefault();
            }
        }

        editInput.addEventListener('keypress', addTodoByEnter);

        // editInput.value = curtxt.innerText
        // if(editInput.value == curtxt.innerText) {
        //     console.log(curtxt.value, " curtxt.value")
        // }   
        
        // 중복 제거..
        // acceess = acceess -1;
        // if(acceess <= 0) {
        //     console.log('editing..');
            
        // }else {
      
        // }
        // acceess = acceess + 1;
        // saveToDos();
        // let editedBtn = editBtnPosition.childNodes[0];
        // console.log(editedBtn);
    }
}

function paintToDo(newToDo) {
    // console.log("i will paint", newToDo);
    const list = document.createElement("li");
    const spanInList = document.createElement("span");
    spanInList.className += "spanInList";
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
