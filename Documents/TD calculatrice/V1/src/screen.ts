import { powerState } from './state.js';

// allumage et extinction de l'écran
const screen = document.getElementById('screen') as HTMLElement;

function toggleScreen() {
    if (!screen) {
        console.warn("Screen not found");
        return;
    }
    if (powerState()) {
        console.log('Screen ON');
        screen.classList.remove('off');
        screen.classList.add('on');
        initScreen();
    } else {
        console.log('Screen OFF');
        screen.classList.remove('on');
        screen.classList.add('off');
        clearScreen()
    }
}

function checkScreen() {
    if (!screen) {
        console.warn("Screen not found");
        return false;
    }
    return true;
}

// affichage des données

function initScreen() {
    if (checkScreen()) {
        screen.textContent = '0';
    }
}

function clearScreen(){
    if (checkScreen()) {
        screen.textContent = '';
    }
}

function printNumericDigit(digit: string){
    if (checkScreen() && powerState()) {
        if(screen.textContent === '0') {
            screen.textContent = digit;
        } else {
            screen.textContent += digit;
        }
    }
}

function printOperator(operator: string){
    if (checkScreen() && powerState()) {
        screen.textContent += operator;
    }
}

// lecture de l'écran

export { toggleScreen, initScreen, printNumericDigit, printOperator };