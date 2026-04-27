import { toggleScreen, printNumericDigit, printOperator } from './screen.js';
import { togglePower } from './state.js';

// Ecouter les controlles d'allumage

function listenPowerButton() {
    const powerButton = document.getElementById('power-button');
    if (powerButton) {
        powerButton.addEventListener('click', () => {
            togglePower();
            toggleScreen();
        });
    }
}

// ecouter les saisies de pavé numérique

function listenNumericButton(btnId: string) {
    const button = document.getElementById(btnId);
    if (button) {
        button.addEventListener('click', () => {
            printNumericDigit(button.textContent || '');
        });
    }
}


// ecouter les saisis de fonctions arithmétiques simples
function listenOperatorButton(btnId: string, operator: string): void {
    const button = document.getElementById(btnId);
    if (button) {
        button.addEventListener('click', () => {
            printOperator(operator);
        });
    }
}

listenOperatorButton('btn-plus', '+');
listenOperatorButton('btn-minus', '-');
listenOperatorButton('btn-multiply', '*');
listenOperatorButton('btn-divide', '/');
// ecouter les saisies de fonctions scientifiques
// ecouter la demande d'opération

export { listenPowerButton, listenNumericButton, listenOperatorButton }
