const container = document.querySelector(".container");
const clearBtn = document.querySelector("#clear");
const setSizeBtn = document.querySelector("#set-size");
const setBlack = document.querySelector("#black");

var isBlack = false;


function makeGrid(rows, cols) {
    let gridArea = rows * cols;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${cols}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    } 
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => {
        gridPixel.addEventListener("mouseover", changeColor);
    });
}
   
makeGrid(16,16);



function clearColor(){
    let gridList = document.querySelectorAll("div");
    gridList.forEach(item => {
        item.style.backgroundColor = "";
    });    
}

function convert(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hexCode(i) {
        return ("0" + parseInt(i).toString(16)).slice(-2);
    }
    return "#" + hexCode(rgb[1]) + hexCode(rgb[2])
            + hexCode(rgb[3]);
}

function changeColor(e) {
    if(isBlack){
        e.target.style.backgroundColor = "black";
    }else{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
}

function setSize() {
    let size = prompt("Enter the size(Maximum:50)", "16");
    let gridPixels = container.querySelectorAll('.grid-item');
    gridPixels.forEach(gridPixel => gridPixel.remove())
    makeGrid(size,size);
}


setBlack.addEventListener("click", ()=>{
    isBlack=!isBlack;
    setBlack.classList.toggle("bigB");
})

clearBtn.addEventListener("click", clearColor);
setSizeBtn.addEventListener("click", setSize);