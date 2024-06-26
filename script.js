let humanScore = 0
let computerScore = 0
let playerChoice = "";
function getComputerChoice() {
    // generates number between 1 and 3
    // returns rock paper or scissors
    let rnum = Math.floor(Math.random() * 3) + 1
    if(rnum == 1){
        return "rock"
    }
    else if(rnum == 2){
        return "paper"
    }
    else if(rnum == 3){
        return "scissors"
    }
    else{
        return "invalid"
    }
}
function determineWinner(humanScore,computerScore){
    if(humanScore<computerScore){
        end_message.textContent = "Computer Wins!"
    }
    else if(humanScore >computerScore){
        end_message.textContent = "Player Wins!"

    }
    else{
        end_message.textContent = "It's a Tie!"

    }
}
function playRound(humanChoice,computerChoice){
    const MAX_ROUNDS = 4;
    //compares human and computer moves to determine winner
    
    if((humanChoice == "rock" && computerChoice == "scissors") 
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")){
        message.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++
    }
    else if(humanChoice == computerChoice){
        message.textContent = `You Tie! ${playerChoice} ties ${computerChoice}`;
        humanScore++;
        computerScore++;
    }
    else{
        message.textContent = `You lose ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }
    score.textContent = `Player Score: ${humanScore}\nComputer Score: ${computerScore}`;
    if(humanScore > MAX_ROUNDS || computerScore > MAX_ROUNDS){
        determineWinner(humanScore,computerScore);
    }
}
/*function playGame(){
    //for loop calls play round
    //display end result once complete
    const NUM_OF_GAMES = 5
    for(let i = 0; i<NUM_OF_GAMES;i++){
        playRound(getHumanChoice(),getComputerChoice())
    }
    if(humanScore>computerScore){
        console.log("You won! " + humanScore + " to " + computerScore)
    }
    else if(humanScore<computerScore){
        console.log("You lost! " + computerScore + " to " + humanScore)
    }
    else{
        console.log("You tied! " + computerScore + " to " + humanScore)
    }
}
*/
const menu = document.querySelector("body")
//style body
menu.setAttribute("style","background-color: rgb(32,32,32);color: white;font-size: 24px;");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const message = document.querySelector("#message");
const score = document.querySelector("#score-board")
const end_message = document.querySelector("#end-board")
const buttons = document.querySelectorAll("button");
//style buttons
buttons.forEach(button => {
    button.setAttribute("style","font-size: 18px");
})
message.setAttribute("style", "margin-top: 10px");
//once button clicked call playRound()
menu.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.id){
        case "rock":
            
            playerChoice = "rock";
            playRound(playerChoice,getComputerChoice())
            break;
        case "paper":
            
            playerChoice = "paper";
            playRound(playerChoice,getComputerChoice())
            break;
        case "scissors":
            playerChoice = "scissors";
            playRound(playerChoice,getComputerChoice())
            break;
    }
})

