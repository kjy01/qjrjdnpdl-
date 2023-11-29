const clock = document.querySelector("#clock");



clock.innerText = "00:00:00"

function sayHello(){
    console.log("Hello");
}

sayHello();


const date = new Date();



function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`

}

getClock();
setInterval(getClock, 1000);

console.log("1".padStart(2, "0"))