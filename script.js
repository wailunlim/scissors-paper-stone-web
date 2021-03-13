let computerResult, userResult;

function checkResult() {
  if (userResult === computerResult) {
    setTimeout(() => window.alert("Draw!"), 0);
  } else if (userResult === "scissors" && computerResult === "paper") {
    setTimeout(() => window.alert("You won!"), 0);
  } else if (userResult === "stone" && computerResult === "paper") {
    setTimeout(() => window.alert("You lost!"), 0);
  } else if (userResult === "scissors" && computerResult === "stone") {
    setTimeout(() => window.alert("You lost!"), 0);
  } else if (userResult === "paper" && computerResult === "stone") {
    setTimeout(() => window.alert("You won!"), 0);
  } else if (userResult === "paper" && computerResult === "scissors") {
    setTimeout(() => window.alert("You lost!"), 0);
  } else if (userResult === "stone" && computerResult === "scissors") {
    setTimeout(() => window.alert("You won!"), 0);
  }
}

function computerRandom() {
  let n = Math.floor(Math.random() * 3);

  if (n === 0) {
    computerResult = "scissors";
    document.getElementById('computer').textContent = "scissors";
  } else if (n === 1) {
    computerResult = "paper";
    document.getElementById('computer').textContent = "paper";
  } else {
    computerResult = "stone";
    document.getElementById('computer').textContent = "stone";
  }
}

function play(chosenItem) {
  userResult = chosenItem;
  document.getElementById('user').textContent = chosenItem;

  computerRandom();
  checkResult();
}

