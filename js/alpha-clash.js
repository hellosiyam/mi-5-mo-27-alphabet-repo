// function play() {
//     // Home Page Hidden
//     const hidenHomePage = document.getElementById('home');
//     hidenHomePage.classList.add('hidden');

//     // Show Playround:
//     const showPlayground = document.getElementById('play-ground');
//     showPlayground.classList.remove('hidden');
// }


    
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