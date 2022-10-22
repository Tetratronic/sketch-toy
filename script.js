const pixelsContainer = document.querySelector('.pixels-container');

const pixel = document.createElement("div");
pixel.className ="pixel";
pixel.style.cssText = 'width: 26px; height:26px; auto; border: 1px solid grey;';



//fill the canvas with "pixels"

function filler(numberOfPixels){
    
    for(i =0 ; i<numberOfPixels; i++){
        for(j = 0; j<numberOfPixels; j++){
            pixelsContainer.append(pixel.cloneNode(true));
        };
        
    };
}


//attach event listener to every "pixel" to change background on hover
function attacher(){
    const allOfEm = document.querySelectorAll('.pixel');
    const squares = allOfEm;
    squares.forEach((square) => {
        square.addEventListener('mouseover', ()=> {
            square.style.backgroundColor = "Black";
        });
    });
}

function defaultGrid(){
    filler(16);
    attacher();
}

defaultGrid();

const sixteen = document.querySelector('.sixteen');
const thirtyTwo = document.querySelector('.thirtytwo');
const sixtyFour = document.querySelector('.sixtyfour');
const hundredTwentyEight = document.querySelector('.h-twentyeight');

let currentGrid = 16;

thirtyTwo.addEventListener('click', () =>{
    pixelsContainer.textContent = '';
    pixel.style.width = `${(448/32) - 2}px`;
    pixel.style.height = `${(448/32) - 2}px`;
    filler(32);
    attacher();
    currentGrid = 32;

});

sixteen.addEventListener('click', () =>{
    pixelsContainer.textContent = '';
    pixel.style.width = `${(448/16) - 2}px`;
    pixel.style.height = `${(448/16) - 2}px`;
    filler(16);
    attacher();
    currentGrid = 16;

});
sixtyFour.addEventListener('click', () =>{
    pixelsContainer.textContent = '';
    pixel.style.width = `${(448/64) - 2}px`;
    pixel.style.height = `${(448/64) - 2}px`;
    filler(64);
    attacher();
    currentGrid = 64;

});

// grid toggle button;
let isBordered = true
function borderToggle(){
    const allOfEm = document.querySelectorAll('.pixel');
    if (isBordered){
        allOfEm.forEach((square) => {
            square.style.border = '0px';
            square.style.width = `${(448/currentGrid)}px`;
            square.style.height = `${(448/currentGrid)}px`;
        });
        isBordered = false;
    }else{
        allOfEm.forEach((square) => {
            square.style.border = '1px solid black';
            square.style.width = `${(448/currentGrid) - 2}px`;
            square.style.height = `${(448/currentGrid) - 2}px`;
        });
        isBordered =true;
    }
}


const gridToggle = document.querySelector('.gridtoggle');
gridToggle.addEventListener('click', ()=>{
    borderToggle();
}) 