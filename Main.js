//this is my version of ROCK SCISSORS PAPER
//note: my written english is realy poor so i'm sorry in advance this is not my main language
//many things i did may not be the most efficent way to do this project but for now is my best shot


//this return a random number based from the max range given(in this code we will use 3 so the range goes from 0 to 2 that is exactly the number needed)
function getComputerChoice(max){
    return Math.floor(Math.random()*max);
}

//this is the main function that will make things worck togather
function PlayRound(x){
    let comp = getComputerChoice(3);
    let human=x;

    //this will contain string for visual purpose
    let LITERATEcomp;
    let LITERATEhuman;

    let humanScore=0;
    let computerScore=0;

    let state;
    

    //valutating comp number
    if(comp==0){
        LITERATEcomp="ROCK";
    }else if(comp==1){
        LITERATEcomp="PAPER";
    }else if(comp==2){
        LITERATEcomp="SCISSORS";
    }
                                    //all of this is just for console visual purpose
    //valutating human number
    if(human==0){
        LITERATEhuman="ROCK";
    }else if(human==1){
        LITERATEhuman="PAPER";
    }else if(human==2){
        LITERATEhuman="SCISSORS";
    }

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

    //giving insight of what is appening
    console.log("human did:"+LITERATEhuman);
    console.log("computer did:"+LITERATEcomp);

    //updating state of the game
    if(humanScore>computerScore){
        state="Human WINS!";
    }else{
        state="Computer WINS";
    }

    console.log(state);
    
}

const ROCK = document.querySelector("#ROCK");
const PAPER = document.querySelector("#PAPER");
const SCISSORS = document.querySelector("#SCISSORS");

ROCK.addEventListener("click", () => {PlayRound(0)});
PAPER.addEventListener("click", () => {PlayRound(1)});
SCISSORS.addEventListener("click", () => {PlayRound(2)});
