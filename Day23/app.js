let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow","red","purple","green"];

let h2=document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 1000);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;


    let randIdx=Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    console.log(randIdx);
    console.log(randbtn);
    console.log(randColor);
    //random btn choose
    gameFlash(randbtn);
}

function btnPress() {

    console.log(this);
    let btn =  this;
    userFlash(btn);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

