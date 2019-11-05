import './global.scss';
import $M from './libs/Massacre';

// Initialize Massacre app
$M.init();

// Write text "Hello" in Massacre App
$M.app.write('Hello');

// Add h1 element to Massacre App
$M.app.html('<h1>Hello</h1>');