/*

Officer: 6319957
CaseNum: 101-3-47411814-6319957

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Dark Red filled rectangle with a Medium Purple outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Turquoise filled
rectangle with a Royal Blue outline around him.

Identify the man reading the newspaper by drawing a Fire Brick filled rectangle
with a Teal outline around him.

Identify the woman with the dog by drawing a Medium Purple filled rectangle with a
Tomato outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload() {
  img = loadImage("img.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  strokeWeight(2);
}

function draw() {
  image(img, 0, 0);

  //Write your code below here ...
  noStroke();

  fill(139, 0, 0, 100);
  stroke(147, 112, 219);
  rect(460, 160, 150, 300);

  fill(64, 224, 208, 100);
  stroke(65, 105, 225);
  rect(785, 275, 140, 190);

  fill(178, 34, 34, 100);
  stroke(0, 128, 128);
  rect(28, 130, 74, 155);

  fill(147, 112, 219, 100);
  stroke(255, 99, 71);
  rect(325, 150, 120, 240);

  //A helpful mouse pointer
  push();
  fill(0);
  noStroke();
  text(mouseX + "," + mouseY, mouseX, mouseY);
  pop();
}
