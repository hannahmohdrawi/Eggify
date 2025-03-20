let boiledEggBtn = document.getElementById("boiledBtn");
let scrambledEggBtn = document.getElementById("scrambledBtn");
let poachedEggBtn = document.getElementById("poachedBtn");
let friedEggBtn = document.getElementById("friedBtn");


let timer;

function showTimer(minutes, eggType) {
    document.getElementById("timerContainer").style.display = "block";
    document.getElementById("btnContainer").style.display = "none";

    let timerCountdown = document.getElementById("timerCountdown");
    let eggPara = document.getElementById("cookingEgg");
    let timeRemaining = document.getElementById("timeRemaining");

    clearInterval(timer); 
    let seconds = minutes * 60; 

    eggPara.innerHTML = `Cooking ${eggType}...`;
    timeRemaining.style.display = "block"; 
    timerCountdown.style.color = "black"; 

    timer = setInterval(() => {
        let displayMinutes = Math.floor(seconds / 60);
        let displaySeconds = seconds % 60;
        let formattedSeconds = displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds;

        timerCountdown.innerHTML = `${displayMinutes}:${formattedSeconds}`;

        if (seconds > 0) {
            seconds--; 
        } else {
            clearInterval(timer);
            timerCountdown.innerHTML = `${eggType} is ready! Enjoy!!`;
            timerCountdown.style.color = "cornflowerblue";
            eggPara.innerHTML = "";
            timeRemaining.style.display = "none";
        }
    }, 1000); 
}


function reset(){
    //console.log("Button reset");
    document.getElementById("timerContainer").style.display = "none";
    document.getElementById("btnContainer").style.display = "block";
}
