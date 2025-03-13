let boiledEggBtn = document.getElementById("boiledBtn");
let scrambledEggBtn = document.getElementById("scrambledBtn");
let poachedEggBtn = document.getElementById("poachedBtn");
let friedEggBtn = document.getElementById("friedBtn");


let timer;

function showTimer(minutes, eggType){
    //console.log("Function is working");
    document.getElementById("timerContainer").style.display = "block";
    document.getElementById("btnContainer").style.display = "none";
    timerCountdown = document.getElementById("timerCountdown");

    clearInterval(timer);
    let seconds = minutes * 60;

    timer = setInterval(() => {
        let mins = Math.floor(seconds /60);
        timerCountdown.innerHTML = `Cooking ${eggType}: ${mins}:${seconds}`;

        if(seconds > 0){
            seconds--;
        }else{
            clearInterval(timer);
            display.innerHTML = `${eggType} is ready! Enjoy!!`
        }

    }, 1000);
}


function reset(){
    //console.log("Button reset");
    document.getElementById("timerContainer").style.display = "none";
    document.getElementById("btnContainer").style.display = "block";
}
