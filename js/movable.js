import {changeableConstants} from './constants.js';

/**
 * This class sets up event listeners with requestAnimationFrame.
 * Classes that extend this class will be able to move based on delta
 */
export class Movable {
  constructor(context) {
    this.context = context;
    this._lastTime = Date.now();
    window.requestAnimationFrame(this.update);
  }

  clearGameBoard() {
    this.context.clearRect(0, 0, changeableConstants.gameWidth, changeableConstants.gameHeight);
  }

  /**
   * Takes a callback and passes it delta.
   */
  update = callback => {
    const currentTime = Date.now();
    const delta = (currentTime - this._lastTime);

    // check that callback is function, as RAF can sometimes run before one is passed in child class.
    if (typeof callback === 'function') {
      callback(1);
    }

    this._lastTime = currentTime;
    window.requestAnimationFrame(() => this.update(callback));
  };
}
