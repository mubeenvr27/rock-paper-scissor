// Initialize scores
let humanScore = 0;
let computerScore = 0;

// DOM elements
const buttons = document.querySelectorAll(".buttons button");
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

// Get computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Play one round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanChoice === computerChoice) {
    result = `Draw! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  // Update score display
  scoreDiv.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

  // Display result
  resultsDiv.textContent = result;

  // Check for winner
  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "Player" : "Computer";
    resultsDiv.textContent = `${winner} wins the game! Final score: Player ${humanScore} - Computer ${computerScore}`;
    // Disable buttons
    buttons.forEach(button => button.disabled = true);
  }
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id.charAt(0).toUpperCase() + button.id.slice(1)); // Capitalize id (rock -> Rock)
  });
});