//this is my version of ROCK SCISSORS PAPER
//note: my written english is realy poor so i'm sorry in advance this is not my main language
//many things i did may not be the most efficent way to do this project but for now is my best shot

const STATESHOW = document.querySelector(".STATE");

//this return a random number based from the max range given(in this code we will use 3 so the range goes from 0 to 2 that is exactly the number needed)
function getComputerChoice(max){
    return Math.floor(Math.random()*max);
}

//this is the main function that will make things worck togather
function PlayRound(x){
    let comp = getComputerChoice(3);
    let human=x;

    let humanScore=0;
    let computerScore=0;

    //adding score based on game rule
    if(comp==human){
        humanScore=humanScore+0;
        computerScore=computerScore+0;
    }else if(comp==1 && human==0){
        humanScore=humanScore+0;
        computerScore=computerScore+1;
    }else if(comp==2 && human==0){
        humanScore=humanScore+1;
        computerScore=computerScore+0;
    }else if(comp==0 && human==1){
        humanScore=humanScore+1;
        computerScore=computerScore+0;
    }else if(comp==0 && human==2){
        humanScore=humanScore+0;
        computerScore=computerScore+1;
    }else if(comp==1 && human==2){
        humanScore=humanScore+1;
        computerScore=computerScore+0;
    }else if(comp==2 && human==1){
        humanScore=humanScore+0;
        computerScore=computerScore+1;
    }

    //updating state of the game
    if(humanScore>computerScore){
        STATESHOW.setAttribute("style","color: white;");
        STATESHOW.textContent="Human WINS!";
    }else{
        STATESHOW.setAttribute("style","color: white;");
        STATESHOW.textContent="Computer WINS!";
    }
    
}

const ROCK = document.querySelector("#ROCK");
const PAPER = document.querySelector("#PAPER");
const SCISSORS = document.querySelector("#SCISSORS");

ROCK.addEventListener("click", () => {PlayRound(0)});
PAPER.addEventListener("click", () => {PlayRound(1)});
SCISSORS.addEventListener("click", () => {PlayRound(2)});
