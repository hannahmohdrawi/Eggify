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
    eggPara = document.getElementById("cookingEgg");

    clearInterval(timer);
    let seconds = minutes % 60; //Convert minutes to seconds

    timer = setInterval(() => {
        let minutes = Math.floor(seconds /60);
        eggPara.innerHTML = `Cooking ${eggType}:`
        timerCountdown.innerHTML = `${minutes}:${seconds}`;


        if(seconds > 0){
            seconds--;
        }else{
            clearInterval(timer);
            timerCountdown.innerHTML = `${eggType} is ready! Enjoy!!`;
            timerCountdown.style.color = "cornflowerblue";
            eggPara.innerHTML = "";
            timeRemaining.innerHTML = "";
        }

    }, 500);
}


function reset(){
    //console.log("Button reset");
    document.getElementById("timerContainer").style.display = "none";
    document.getElementById("btnContainer").style.display = "block";
}
