//this is my version of ROCK SCISSORS PAPER
//note: my written english is realy poor so i'm sorry in advance this is not my main language
//many things i did may not be the most efficent way to do this project but for now is my best shot

const STATESHOW = document.querySelector(".STATE");

let humanScore=0;
let computerScore=0;

//this return a random number based from the max range given(in this code we will use 3 so the range goes from 0 to 2 that is exactly the number needed)
function getComputerChoice(max){
    return Math.floor(Math.random()*max);
}

//this is the main function that will make things work togather
function PlayRound(x){
    let comp = getComputerChoice(3);
    let human=x;

    let hflagscore=0;
    let cflagscore=0;

    //adding score based on game rule getting a flag too to update the banner
    if(comp==human){
        humanScore=humanScore+0;
        computerScore=computerScore+0;
        hflagscore=hflagscore+0;
        cflagscore=cflagscore+0;
    }else if(comp==1 && human==0){
        humanScore=humanScore+0;
        computerScore=computerScore+1;
        hflagscore=hflagscore+0;
        cflagscore=cflagscore+1;
    }else if(comp==2 && human==0){
        humanScore=humanScore+1;
        computerScore=computerScore+0;
        hflagscore=hflagscore+1;
        cflagscore=cflagscore+0;
    }else if(comp==0 && human==1){
        humanScore=humanScore+1;
        computerScore=computerScore+0;
        hflagscore=hflagscore+1;
        cflagscore=cflagscore+0;
    }else if(comp==0 && human==2){
        humanScore=humanScore+0;
        computerScore=computerScore+1;
        hflagscore=hflagscore+0;
        cflagscore=cflagscore+1;
    }else if(comp==1 && human==2){
        humanScore=humanScore+1;
        computerScore=computerScore+0;
        hflagscore=hflagscore+1;
        cflagscore=cflagscore+0;
    }else if(comp==2 && human==1){
        humanScore=humanScore+0;
        computerScore=computerScore+1;
        hflagscore=hflagscore+0;
        cflagscore=cflagscore+1;
    }

    //updating state of the game displayed in the banner of the web page
    if(hflagscore==cflagscore){
        STATESHOW.setAttribute("style","color: white;");
        STATESHOW.textContent="SPARE! (human: "+humanScore+" computer: "+computerScore+")";
    }else if(hflagscore<cflagscore){
        STATESHOW.setAttribute("style","color: white;");
        STATESHOW.textContent="Computer WINS! (human: "+humanScore+" computer: "+computerScore+")";
    }else if(hflagscore>cflagscore){
        STATESHOW.setAttribute("style","color: white;");
        STATESHOW.textContent="Human WINS! (human: "+humanScore+" computer: "+computerScore+")";
    }
    
}

const ROCK = document.querySelector("#ROCK");
const PAPER = document.querySelector("#PAPER");
const SCISSORS = document.querySelector("#SCISSORS");

ROCK.addEventListener("click", () => {PlayRound(0)});
PAPER.addEventListener("click", () => {PlayRound(1)});
SCISSORS.addEventListener("click", () => {PlayRound(2)});