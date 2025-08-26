const container = document.getElementById("container");
const setGridButton = document.getElementById("setGridButton");
const resetGridButton = document.getElementById("resetGridButton");
const gridPx = 800;
let gridLength = 16;

// container settings
container.style.height = gridPx + 'px';
container.style.width = gridPx +'px';

function createGrid() {
    for (i = 0; i < gridLength ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("squares");
        square.style.height = (gridPx / gridLength) + 'px';
        square.style.width = (gridPx / gridLength) +'px';
        container.appendChild(square)
    }
}

function changeColor() {
    const squaresAll = document.querySelectorAll(".squares")
    squaresAll.forEach(sq => {
        let color = `rgb(${[1,2,3].map(x=>Math.random()*256|0)})`
        sq.addEventListener('mouseover', () => {
            sq.style.backgroundColor = color;
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