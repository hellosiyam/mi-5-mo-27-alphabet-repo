// Page Heddine
function addElementById(elements) {
    const element = document.getElementById(elements);
    element.classList.add('hidden');
}

function remvoElementById(elements) {
    const element = document.getElementById(elements);
    element.classList.remove('hidden')
}

// Generate Rendom Alpabet
function getRendomAlpabet() {
    const stringAlpabet = 'abcdefghijklmnopqrstuvwxyz'
    const spliteAlpabet = stringAlpabet.split('');

    const getRendomNumber = Math.random() * 25;
    const getRoundValue = Math.round(getRendomNumber);

    const value = spliteAlpabet[getRoundValue];
    return value;
}

// Set Background Color
function setColorById(elements) {
   const element = document.getElementById(elements);
   element.classList.add('bg-amber-500');
}

function removeBackgroundColorById(elements) {
    const element = document.getElementById(elements);
    element.classList.remove('bg-amber-500');
}

// Remove Value 
function getValueElementById(elements) {
    const element = document.getElementById(elements);
    const valueString = element.innerText;
    const value = parseInt(valueString);
    return value;
}

function setValueById(elements, value) {
    const element = document.getElementById(elements);
    element.innerText = value;
}