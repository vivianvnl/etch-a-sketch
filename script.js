const container = document.getElementById("container");
const gridPx = 800;
let gridLength = 16;
container.setAttribute("style", 
    "display: flex; flex-wrap: wrap; border: 5px solid black; margin: 30px 50px;");
container.style.height = gridPx + 'px';
container.style.width = gridPx +'px';

function addSquares() {
    for (i = 0; i < gridLength ** 2; i++) {
        const squares = document.createElement("div");
        squares.classList.add("squares");
        squares.setAttribute("style", 
        "box-sizing: border-box; background-color: white; border: 1px solid black; margin: 0; padding: 0;")
        squares.style.height = (gridPx / gridLength) + 'px';
        squares.style.width = (gridPx / gridLength) +'px';
        container.appendChild(squares)
    }
}
addSquares()

const sqs = document.querySelectorAll(".squares");
sqs.forEach(sq => {
    sq.addEventListener('mouseover', () => {
    sq.style.backgroundColor = "yellow";
    });
});
