humanScore = 0
computerScore = 0
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
function getHumanChoice(){
    //gets user input and returns their move
    let move = prompt("Choice rock, paper, or scissors")
    return move
}
function playRound(humanChoice,computerChoice){
    //compares human and computer moves to determine winner
    humanChoice = humanChoice.toLowerCase()
    if(humanChoice == "rock" && computerChoice == "rock"){
        console.log("You tie! Rock ties Rock")
        humanScore++
        computerScore++
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock")
        computerScore++
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors")
        humanScore++
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock")
        humanScore++
    }
    else if(humanChoice == "paper" && computerChoice == "paper"){
        console.log("You tie! Paper ties Paper")
        humanScore++
        computerScore++
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper")
        computerChoice++
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Paper")
        computerChoice++
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats Paper")
        humanScore++
    }
    else if(humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("You tie! Scissors ties Scissors")
        humanScore++
        computerScore++
    }
}
function playGame(){
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
playGame()