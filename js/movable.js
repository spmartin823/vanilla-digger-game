import {changeableConstants} from './constants.js';

/**
 * This class sets up event listeners with requestAnimationFrame.
 * Classes that extend this class will be able to move based on delta
 */
export class Movable {
  constructor(context) {
    this.context = context;
    window.requestAnimationFrame(this.update);
  }

  clearGameBoard() {
    this.context.clearRect(0, 0, changeableConstants.gameWidth, changeableConstants.gameHeight);
  }

  /**
   * Takes a callback and passes it delta.
   */
  update = (...callbacks) => {
    // check that callback is function, as RAF can sometimes run before one is passed in child class.
    callbacks.forEach(c => typeof c === 'function' && c());

    window.requestAnimationFrame(() => this.update(...callbacks));
  };
}
