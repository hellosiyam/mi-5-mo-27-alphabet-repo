function addElementById(elements) {
    const element = document.getElementById(elements);
    element.classList.add('hidden');
}

function remvoElementById(elements) {
    const element = document.getElementById(elements);
    element.classList.remove('hidden')
}

function getRendomAlpabet() {
    const stringAlpabet = 'abcdefghijklmnopqrstuvwxyz'
    const spliteAlpabet = stringAlpabet.split('');

    const getRendomNumber = Math.random() * 25;
    const getRoundValue = Math.round(getRendomNumber);

    const value = spliteAlpabet[getRoundValue];
    return value;
}

function setColorById(elements) {
   const element = document.getElementById(elements);
   element.classList.add('bg-amber-500');
}