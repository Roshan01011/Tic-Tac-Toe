let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;
let turnOf = document.getElementById("turnOf");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    turnOf.innerText = `Turn for O`;
    if (turn) {
      box.style.color = "red";
      box.innerText = "O";
      turn = false;
      turnOf.innerText = `Turn for X`;
    } else {
      box.style.color = "crimson";
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turn = true;
  enableBoxes();
  turnOf.innerText = `Turn for O`;
  msgContainer.classList.add("hide");
};

const showWinner = (winner) => {
  msg.innerText = `WINNER IS ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    console.log(pattern[0], pattern[1], pattern[2]);
    console.log(pos1Val, pos2Val, pos3Val);

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos1Val === pos3Val) {
        console.log("POS1val=", pos1Val);

        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
