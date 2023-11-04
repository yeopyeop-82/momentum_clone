const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
// String 들은 대문자로 관리

const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막아준다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
} // 중복되는 부분은 함수로 뺀다 !

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}
