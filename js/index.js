import { Player } from './player.js';
import { changeableConstants, keyCodes } from './constants.js';

// Get context for the gameBoard
const gameBoard = document.getElementById('game-board');
const gameBoardContext = gameBoard.getContext ? gameBoard.getContext('2d') : console.error('Could not getContext!');

const globalState = {
  lastTime: Date.now(),
};

const keyState = {
  left: false,
  right: false,
  up: false,
  down: false,
};


window.addEventListener('keydown', e => {
  if (e.defaultPrevented) {
    return; // do nothing if event already handled
  }

  switch (e.code) {
    case keyCodes.keyS:
    case keyCodes.down:
      keyState.down = true;
      break;

    case keyCodes.keyW:
    case keyCodes.up:
      keyState.up = true;
      break;

    case keyCodes.keyA:
    case keyCodes.left:
      keyState.left = true;
      break;

    case keyCodes.keyD:
    case keyCodes.right:
      keyState.right = true;
      break;
  }

  e.preventDefault();
});

window.addEventListener('keyup', e => {
  if (e.defaultPrevented) {
    return; // do nothing if event already handled
  }

  switch (e.code) {
    case keyCodes.keyS:
    case keyCodes.down:
      keyState.down = false;
      break;

    case keyCodes.keyW:
    case keyCodes.up:
      keyState.up = false;
      break;

    case keyCodes.keyA:
    case keyCodes.left:
      keyState.left = false;
      break;

    case keyCodes.keyD:
    case keyCodes.right:
      keyState.right = false;
      break;
  }

  e.preventDefault();
});


new Player(gameBoardContext, keyState);


