import { listenPowerButton, listenNumericButton } from './ui.js';
import { toggleScreen } from './screen.js';

listenPowerButton();
listenNumericButton('1');
listenNumericButton('2');
toggleScreen();
