let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");

function stopwatch() {
    seconds++
    if(seconds === 60) {
        seconds = 0;
        minutes++;
        if(minutes === 60) {
            minutes = 0;
            hours++
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds; 



    displayTime.innerHTML = h +":"+ m +":"+ s;
}

startBtn.addEventListener("click", () => {
    function watchStart() {
        if(timer !== null) {
            clearInterval(timer);
        }
        timer = setInterval(stopwatch,1000);
    }
    watchStart()
})

stopBtn.addEventListener("click", () => {
    function watchstop() {
        clearInterval(timer);
    }
    watchstop();
})

resetBtn.addEventListener("click", () => {
    function watchReset() {
        clearInterval(timer);
        let [seconds, minutes, hours] = [0,0,0];
        displayTime.innerHTML = "00:00:00";
    }
    watchReset();
})