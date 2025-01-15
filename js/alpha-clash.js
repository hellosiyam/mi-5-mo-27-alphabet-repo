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
    if (playerPressed === 'Escape') {
        gameOver();
    }
    const displayAlpabet = document.getElementById('display');
    const getAlpabet = displayAlpabet.innerText;
    const expectAlpabet = getAlpabet.toLocaleLowerCase();

    if (playerPressed === expectAlpabet) {
        const incressVlaue = getValueElementById('scoreVlue');
        const value = incressVlaue + 1;
        setValueById('scoreVlue', value)
        removeBackgroundColorById(expectAlpabet);
        callGame();

    }
    else{
        const lifeSpend = getValueElementById('lifeSpend');
        const life = lifeSpend - 1 ;
        setValueById('lifeSpend', life);
        if (life === 0) {
            gameOver()          
        }
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
    addElementById('score-page')
    setValueById('scoreVlue', 0);
    setValueById('lifeSpend', 5)
    remvoElementById('play-ground')
    callGame();
}

function gameOver() {
    addElementById('play-ground');
    remvoElementById('score-page');
    
    const finalScore = getValueElementById('scoreVlue');
    setValueById('last-score', finalScore);
    const removeColor = removeAlpabetColor('display');
    removeBackgroundColorById(removeColor);
}