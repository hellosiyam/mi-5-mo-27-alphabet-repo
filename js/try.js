function setAlpabet() {
    const isAlpabet = generaetRendomAlpabet();
    
    const displayText = document.getElementById('display');
    displayText.innerText = isAlpabet;

    setColorBotton(isAlpabet);
    
    
}

function play() {
    elementHiddenById('home');
    elementVisibleById('play-ground')
    setAlpabet()
}