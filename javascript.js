const container = document.querySelector(".container");
const CONTAINER_WIDTH = +getComputedStyle(container).width.slice(0, -2);

function createCanvas(numSquares){
    const squareSize = CONTAINER_WIDTH/numSquares;
    for(let i = 0; i < numSquares; i++){
        const row = document.createElement("div");
        row.classList.add("row", `${i}`);
        container.appendChild(row);
        for(let j = 0; j < numSquares; j++){
            const collumn = document.createElement("div");
            collumn.classList.add("collumn", `${j}`);
            collumn.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`;
            row.appendChild(collumn);
            collumn.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "black";
            });
        }
    }
}

function promptUser(){
    const canvas = document.querySelectorAll(".collumn");
    canvas.forEach((sqr) => sqr.style.backgroundColor = "white");
    let numSquares = prompt("Insert the number of squares per side for the new grid", "16");
    if(numSquares > 100){
        numSquares = 100;
    }else if(numSquares === null){
        numSquares = 16;
    }
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createCanvas(+numSquares);
}

createCanvas(16);