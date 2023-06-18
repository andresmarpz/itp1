/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 6319957
CaseNum: 201-3-72284647-6319957

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload() {
  img = loadImage("scene.png");
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  image(img, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill();

  // write the code to draw around the Judge's body below
  beginShape();
  vertex(390, 40);
  vertex(480, 40);
  vertex(500, 120);
  vertex(500, 240);
  vertex(505, 330);
  vertex(630, 326);
  vertex(670, 340);
  vertex(650, 373);
  vertex(620, 357);
  vertex(550, 380);
  vertex(510, 436);
  vertex(410, 437);
  vertex(360, 370);
  vertex(330, 420);
  vertex(290, 400);
  vertex(330, 315);
  vertex(370, 320);
  vertex(350, 125);
  endShape(CLOSE);

  //A helpful mouse pointer
  push();
  fill(0);
  noStroke();
  text(mouseX + "," + mouseY, mouseX, mouseY);
  pop();
}
