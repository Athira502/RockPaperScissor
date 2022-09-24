let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const SCOREBOARD_div = document.querySelector(".SCOREBOARD");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber =  Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(letter){
    if(letter==="r") return "rock";
    if(letter==="p") return "paper";
    if(letter==="s") return "scissor";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = convertToWord(userChoice) + "beats" + convertToWord(computerChoice) + ".You Win!";
}

function lose(userChoice, computerChoice){
computerScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
results_p.innerHTML = convertToWord(userChoice) + " loses " + convertToWord(computerChoice) + ".Computer Win!"; 
}

function draw(userChoice, computerChoice){
results_p.innerHTML = convertToWord(userChoice) + " and " + convertToWord(computerChoice) + ".draw!";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs" :
        case "pr" :
        case "sp" :
         win(userChoice,computerChoice);
         break;  
        case "sr" :
        case "rp" :
        case "ps" :
         lose(userChoice,computerChoice);
         break;  
        case "rr" :
        case "pp" :
        case "ss" :
         draw(userChoice,computerChoice);
         break;  
            

    }
}

rock_div.addEventListener('click', function(){
    game("r");
})
paper_div.addEventListener('click', function(){
    game("p");
})
scissor_div.addEventListener('click', function(){
    game("s");
})
