let hours = 0;
let minutes = 0;
let second = 0;
let millisecond = 0;
let timer;

let display = document.getElementById('display')
let Btn_s = document.getElementById('btn_s')
let Btn_S = document.getElementById('btn_S')
let Btn_R = document.getElementById('btn_R')

function start(){
timer = setInterval(() => {
    millisecond ++
    if (millisecond >= 100) {
        second++
        millisecond = 0
    }
    if (second >= 60) {
        minutes++;
        second = 0;
    }
    if (minutes >= 60) {
        hours++;
        minutes = 0;
    }
    display.innerHTML = `${hours}:${minutes}:${second}:${millisecond}`
    Btn_s.disabled = true
    Btn_S.disabled = !true
    display.style.marginLeft = '50px'
},10)
}

function stop() {
    clearInterval(timer)
    Btn_s.disabled = !true
}

function reset() {
    display.innerHTML = `00:00:00:00`
    clearInterval(timer)
    Btn_s.disabled = !true
    hours = 0;
    minutes = 0;
    second = 0;
    millisecond = 0;
    display.style.marginLeft = '22px'
}

