/*

Officer: 6319957
CaseNum: 501-2-36578401-6319957

Case 501 - Marrieta Von Neuman - stage 3

For Marrieta a different approach is needed again.
Follow Madame McCarthy’s advice below.

Marrieta was a doting mother but she was also mean player of dice.
To speak to Marrieta beyond the grave you must place a dice in each of the dashed circles.
Use the image() and the itemImg variable command to place each dice in its position.
You will need to use two for loops in a nested pattern to create the grid.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, itemImg;

function preload() {
  backgroundImg = loadImage("background.jpg");
  itemImg = loadImage("Dice.png");
}

function setup() {
  createCanvas(backgroundImg.width, backgroundImg.height);
  image(backgroundImg, 0, 0);

  imageMode(CENTER);
}

function draw() {
  // add your for loop below

  //   make a grid of 4 height, 8 width of images
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
      image(itemImg, j * 67 + 560, i * 77 + 360);
    }
  }
}
