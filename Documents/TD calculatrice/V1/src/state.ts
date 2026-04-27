// Gérer l'etat de fonctionnement (ON/OFF)
let isOn = false;

function powerState() {
    console.log('powerState', isOn);
    return isOn;
}

function togglePower() {
    isOn = !isOn;
    return isOn;
}

// Gérer l'etat de la mémoire

// Gérer l'etat de la pile


export { togglePower, powerState };