const container = document.getElementById("container");
const setGridButton = document.getElementById("setGridButton");
const resetGridButton = document.getElementById("resetGridButton");
const gridPx = 800;
let gridLength = 16;

// container settings
container.setAttribute("style", 
    "display: flex; flex-wrap: wrap; border: 5px solid black; margin: 30px 50px;");
container.style.height = gridPx + 'px';
container.style.width = gridPx +'px';

function createGrid() {
    for (i = 0; i < gridLength ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("squares");
        square.setAttribute("style", 
        "box-sizing: border-box; background-color: white; border: 1px solid black; margin: 0; padding: 0;")
        square.style.height = (gridPx / gridLength) + 'px';
        square.style.width = (gridPx / gridLength) +'px';
        container.appendChild(square)
    }
}

function changeColor() {
    const squaresAll = document.querySelectorAll(".squares")
    squaresAll.forEach(sq => {
        sq.addEventListener('mouseover', () => {
        sq.style.backgroundColor = "yellow";
        });
    });
}

createGrid(gridLength);
changeColor();

// setting the grid
setGridButton.addEventListener("click", (e) => {
    const removeSquares = document.querySelectorAll(".squares")
    removeSquares.forEach(div => {
        div.remove();
    });

    gridLength = prompt("What grid length would you like?");
    if (isNaN(gridLength)) {
        alert("please only type numbers!!");
        gridLength = 16;
    }
    else if (gridLength > 100) {
        alert("number too big! less than 100 only please :)");
        gridLength = 100;
    }
    else if (gridLength < 1) {
        alert("number too small! how about a number greater than 0 :)");
        gridLength = 1;
    }

    createGrid(gridLength);
    changeColor();
});