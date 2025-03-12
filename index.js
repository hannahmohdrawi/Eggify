let boiledEggBtn = document.getElementById("boiledBtn");
let scrambledEggBtn = document.getElementById("scrambledBtn");
let poachedEggBtn = document.getElementById("poachedBtn");
let friedEggBtn = document.getElementById("friedBtn");




function showTimer(){
    console.log("Function is working");
    document.getElementById("timerContainer").style.display = "block";
    document.getElementById("btnContainer").style.display = "none";
}


function reset(){
    console.log("Button reset");
    document.getElementById("timerContainer").style.display = "none";
    document.getElementById("btnContainer").style.display = "block";
}