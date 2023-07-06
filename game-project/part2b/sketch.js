/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

let gameChar_x = 0;
let gameChar_y = 0;

let treePos_x;
let treePos_y;

let canyon = {};
let collectable = {};

let mountain = {};
let cloud = {};

function setup() {
  createCanvas(1024, 576);

  treePos_x = 800;
  treePos_y = 232;

  canyon = {
    x_pos: 0,
    width: 100,
  };

  collectable = {
    x_pos: 100,
    y_pos: 100,
    size: 50,
  };

  mountain = {
    x_pos: 500,
    width: 200,
  };

  cloud = {
    x_pos: 200,
    y_pos: 100,
    width: 200,
  };
}

function mousePressed() {
  gameChar_x = mouseX;
  gameChar_y = mouseY;
}

function draw() {
  background(100, 155, 255); //fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, 432, 1024, 144); //draw some green ground

  //1. a cloud in the sky
  //... add your code here

  noStroke();
  fill(255);
  drawCloud(cloud.x_pos, cloud.y_pos, cloud.width, 100);
  text("cloud", 200, 100);

  //2. a mountain in the distance
  //... add your code here

  noStroke();
  fill(255);
  text("mountain", 500, 256);
  drawMountain(mountain.x_pos, 232, mountain.width, 200);

  //3. a tree
  //... add your code here

  noStroke();
  fill(255);
  drawTree(treePos_x, treePos_y, 100, 200);
  text("tree", 750, 346);

  //4. a canyon
  //NB. the canyon should go from ground-level to the bottom of the screen

  //... add your code here

  noStroke();
  fill(255);
  text("canyon", 100, 480);
  drawCanyon(canyon.x_pos, 432, canyon.width, 144);

  //5. a collectable token - eg. a jewel, fruit, coins
  //... add your code here

  noStroke();
  fill(255);
  text("collectable item", 400, 400);
  drawDiamond(
    collectable.x_pos,
    collectable.y_pos,
    collectable.size,
    color(255, 255, 0)
  );

  // Standing character

  // skin color
  fill(255, 200, 200);

  // arms
  rect(gameChar_x - 15, gameChar_y - 45, 10, 20, 4);
  rect(gameChar_x + 5, gameChar_y - 45, 10, 20, 4);

  // body
  fill(255, 0, 0);
  rect(gameChar_x - 10, gameChar_y - 50, 20, 40);
  rect(gameChar_x - 10, gameChar_y - 10, 6, 10);
  rect(gameChar_x + 4, gameChar_y - 10, 6, 10);

  // head
  fill(255, 200, 200);
  circle(gameChar_x, gameChar_y - 60, 30, 30);

  // eyes
  fill(0);
  circle(gameChar_x - 5, gameChar_y - 65, 5, 5);
  circle(gameChar_x + 5, gameChar_y - 65, 5, 5);
}
