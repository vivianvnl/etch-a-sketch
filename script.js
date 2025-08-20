const container = document.getElementById("container");
container.setAttribute("style", 
    "width: 800px; height: 800px; display: flex; flex-wrap: wrap; border: 5px solid black; margin: 30px 50px;");

function addSquares() {
    for (i = 0; i < 256; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.setAttribute("style", 
    "width: 50px; height: 50px; box-sizing: border-box; background-color: white; border: 1px solid black; margin: 0; padding: 0;")
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
