const floor_y = 432;

let flagpole = {};
let cameraPosX = 0;
let game_score = 0;

// Events
function keyPressed() {
  if (gameState === GAME_STATE.MENU) {
    handleMenuKeys();
    return;
  }

  if (player.isPlummeting) return;

  if (keyCode == LEFT_ARROW || key == "a") {
    player.isLeft = true;
  }
  if (keyCode == RIGHT_ARROW || key == "d") {
    player.isRight = true;
  }
  if ((keyCode == 32 || key == "w") && !player.isFalling) {
    player.isFalling = true;
    player.posY -= 90;
  }
}

function keyReleased() {
  if (gameState === GAME_STATE.MENU) {
    handleMenuKeys();
    return;
  }

  if (keyCode == LEFT_ARROW || key == "a") {
    player.isLeft = false;
  }
  if (keyCode == RIGHT_ARROW || key == "d") {
    player.isRight = false;
  }
}

// Game setup
const gameWidth = 1024;
const gameHeight = 576;

function setup() {
  createCanvas(1024, 576);

  game_score = 0;

  setupWorld();

  flagpole = {
    x_pos: 1000,
    y_pos: floor_y,
    isReached: false,
  };

  player.posX = gameWidth / 2;
  player.posY = floor_y;
}

// Game loop

function draw() {
  // keep the camera centered at the player
  cameraPosX = player.posX - gameWidth / 2;

  background(100, 155, 255); //fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, 432, 1024, 144); //draw some green ground

  // move the scenery according to the camera position
  push();
  translate(-cameraPosX, 0);

  // draw clouds, mountains, trees, canyons, collectable items, etc.
  fill(255);
  clouds.forEach((cloud) =>
    drawCloud(cloud.x_pos, cloud.y_pos, cloud.width, 100)
  );

  mountains.forEach((mountain) =>
    drawMountain(mountain.x_pos, 232, mountain.width, 200)
  );

  trees.forEach(drawTree);
  canyons.forEach(drawCanyon);

  // collectable item logic
  collectables
    .filter((collectable) => !collectable.isFound)
    .forEach((collectable) => {
      drawCollectable(collectable);
      checkCollectable(collectable);
    });

  // movement logic
  player.isPlummeting = canyons.some(checkCanyon);
  if (player.isPlummeting) {
    if (player.posY > floor_y + player.height + 100) {
      player.lives -= 1;
      if (player.lives > 0) {
        player.posX = 0;
        player.posY = floor_y;
      }
    } else player.posY += 5;
  } else if (player.isFalling) {
    if (player.posY < floor_y) {
      player.posY += 2;
    } else {
      player.isFalling = false;
    }
  }

  if (player.isRight && !player.isPlummeting) player.posX += 3;
  if (player.isLeft && !player.isPlummeting) player.posX -= 3;

  stroke(50);

  // draw the character variations
  if (player.isFalling) {
    if (player.isLeft) drawJumpingLeftCharacter(player.posX, player.posY);
    else if (player.isRight)
      drawJumpingRightCharacter(player.posX, player.posY);
    else drawJumpingCharacter(player.posX, player.posY);
  } else {
    if (player.isLeft) drawLeftCharacter(player.posX, player.posY);
    else if (player.isRight) drawRightCharacter(player.posX, player.posY);
    else drawStandingCharacter(player.posX, player.posY);
  }

  drawFlagpole(flagpole);
  checkFlagpole(flagpole);

  pop();

  renderInterface();
}
