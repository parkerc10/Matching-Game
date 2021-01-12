let numberOfFaces = 5;
let counter = 0;
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');
window.addEventListener('load', generateFaces);
const timerID = setInterval(titleColor, 1000)

function titleColor() {
    const COLORS_ARRAY = ['blue', 'green', 'purple', 'yellow', 'red', 'aquamarine', 'orange', 'white'];
    const randomColorIdx = Math.floor(Math.random() * COLORS_ARRAY.length);

    titleColorVar = document.querySelector('#title');
    titleColorVar.style.color = COLORS_ARRAY[randomColorIdx];
}

function generateFaces() {
    for(let i = 1; i <= numberOfFaces; i++) {
        const face = document.createElement('img');
        face.src = './smile.png';
        let randomTop = Math.floor(Math.random() * 400) + 1;
        let randomLeft = Math.floor(Math.random() * 500) + 1;
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);
}

function nextLevel() {
    event.stopPropagation();
    numberOfFaces += 5;
    counter += 1;

    while(theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while(theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    generateFaces();

}

function gameOver() {
    alert('Game Over! You have completed ' + counter + ' levels!');
    theLeftSide.lastChild.removeEventListener('click', nextLevel);
    document.body.removeEventListener('click', gameOver);
    clearInterval(timerID);

    const btn = document.createElement('button');
    btn.textContent = 'Reset Game';
    const textArea = document.querySelector('#text');
    textArea.appendChild(btn);
    btn.addEventListener('click', relooadPage);
}

const relooadPage = () => {
    location.reload();
}
