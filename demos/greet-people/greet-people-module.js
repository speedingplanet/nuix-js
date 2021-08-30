import { anotherHandler, clickHandler } from './click-handler-module.js';
// import * as handlers from './click-handler-module.js';

const button = document.getElementById( 'greet-button' );
/*
button.addEventListener('click', () => {
  console.log('arrow: you clicked on the button!');
});
*/
button.addEventListener( 'click', clickHandler );
const anotherButton = document.getElementById( 'another-button' );
anotherButton.addEventListener( 'click', anotherHandler );
