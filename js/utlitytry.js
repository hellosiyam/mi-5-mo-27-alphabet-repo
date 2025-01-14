function removeCladdById(events) {
    const event = document.getElementById(events);
    event.classList.add('hidden');
}

function addClassById(events) {
    const event = document.getElementById(events);
    event.classList.remove('hidden');
}

function generateRendomAlpabet() {
    const stringAlpabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = stringAlpabet.split('');

    const rendomMath = Math.random()*25;
    const rendomValue = Math.round(rendomMath);

    const alpabet = index[rendomValue];
    return alpabet;
}

function setColor(events) {
    const event = document.getElementById(events);
    event.classList.add('bg-orange-500');
    const isColor = event;
    return isColor;
}