const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}
function select(playerChoice) {
  resetSelected();
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = `--- ${playerRock.title}`;
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = `--- ${playerPaper.title}`;
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = `--- ${playerScissors.title}`;
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = `--- ${playerLizard.title}`;
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = `--- ${playerSpock.title}`;
      break;
    default:
      break;
  }
}
