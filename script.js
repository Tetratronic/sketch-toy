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
    allOfEm.forEach((square) => {
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

thirtyTwo.addEventListener('click', () =>{
    pixelsContainer.textContent = '';
    pixel.style.width = `${(448/32) - 2}px`;
    pixel.style.height = `${(448/32) - 2}px`;
    filler(32);
    attacher();

});

sixteen.addEventListener('click', () =>{
    pixelsContainer.textContent = '';
    pixel.style.width = `${(448/16) - 2}px`;
    pixel.style.height = `${(448/16) - 2}px`;
    filler(16);
    attacher();

});
sixtyFour.addEventListener('click', () =>{
    pixelsContainer.textContent = '';
    pixel.style.width = `${(448/64) - 2}px`;
    pixel.style.height = `${(448/64) - 2}px`;
    filler(64);
    attacher();

});
