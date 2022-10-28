const pixelsContainer = document.querySelector(".pixels-container");

const pixel = document.createElement("div");
pixel.className = "pixel";
pixel.style.cssText =
  `width :${512/16 - 2}px; height:${512/16 - 2}px; border: 1px solid grey; user-select: none; background-color:white`;

let isBordered = true;
var drawMode = false;
const colorPicker = document.querySelector(".colorpicker");
let currentCOlor = colorPicker.value;
const clearButton = document.querySelector(".clearbutton");
const eraserBUtton = document.querySelector(".eraserbutton");
const penButton = document.querySelector(".pen");
const rainbowButton = document.querySelector('.rainbow');
colorPicker.addEventListener("input", () => {
  currentCOlor = colorPicker.value;
});

rainbowMode = false;

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
      if (rainbowMode){
        square.style.backgroundColor = randomColorGenerator()
      }else{
        square.style.backgroundColor = currentCOlor;
      }

    });
    square.addEventListener("mouseover", () => {
      if (drawMode) {
        square.style.backgroundColor = currentCOlor;
        if (rainbowMode){
          square.style.backgroundColor = randomColorGenerator()
        }

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


function randomColorGenerator(){
  values = "0123456789ABCDEF"
  final = "#";
  for(i = 0; i < 6; i++){
    addedHex = values[Math.floor(Math.random() * 16)]
    final = final + addedHex;
  }
  return final
}

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
  pixel.style.width = `${512 / 32 - 2}px`;
  pixel.style.height = `${512 / 32 - 2}px`;
  filler(32);
  attacher();
  currentGrid = 32;
  isBordered = true;
});

sixteen.addEventListener("click", () => {
  pixelsContainer.textContent = "";
  pixel.style.width = `${512 / 16 - 2}px`;
  pixel.style.height = `${512 / 16 - 2}px`;
  filler(16);
  attacher();
  currentGrid = 16;
  isBordered = true;
});
sixtyFour.addEventListener("click", () => {
  pixelsContainer.textContent = "";
  pixel.style.width = `${512 / 64 - 2}px`;
  pixel.style.height = `${512 / 64 - 2}px`;
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
      square.style.width = `${512 / currentGrid}px`;
      square.style.height = `${512 / currentGrid}px`;
    });
    isBordered = false;
  } else {
    allOfEm.forEach((square) => {
      square.style.border = "1px solid grey";
      square.style.width = `${512 / currentGrid - 2}px`;
      square.style.height = `${512 / currentGrid - 2}px`;
    });
    isBordered = true;
  }
}


penButton.addEventListener("click", ()=>{
  rainbowMode = false;
  colorPicker.value="#000000"
  currentCOlor = colorPicker.value
})

rainbowButton.addEventListener("click", ()=>{
  rainbowMode = true;
})

clearButton.addEventListener("click", () => {
  rainbowMode = false;
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
    rainbowMode = false;
    colorPicker.value = "#ffffff";
    currentCOlor = colorPicker.value;
})

const gridToggle = document.querySelector(".gridtoggle");
gridToggle.addEventListener("click", () => {
  borderToggle();
});
