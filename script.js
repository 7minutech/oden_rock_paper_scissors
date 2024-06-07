function getComputerChoice() {
    // generates number between 1 and 3
    let rnum = Math.floor(Math.random() * 3) + 1
    console.log(rnum)
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
