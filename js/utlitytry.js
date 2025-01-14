function elementHiddenById(elements) {
    const element = document.getElementById(elements);
    element.classList.add('hidden'); 
}

function elementVisibleById(elements) {
    const element = document.getElementById(elements);
    element.classList.remove('hidden')
}

function generaetRendomAlpabet() {
    const stringAlpabet = 'abcdefghijklmnopqrstuvwxyz';
    const indexAlpabet = stringAlpabet.split('');

    const rendomMath = Math.random()*25;
    const value = Math.round(rendomMath);

    const getAlpabet = indexAlpabet[value];
    return getAlpabet;
}

function setColorBotton(elements) {
    const element = document.getElementById(elements);
    element.classList.add('bg-amber-500')
}