const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY ,username)
    greeting.innerText = `안녕하세요! ${username}오신 것을 환영합니다.`;
    greeting.classList.remove("hidden");
    console.log(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    greeting.innerText = `안녕하세요! ${savedUsername}에 오신 것을 환영합니다.`;
    greeting.classList.remove("hidden");
}
