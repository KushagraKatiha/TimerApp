const time = document.getElementsByTagName('input');
const controls = document.getElementsByTagName('button');
const watch = document.getElementsByClassName('main-wraper');
const ring = document.getElementsByClassName('ring');

time[0].value = "00";
time[1].value = "00";
time[2].value = "00";

let checkVal = ()=>{
    for(let i = 1; i < time.length; i++){
        if(time[i].value < 0 || time[i].value > 59){
            time[i].value = "00";
        }
    }
}


let timer = null; 

function startTimer() {
    checkVal();
        if (timer === null) {
        timer = setInterval(() => {
            if (time[2].value > 0) {
                time[2].value--;
            
            } else if (time[1].value > 0) {
                time[1].value--;
                time[2].value = 59;
              
            } else if (time[0].value > 0) {
                time[0].value--;
                time[1].value = 59;
                time[2].value = 59;
           
            } else {
                clearInterval(timer);
                timer = null;
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = 0;
    time[0].value = "00";
    time[1].value = "00";
    time[2].value = "00";
}

function pauseTimer() {
    clearInterval(timer);
    timer = 0;
}

controls[0].addEventListener('click', startTimer );  
controls[1].addEventListener('click', pauseTimer);
controls[2].addEventListener('click', stopTimer);