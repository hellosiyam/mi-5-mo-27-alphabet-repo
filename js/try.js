function setAlpabet() {
    const isAlpabet = generateRendomAlpabet();
    
    const showDisplay = document.getElementById('display');
    showDisplay.innerText=isAlpabet;

    setColor(isAlpabet);
    
}

function play() {
    removeCladdById('home');
    addClassById('play-ground');
    setAlpabet();
}