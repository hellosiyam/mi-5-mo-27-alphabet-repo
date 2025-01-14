function addElementById(elements) {
    const element = document.getElementById(elements);
    element.classList.add('hidden');
}

function remvoElementById(elements) {
    const element = document.getElementById(elements);
    element.classList.remove('hidden')
}