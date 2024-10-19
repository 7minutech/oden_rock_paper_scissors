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

function playRound(humanChoice,computerChoice){
    
    if((humanChoice == "rock" && computerChoice == "scissors") 
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        set_score_color(PLAYER_WIN,player_score,computer_score)
    }
    else if(humanChoice == computerChoice){
        set_score_color(TIE,player_score,computer_score)
    }
    else{
        computerScore++;
        set_score_color(PLAYER_LOSS,player_score,computer_score)
    }
    player_score.textContent = `Player Score: ${humanScore}`;
    computer_score.textContent = `Computer Score: ${computerScore}`;
    human_move_img.src = get_move_img_src(humanChoice);
    computer_move_img.src = get_move_img_src(computerChoice);
}

function restart(){
    humanScore = 0
    computerScore = 0
    playerChoice = ""
    player_score.textContent = `Player Score: ${humanScore}`;
    computer_score.textContent = `Computer Score: ${computerScore}`;
    set_score_color(RESTART, player_score, computer_score);
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
        case RESTART:
            human.style.color = "#ECEFF1";
            computer.style.color = "#ECEFF1";
    }
}
  
const menu = document.querySelector("body")
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const message = document.querySelector("#message");
const player_score = document.querySelector("#player_score")
const computer_score = document.querySelector("#computer_score")
const end_message = document.querySelector("#end-board")
const buttons = document.querySelectorAll("button");
const human_move_img = document.getElementById("human_move_img")
const computer_move_img = document.getElementById("computer_move_img")
const move_input = document.querySelectorAll("#move")
const PLAYER_WIN = 0
const TIE = 1
const PLAYER_LOSS = 2
const RESTART = 3;
const MAX_ROUNDS = 4;

player_score.textContent = `Player Score: ${humanScore}`;
computer_score.textContent = `Computer Score: ${computerScore}`;


//once button clicked call playRound()
menu.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.id){
        case "rock":
            playerChoice = "rock";
            playRound(playerChoice,getComputerChoice());
            break;
        case "paper":   
            playerChoice = "paper";
            playRound(playerChoice,getComputerChoice());
            break;
        case "scissors":
            playerChoice = "scissors";
            playRound(playerChoice,getComputerChoice());
            break;
        case "restartButton":
            restart();
            break;
    }
})

