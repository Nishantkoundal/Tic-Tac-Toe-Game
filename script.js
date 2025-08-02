let boxes = document.querySelectorAll(".boxes");
let new_btn = document.querySelector("#new-btn");
let reset_btn = document.querySelector("#reset-btn");
let winner = document.querySelector(".winner1");
let msg = document.querySelector(".msg-container");

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

let count = 0;
let player1 = true;

const disable = () => {
  boxes.forEach((box) => (box.disabled = true));
};

const enable = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
  });
  msg.classList.add("hide");
  count = 0;
  player1 = true;
};

const winn = (win) => {
  winner.innerHTML = `Winner is ${win}`;
  msg.classList.remove("hide");
  disable();
};

const gamedraw = () => {
  winner.innerHTML = `Game is draw`;
  msg.classList.remove("hide");
  disable();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        winn(pos1);
        return true;
      }
    }
  }
  return false;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player1) {
      box.innerHTML = "X";
    } else {
      box.innerHTML = "O";
    }

    box.disabled = true;
    player1 = !player1;
    count++;

    const isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gamedraw();
    }
  });
});

new_btn.addEventListener("click", enable);
reset_btn.addEventListener("click", enable);
