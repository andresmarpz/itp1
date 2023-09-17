/**
 * Player object
 * @type {Object}
 * @property {number} lives - Number of lives
 * @property {number} posX - X position
 * @property {number} posY - Y position
 * @property {boolean} isJumping - Is jumping
 * @property {boolean} isPlummeting - Is plummeting
 * @property {boolean} isFalling - Is falling
 * @property {boolean} isLeft - Is moving left
 * @property {boolean} isRight - Is moving right
 */
const player = {
  lives: 3,
  posX: 0,
  posY: 0,
  height: 75,
  isJumping: false,
  isPlummeting: false,
  isFalling: false,
  isLeft: false,
  isRight: false,
};
