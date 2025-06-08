

function getComputerChoice(max){
    choice =  Math.floor(Math.random() * max);
    if(choice === 0){
        return "Rock";
    }
    else if(choice === 1){
        return "Paper";
    }
    else    
     return "Scissors";

}

function getHumanChoice(){
    let choice = prompt("Enter your choice (Rock, Paper, Scissors): ");
    choice = choice.toLowerCase();
    if(choice === "rock"){
        return "Rock";
    }
    else if(choice === "paper"){
        return "Paper";
    }
    else if(choice === "scissors"){
        return "Scissors";
    }
    else {
        alert("Invalid choice! Please try again.");
        return getHumanChoice();
    }
}


function playGame(){

    let humanscore = 0;
    let computerscore = 0;
    const rounds = 5;


    for(i=0 ;i<rounds;i++ ){
            let humanChoice = getHumanChoice();
            let ComputerChoice = getComputerChoice(3);
            if(humanChoice === ComputerChoice){
              console.log(`Round = ${i+1} Draw`);
            }
            else if(
                (humanChoice === "Rock" && ComputerChoice === "Scissors") ||
                (humanChoice === "Paper" && ComputerChoice === "Rock") ||
                (humanChoice === "Scissors" && ComputerChoice === "Paper")
            ){
                console.log(`Round = ${i+1} Human Wins`);
                humanscore++;
            }
            else {
                console.log(`Round = ${i+1} AI Wins`);
                computerscore++;
            }
    }

    if(humanscore > computerscore){
        return `You win! Your score: ${humanscore}, Computer's score: ${computerscore}`;
    }
    else if(humanscore < computerscore){
        return `You lose! Your score: ${humanscore}, Computer's score: ${computerscore}`;
    }
    else {return `It's a tie! Your score: ${humanscore}, Computer's score: ${computerscore}`;}
}    



console.log(playGame());
