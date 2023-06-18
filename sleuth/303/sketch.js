/*

Officer: 6319957
CaseNum: 303-0-14067160-6319957

Case 303 - The Case of the Crooked Attorney
Stage 1 - Torvalds' Office

District Attorney Torvalds is well respected in Console City as an upstanding citizen and
enforcer of the law. Of course he’s as crooked as they come. I’ve had enough of having our
hard work at Sleuth and Co undermined by his bribes and back-payments. Let’s take take this
sucker down. I happen to know that Torvalds keeps his incriminating documents spread amongst
several safes in town. I’ll need you to bend the rules a little by breaking into them and
retrieving the incriminating evidence.

The first safe is in Torvald’s office. Crack it by doing the following:

	When the mouse button is pressed:
	- Make Classified_Vault_Code_0 equal to 11

	When any key is released:
	- Make Classified_Vault_Code_0 equal to 0

	Whilst the mouse is moving:
	- Make Classified_Vault_Code_0 equal to 14

	Whilst the mouse is being dragged:
	- Make Classified_Vault_Code_0 equal to 13

	When the mouse button is released:
	- Make Classified_Vault_Code_1 equal to 21

	When the mouse button is pressed:
	- Make Classified_Vault_Code_1 equal to 48

	Whilst the mouse is moving:
	- Make Classified_Vault_Code_1 equal to 63

	When any key is released:
	- Make Classified_Vault_Code_1 equal to 62



There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !

*/

//declare the variables

var Classified_Vault_Code_0;
var Classified_Vault_Code_1;

function preload() {
  //IMAGES WILL BE LOADED HERE
}

function setup() {
  createCanvas(512, 512);

  //initialise the variables
  Classified_Vault_Code_0 = 0;
  Classified_Vault_Code_1 = 0;
}

///////////////////EVENT HANDLERS///////////////////

//Add your code to these events to open the safe ...

function mouseMoved() {
  Classified_Vault_Code_0 = 14;
  Classified_Vault_Code_1 = 63;
}

function mouseDragged() {
  Classified_Vault_Code_0 = 13;
}

function mousePressed() {
  Classified_Vault_Code_0 = 11;
  Classified_Vault_Code_1 = 48;
}

function mouseReleased() {
  Classified_Vault_Code_1 = 21;
}

function keyPressed() {
  Classified_Vault_Code_0 = 14;
}

function keyReleased() {
  Classified_Vault_Code_0 = 0;
  Classified_Vault_Code_1 = 62;
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw() {
  //Draw the safe door
  background(70);
  noStroke();
  fill(29, 110, 6);
  rect(26, 26, width - 52, width - 52);

  //Draw the combination dial
  push();
  translate(200, height / 2);
  drawDial(200, Classified_Vault_Code_0, 22);
  pop();

  //Draw the lever
  push();
  translate(width - 125, 256);
  drawLever(Classified_Vault_Code_1);
  pop();
}

function drawDial(diameter, num, maxNum) {
  //the combination lock

  var r = diameter * 0.5;
  var p = r * 0.6;

  stroke(0);
  fill(255, 255, 200);
  ellipse(0, 0, diameter, diameter);
  fill(100);
  noStroke();
  ellipse(0, 0, diameter * 0.66, diameter * 0.66);
  fill(150, 0, 0);
  triangle(-p * 0.4, -r - p, p * 0.4, -r - p, 0, -r - p / 5);

  noStroke();

  push();
  var inc = 360 / maxNum;

  rotate(radians(-num * inc));
  for (var i = 0; i < maxNum; i++) {
    push();
    rotate(radians(i * inc));
    stroke(0);
    line(0, -r * 0.66, 0, -(r - 10));
    noStroke();
    fill(0);
    text(i, 0, -(r - 10));
    pop();
  }

  pop();
}

function drawLever(rot) {
  push();
  rotate(radians(-rot));
  stroke(0);
  fill(100);
  rect(-10, 0, 20, 100);
  ellipse(0, 0, 50, 50);
  ellipse(0, 100, 35, 35);
  pop();
}
