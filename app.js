let boxes = document.querySelectorAll(".box");
let turnX = true;
let infos = document.querySelector(".info");
let message = document.querySelector(".msg");

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
infos.style.display = "none";

let newGameBtn = document.createElement("button");
newGameBtn.innerText = "New Game";
newGameBtn.classList.add("newGameBtn");

boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        if(turnX){
            box.style.boxShadow = "0px 0px 15px blue";
        } else {
            box.style.boxShadow = "0px 0px 15px red";
        }   
    });
    box.addEventListener("mouseleave", () => {
        box.style.boxShadow = "none";
    });
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else
        {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWin();
    });
});

const checkWin = () => {    
winPatterns.forEach((pattern) => {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if(val1 === val2 && val2 === val3 && val1 !== "")
    {
        message.innerText = `${val1} is the winner!`;
        disablebox();
        infos.style.display = "flex";
        infos.append(newGameBtn);
    }
});
}

disablebox = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });     
}

enablebox = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    }); 
}

newGameBtn.addEventListener("click", () => {
    turnX = true;
    message.innerText = "";
    enablebox();
    newGameBtn.remove();
    infos.style.display = "none";
});


