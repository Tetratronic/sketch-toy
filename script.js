const pixelsContainer = document.querySelector(".pixels-container");

const pixel = document.createElement("div");
pixel.className = "pixel";
pixel.style.cssText =
  "width: 26px; height:26px; auto; border: 1px solid grey; user-select: none;";

let isBordered = true;
var drawMode = false;
const colorPicker = document.querySelector(".colorpicker");
let currentCOlor = colorPicker.value;
const clearButton = document.querySelector(".clearbutton");
const eraserBUtton = document.querySelector(".eraserbutton");
colorPicker.addEventListener("input", () => {
  currentCOlor = colorPicker.value;
});

//fill the canvas with "pixels"

function filler(numberOfPixels) {
  for (i = 0; i < numberOfPixels; i++) {
    for (j = 0; j < numberOfPixels; j++) {
      pixelsContainer.append(pixel.cloneNode(true));
    }
  }
  isBordered = true;
}

//attach event listener to every "pixel" to change background on hover
function attacher() {
  const allOfEm = document.querySelectorAll(".pixel");
  const squares = allOfEm;
  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      square.style.backgroundColor = currentCOlor;
    });
    square.addEventListener("mouseover", () => {
      if (drawMode) {
        square.style.backgroundColor = currentCOlor;
      }
    });
  });
}

window.addEventListener("mousedown", () => {
  drawMode = true;
});

window.addEventListener("mouseup", () => {
  drawMode = false;
});

function defaultGrid() {
  filler(16);
  attacher();
}

defaultGrid();

// buttons for different grids
const sixteen = document.querySelector(".sixteen");
const thirtyTwo = document.querySelector(".thirtytwo");
const sixtyFour = document.querySelector(".sixtyfour");
const hundredTwentyEight = document.querySelector(".h-twentyeight");

let currentGrid = 16;

thirtyTwo.addEventListener("click", () => {
  pixelsContainer.textContent = "";
  pixel.style.width = `${448 / 32 - 2}px`;
  pixel.style.height = `${448 / 32 - 2}px`;
  filler(32);
  attacher();
  currentGrid = 32;
  isBordered = true;
});

sixteen.addEventListener("click", () => {
  pixelsContainer.textContent = "";
  pixel.style.width = `${448 / 16 - 2}px`;
  pixel.style.height = `${448 / 16 - 2}px`;
  filler(16);
  attacher();
  currentGrid = 16;
  isBordered = true;
});
sixtyFour.addEventListener("click", () => {
  pixelsContainer.textContent = "";
  pixel.style.width = `${448 / 64 - 2}px`;
  pixel.style.height = `${448 / 64 - 2}px`;
  filler(64);
  attacher();
  currentGrid = 64;
  isBordered = true;
});

// grid toggle button;

function borderToggle() {
  const allOfEm = document.querySelectorAll(".pixel");
  if (isBordered) {
    allOfEm.forEach((square) => {
      square.style.border = "0px";
      square.style.width = `${448 / currentGrid}px`;
      square.style.height = `${448 / currentGrid}px`;
    });
    isBordered = false;
  } else {
    allOfEm.forEach((square) => {
      square.style.border = "1px solid grey";
      square.style.width = `${448 / currentGrid - 2}px`;
      square.style.height = `${448 / currentGrid - 2}px`;
    });
    isBordered = true;
  }
}

clearButton.addEventListener("click", () => {
  pixelsContainer.textContent = "";
  if(!isBordered){
    filler(currentGrid);
    attacher();
    borderToggle();
  }else{
    filler(currentGrid);
    attacher();
  }
});

eraserBUtton.addEventListener("click", () =>{
    currentCOlor = "white";
})

const gridToggle = document.querySelector(".gridtoggle");
gridToggle.addEventListener("click", () => {
  borderToggle();
});
