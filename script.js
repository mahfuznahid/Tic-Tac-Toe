let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.resetbtn');
let newButton = document.querySelector('.newbtn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let h1 = document.querySelector('h1');

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        }
        else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWin();
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    });
};

const checkWin = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val !== '') {
            showWinner(pos1Val);
            disableBoxes();
            h1.style.marginTop = '0px';
        }
    }
};

const showWinner = (winner) => {
    msgContainer.classList.remove('hide');
    msg.innerText = `Congratulations! Winner is ${winner}`;
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = '';
        enableBoxes();
    });
    msgContainer.classList.add('hide');
    h1.style.marginTop = '2rem';
    turnO = true;
}

resetButton.addEventListener('click', () => {
    resetGame();
});

newButton.addEventListener('click', () => {
    resetGame();
});