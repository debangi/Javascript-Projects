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
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";

function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}
function computerRandomChoice() {
  const computerChoiceNumber = Math.floor(Math.random() * 5) + 1;
  switch (computerChoiceNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    case 4:
      computerChoice = "lizard";
      break;
    case 5:
      computerChoice = "spock";
      break;
    default:
      break;
  }
}
function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = `--- ${computerRock.title}`;
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = `--- ${computerPaper.title}`;
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = `--- ${computerScissors.title}`;
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = `--- ${computerLizard.title}`;
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = `--- ${computerSpock.title}`;
      break;
    default:
      break;
  }
}
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You lost!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}
function select(playerChoice) {
  checkResult(playerChoice);
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
