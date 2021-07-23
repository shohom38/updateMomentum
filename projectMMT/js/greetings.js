const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greeting");
const KEY_USERNAME = "username";
const HIDDEN_CN = "hidden";

function onLoginClick(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(KEY_USERNAME, userName);
    loginForm.classList.add(HIDDEN_CN);
    paintGreetings(userName);
}

function paintGreetings(username) {
    greetings.innerText = `Hi ${username}`;
    greetings.classList.remove(HIDDEN_CN);
}

const savedName = localStorage.getItem(KEY_USERNAME);

// console.log(savedName);
if(savedName === null) {
    loginForm.classList.remove(HIDDEN_CN);
    loginForm.addEventListener("submit", onLoginClick);
} else {
    paintGreetings(savedName);
}