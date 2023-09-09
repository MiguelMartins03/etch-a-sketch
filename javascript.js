const container = document.querySelector(".container");
for(let i = 0; i < 16; i++){
    const row = document.createElement("div");
    row.classList.add("row", `${i}`);
    container.appendChild(row);
    for(let j = 0; j < 16; j++){
        const collumn = document.createElement("div");
        collumn.classList.add("collumn", `${j}`);
        row.appendChild(collumn);
        collumn.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor= "black";
        });
    }
}