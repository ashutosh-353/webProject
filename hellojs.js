let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameBtn=document.querySelector("#newgame-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;

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
    console.log("Box is clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const showWinner=(winner)=>{
  msg.innerText=`Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}
const checkWinner = () => {
  for(let pattern of winPatterns){
    let pos1Value=boxes[pattern[0]].innerText;
    let pos2Value=boxes[pattern[1]].innerText;
    let pos3Value=boxes[pattern[2]].innerText;

    if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
      if(pos1Value===pos2Value && pos2Value===pos3Value){
        console.log("Winner", pos1Value);
        showWinner(pos1Value);
      }

    }
  
  }
};

const resetGame=()=>{
turn0=true;
enableBoxes();
msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
