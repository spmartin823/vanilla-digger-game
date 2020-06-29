import { Movable } from './movable.js';
import { changeableConstants } from './constants.js';

export class Player extends Movable {
  multiplier = 10;

  // Set size
  height = 50;
  width = 50;

  // Set starting positions
  x = 10;
  y = 10;

  constructor(context, keyState) {
    super(context);
    // attach keyState
    this.keyState = keyState;

    // initialize movement with inherited update
    this.update(this.move);

    // create shape
    this.shape = new Path2D();
    this.shape.rect(this.x, this.y, this.height, this.width);
    context.stroke(this.shape);
  }

  /**
   * TODO: Potentially move this up to Movable?
   */
  render() {
    // Clear existing shape.
    super.clearGameBoard();

    // Render new shape
    this.shape = new Path2D();
    this.shape.rect(this.x, this.y, this.height, this.width);
    this.context.stroke(this.shape);
  }

  /**
   * Takes delta from Movable and uses it to calculate the amount to move.
   * This handles collisions with the gameboard, but does not handle collisions with other objects.
   */
  move = () => {
    if (this.keyState.up) {
      this.y = this.y - this.multiplier < 0
        ? this.y
        : this.y - this.multiplier;
    }

    if (this.keyState.down) {
      this.y = this.y + this.height + this.multiplier > changeableConstants.gameHeight
        ? this.y
        : this.y + this.multiplier;
    }

    if (this.keyState.right) {
      this.x = this.x + this.multiplier + this.width > changeableConstants.gameWidth
        ? this.x
        : this.x + this.multiplier;

    }

    if (this.keyState.left) {
      this.x = this.x - this.multiplier < 0
        ? this.x
        : this.x - this.multiplier;
    }
    this.render();
  };
}
