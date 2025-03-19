

let b = document.querySelectorAll(".box");
let reset = document.querySelector(".reset"); 
let m=document.querySelector(".msg");
let turnO = true;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

b.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { 
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true; 
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for (let p of win) {
        let pos1val = b[p[0]].innerText;  
        let pos2val = b[p[1]].innerText;  
        let pos3val = b[p[2]].innerText;  

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            m.innerText="Winner "+pos1val;
            disableAll(); 
            return;
        }
    }

    
 const allFilled = Array.from(b).every((box) => box.innerText !== "");
    if (allFilled) {
        m.innerText="It's a Tie!";
    }
};

const disableAll = () => {
    b.forEach((box) => {
        box.disabled = true;
    });
};

reset.addEventListener("click", () => {
    b.forEach((box) => {
        box.innerText = "";
        box.disabled = false; // Enable boxes
    });
    m.innerText="";
    turnO = true; 
    console.clear(); // Clear the console
});
