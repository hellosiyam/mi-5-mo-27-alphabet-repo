// function play() {
//     // Home Page Hidden
//     const hidenHomePage = document.getElementById('home');
//     hidenHomePage.classList.add('hidden');

//     // Show Playround:
//     const showPlayground = document.getElementById('play-ground');
//     showPlayground.classList.remove('hidden');
// }

function KeyPressed(events) {
    const playerPressed = events.key;

    const displayAlpabet = document.getElementById('display');
    const getAlpabet = displayAlpabet.innerText;
    const expectAlpabet = getAlpabet.toLocaleLowerCase();

    if (playerPressed === expectAlpabet) {
        removeBackgroundColorById(expectAlpabet);
        callGame();
    }
    else{
        console.log("you pressed wrong key & lost 1 life");
    }
    
}

document.addEventListener('keyup',KeyPressed)
    
function callGame() {
    const game = getRendomAlpabet();
    
    const displayAlpabet = document.getElementById('display');
    displayAlpabet.innerText = game;

    setColorById(game);  
}

function play() {
    addElementById('home')
    remvoElementById('play-ground')
    callGame();
}