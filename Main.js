//this is my version of ROCK SCISSORS PAPER
//note: my written english is realy poor so i'm sorry in advance this is not my main language
//many things i did may not be the most efficent way to do this project but for now is my best shot

//this return a random number based from the max range given(in this code we will use 3 so the range goes from 0 to 2 that is exactly the number needed)
function getComputerChoice(max){
    return Math.floor(Math.random()*max);
}

//this function get the string from a prompt telling player YOUR CHOICE
function getHumanChoice(){
    return prompt("your Choice");
}

//this function uses locale compare to get the non case sensitive information from player and transform it in number easyer to compare whit mat random results
function ChoiceAssign(Choice){
    let ROCK="ROCK"; //0
    let PAPER="PAPER"; //1
    let SCISSORS="SCISSORS"; //2

    if(!ROCK.localeCompare(Choice, "en", { sensitivity: "base" })){
        return 0;
    }else if(!PAPER.localeCompare(Choice, "en", { sensitivity: "base" })){
        return 1;
    }else if(!SCISSORS.localeCompare(Choice, "en", { sensitivity: "base" })){
        return 2;
    }
}

//this is the main function that will make things worck togather
function PlayRound(i, x, y){
    let comp = getComputerChoice(3);
    let human = ChoiceAssign(getHumanChoice());

    //this will contain string for visual purpose
    let LITERATEcomp;
    let LITERATEhuman;

    let humanScore = x;
    let computerScore = y;

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
    console.log("human score is:"+humanScore+" human did:"+LITERATEhuman);
    console.log("computer score is:"+computerScore+" computer did:"+LITERATEcomp);

    //updating state of the game
    if(humanScore>computerScore){
        state="Human WINS!";
    }else{
        state="Computer WINS"
    }

    //recursion time (didn't want to use standard loop)
    i--;
    if(i==0){
        return state
    }else{
        return PlayRound(i, humanScore, computerScore);
    }
}

//telling who wins
console.log(PlayRound(5, 0, 0));
