/*

Officer: 6319957
CaseNum: 303-2-92316231-6319957

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is being dragged:
	- Make Secret_store_key_0 equal to the value of mouseY
	- Use the 'min' function to prevent Secret_store_key_0 from going above 13

	When the mouse button is pressed:
	- Increment Secret_store_key_1 by 3
	- Use the 'min' function to prevent Secret_store_key_1 from going above 16

	When the mouse button is released:
	- Make Secret_store_key_2 equal to the value of mouseX
	- Use the 'constrain' function to prevent Secret_store_key_2 from falling below 4 and going above 14

	When the mouse button is pressed:
	- Decrement Secret_store_key_3 by 3
	- Use the 'constrain' function to prevent Secret_store_key_3 from falling below 6 and going above 21

	Whilst the mouse is moving:
	- Make Secret_store_key_4 equal to the value of mouseY
	- Use the 'min' function to prevent Secret_store_key_4 from going above 80



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Secret_store_key_0;
var Secret_store_key_1;
var Secret_store_key_2;
var Secret_store_key_3;
var Secret_store_key_4;

function preload() {
  //IMAGES WILL BE LOADED HERE
}

function setup() {
  createCanvas(512, 512);

  //initialise the variables
  Secret_store_key_0 = 0;
  Secret_store_key_1 = 0;
  Secret_store_key_2 = 0;
  Secret_store_key_3 = 0;
  Secret_store_key_4 = 0;
}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseDragged() {
  Secret_store_key_0 = mouseY;
  Secret_store_key_0 = min(mouseY, 13);
}

function mousePressed() {
  Secret_store_key_1 += 3;
  Secret_store_key_1 = min(Secret_store_key_1, 16);
  // - Decrement Secret_store_key_3 by 3
  // - Use the 'constrain' function to prevent Secret_store_key_3 from falling below 6 and going above 21
  Secret_store_key_3 -= 3;
  Secret_store_key_3 = constrain(Secret_store_key_3, 6, 21);
}

function mouseReleased() {
  Secret_store_key_2 = mouseX;
  Secret_store_key_2 = constrain(Secret_store_key_2, 4, 14);
}

function mouseMoved() {
  Secret_store_key_4 = mouseY;
  Secret_store_key_4 = min(Secret_store_key_4, 80);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw() {
  //Draw the safe door
  background(70);
  noStroke();
  fill(29, 110, 6);
  rect(26, 26, width - 52, width - 52);

  //Draw the combination dials
  push();
  translate(120, 170);
  drawDial(140, Secret_store_key_0, 19);
  pop();

  push();
  translate(120, 380);
  drawDial(140, Secret_store_key_1, 19);
  pop();

  push();
  translate(280, 170);
  drawDial(140, Secret_store_key_2, 19);
  pop();

  push();
  translate(280, 380);
  drawDial(140, Secret_store_key_3, 26);
  pop();

  //Draw the lever
  push();
  translate(width - 125, 256);
  drawLever(Secret_store_key_4);
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
