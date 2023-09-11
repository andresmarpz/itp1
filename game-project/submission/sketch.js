const floor_y = 432;

let gameChar_x = 0;
let gameChar_y = 0;

let trees_x = [];
let treePos_y;

let canyon = {};
let collectable = {};

let mountains = [];
let clouds = [];

let isLeft = false;
let isRight = false;
let isFalling = false;
let isPlummeting = false;

let cameraPosX = 0;

// Events

function keyPressed() {
  if (isPlummeting) return;

  if (keyCode == LEFT_ARROW || key == "a") {
    isLeft = true;
  }
  if (keyCode == RIGHT_ARROW || key == "d") {
    isRight = true;
  }
  if ((keyCode == 32 || key == "w") && !isFalling) {
    isFalling = true;

    gameChar_y -= 30;
  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW || key == "a") {
    isLeft = false;
  }
  if (keyCode == RIGHT_ARROW || key == "d") {
    isRight = false;
  }
}

function mousePressed() {
  gameChar_x = mouseX;
  gameChar_y = mouseY;
}

// Game setup

const gameWidth = 1024;
const gameHeight = 576;

function setup() {
  createCanvas(1024, 576);

  trees_x = [800, 1400, 2000];
  treePos_y = 232;

  canyon = {
    x_pos: 0,
    width: 100,
  };

  collectable = {
    x_pos: 100,
    y_pos: 432,
    size: 50,
    isFound: false,
  };

  mountains = [
    {
      x_pos: 500,
      width: 200,
    },
    {
      x_pos: 1000,
      width: 300,
    },
  ];

  clouds = [
    {
      x_pos: 200,
      y_pos: 100,
      width: 200,
    },
    {
      x_pos: 500,
      y_pos: 100,
      width: 150,
    },
  ];

  gameChar_x = width / 2;
  gameChar_y = floor_y;
}

// Game loop

function draw() {
  // keep the camera centered at the player
  cameraPosX = gameChar_x - gameWidth / 2;

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

  trees_x.forEach((treeX) => drawTree(treeX, treePos_y, 100, 200));

  drawCanyon(canyon.x_pos, 432, canyon.width, 144);

  // collectable item logic
  if (
    dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) <=
      collectable.size &&
    !collectable.isFound
  ) {
    collectable.isFound = true;
  }

  if (!collectable.isFound)
    drawDiamond(collectable.x_pos, collectable.y_pos, collectable.size);

  // movement logic
  isPlummeting =
    gameChar_y >= floor_y &&
    gameChar_x >= canyon.x_pos &&
    gameChar_x <= canyon.x_pos + canyon.width;

  if (isFalling) {
    if (gameChar_y < floor_y) {
      gameChar_y += 1;
    } else {
      isFalling = false;
    }
  } else if (isPlummeting) gameChar_y += 5;

  if (isRight) gameChar_x += 2;
  if (isLeft) gameChar_x -= 2;

  stroke(50);

  // draw the character variations
  if (isFalling) {
    if (isLeft) drawJumpingLeftCharacter(gameChar_x, gameChar_y);
    else if (isRight) drawJumpingRightCharacter(gameChar_x, gameChar_y);
    else drawJumpingCharacter(gameChar_x, gameChar_y);
  } else {
    if (isLeft) drawLeftCharacter(gameChar_x, gameChar_y);
    else if (isRight) drawRightCharacter(gameChar_x, gameChar_y);
    else drawStandingCharacter(gameChar_x, gameChar_y);
  }

  pop();
}
