document.addEventListener("DOMContentLoaded", function() {
    // elements 
    const startButton = document.querySelector('#start-button')
    const pauseButton = document.querySelector('#pause-button')
    const resetButton = document.querySelector('#reset-button')
    const timer = document.querySelector('#time-string')

    // variables
    const defaultMins = 25
    const defaultSecs = 0;
    let mins = defaultMins;
    let secs = defaultSecs;
    let timerString = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    let running = false


    resetButton.addEventListener('click', () => {
    if (running) {
        clearInterval(intervalID);
        running = false
    }
    mins = defaultMins;
    secs = defaultSecs;
    timerString = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timer.innerText = timerString;
    });

    let intervalID = null
    startButton.addEventListener('click', () => {
    if (!running) {
        running = true
        intervalID = setInterval(decrementTime, 1000)
    }
    });

    pauseButton.addEventListener('click', () => {
    if (running) {
        clearInterval(intervalID);
        running = false
    }
    });

    function decrementTime() {
    if (secs < 1) {
        if (mins < 1) {
            clearInterval(intervalID);
            alert('Alarm Done! Take a 5 Minute break')
            running = false;
        } else {
        mins -= 1
        secs = 59
        }
    } else {
        secs -= 1
    }
    const timerString = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timer.innerText = timerString;
    }
});