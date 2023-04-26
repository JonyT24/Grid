let color = "black";
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
let penButton = document.querySelector('#penButton')
let eraserButton = document.querySelector('#eraserButton')
let randomButton = document.querySelector('#randomButton')
let resetButton = document.querySelector('#resetButton')

function fillBoard (size) {
    let board = document.querySelector("#board");
    let tiles = board.querySelectorAll("div");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    tiles.forEach((div) => div.remove());

  
    let sum = size * size 
    for(let i = 0; i < sum; i++) {
    let grid = document.createElement("div");
    grid.addEventListener("mouseover", colorGrid);
    grid.addEventListener("mousedown", colorGrid);
    grid.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", grid);
}
}


fillBoard(16);

function changeResolution(input) {
    if (input >= 2 && input <= 100) {
        fillBoard(input);
    } else console.log("too many");
    
}

function colorGrid(e) {
    if (e.type === "mouseover" && !mouseDown) return
    else this.style.backgroundColor = color;
}


function changeColor(choice) {
    color = choice;
    }


function resetGrid() {
    fillBoard(16)

}

function randomColour() {
    let colours = ["blue", "orange", "red", "purple", "yellow", "green"]
    let randomColour = Math.floor(Math.random() * colours.length);
    color = colours[randomColour];

}

