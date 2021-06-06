const container = document.querySelector(".container");
const button = document.querySelector("#clear");

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

function clearColor(){
    gridItems.forEach(item => {
        item.style.backgroundColor = "";
    });    
}

function changeColor(e) {
    if(e.target.style.backgroundColor===""){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }else{
        let color = e.target.backgroundColor;

    }
}

gridItems.forEach(item => {
    item.addEventListener("mouseover", changeColor)
})

button.addEventListener("click", clearColor);
