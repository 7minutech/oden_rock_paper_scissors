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
        humanScore++;
        set_score_color(PLAYER_WIN,player_score,computer_score)
    }
    else if(humanChoice == computerChoice){
        message.textContent = `You Tie! ${playerChoice} ties ${computerChoice}`;
        set_score_color(TIE,player_score,computer_score)

    }
    else{
        message.textContent = `You lose ${computerChoice} beats ${playerChoice}`;
        computerScore++;
        set_score_color(PLAYER_LOSS,player_score,computer_score)

    }
    if(humanScore > MAX_ROUNDS || computerScore > MAX_ROUNDS){
        determineWinner(humanScore,computerScore);
    }
    player_score.textContent = `Player Score: ${humanScore}`;
    computer_score.textContent = `Computer Score: ${computerScore}`;
    document.getElementById("human_move_img").src = get_move_img_src(humanChoice);
    document.getElementById("computer_move_img").src = get_move_img_src(computerChoice);
}

function get_move_img_src(move){
    if (move == "rock"){
        return "imgs/rock_scaled_down_square.jpeg"
    }
    else if (move == "paper"){  
        return "imgs/paper_scaled_down_square.jpg"
    }
    else{
        return "imgs/scissors_scaled_down_square.jpeg"
    }
}

function set_winner_green(score){
    score.style.color = "#28A745"
}
function set_loser_red(score){
    score.style.color = "#DC3545"
}
function set_tie_yellow(score){
    score.style.color = "#FFC107"
}
function set_score_color(result, human, computer){
    switch(result){
        case PLAYER_WIN:
            set_winner_green(human);
            set_loser_red(computer);
            break;
        case TIE:
            set_tie_yellow(human);
            set_tie_yellow(computer);
            break;
        case PLAYER_LOSS:
            set_loser_red(human);
            set_winner_green(computer);
            break;
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
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const message = document.querySelector("#message");
const player_score = document.querySelector("#player_score")
const computer_score = document.querySelector("#computer_score")
const end_message = document.querySelector("#end-board")
const buttons = document.querySelectorAll("button");
const human_move = document.querySelector("#human_move_img")
const computer_move = document.querySelector("#computer_move_img")
const PLAYER_WIN = 0
const TIE = 1
const PLAYER_LOSS = 2
player_score.textContent = `Player Score: ${humanScore}`;
computer_score.textContent = `Computer Score: ${computerScore}`;


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

