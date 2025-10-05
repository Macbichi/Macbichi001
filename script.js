let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let running = false;

function updateDisplay (){
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("display").textContent = `${h}:${m}:${s}`;
}
function startTimer() {
    if(running) return;// prevent mutiple intervals
    running = true;
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60){
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}
function stopTimer() {
    clearInterval(timer);
    running = false;
}
function resetTimer() {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}
document.getElementById("start").addEventListener("click",startTimer);
document.getElementById("stop").addEventListener("click",stopTimer);
document.getElementById("reset").addEventListener("click",resetTimer);
updateDisplay();