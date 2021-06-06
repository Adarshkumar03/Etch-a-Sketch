const container = document.querySelector(".container");

function makeGrid(rows, cols) {
    container.style.setProperty("--grid-row", rows);
    container.style.setProperty("--grid-cols", cols);
    for(let c = 0; c < (rows*cols); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}
makeGrid(16,16);

const gridItems = document.querySelectorAll(".grid-item");

function changeColor(e) {
    e.target.style.backgroundColor = "green";
}

gridItems.forEach(item => {
    item.addEventListener("mouseover", changeColor)
})
