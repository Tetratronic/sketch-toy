const pixelsContainer = document.querySelector('.pixels-container');

const pixel = document.createElement("div");
pixel.className ="pixel";
pixel.style.cssText = 'width: 28.25px; height:28.25px; auto; border: thin solid grey;';

// Append "pixels" to their div

for(i =0 ; i<16; i++){
    for(j = 0; j<16; j++){
        pixelsContainer.append(pixel.cloneNode(true));
    };
    
};

// select every "pixel" and attach an event listener to change color on hover

const allOfEm = document.querySelectorAll('.pixel');

allOfEm.forEach((square) => {
    square.addEventListener('mouseover', ()=> {
        square.style.backgroundColor = "Black";
    });
});

