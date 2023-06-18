/*

Officer: 6319957
CaseNum: 403-3-95480374-6319957

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Romero Avenue.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 75 meters from Turing's Column then alert local police by drawing a MediumTurquoise circle around it with a radius of 75 pixels.
- if Shiffman is in The Plaza Hotel then the neighbourhood watch must be notified by drawing a Orange rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a DarkCyan rectangle covering the area between Ada Avenue, Turing Place, Romero Avenue and Meyers Way.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload() {
  img = loadImage("map.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  // draw the image
  image(img, 0, 0);

  //Write your code below here ...
  // if(2100, 878)
  if (dist(mouseX, mouseY, 2100, 878) < 75) {
    fill(72, 209, 204);
    ellipse(2100, 878, 75 * 2, 75 * 2);
  } else if (mouseX > 1824 && mouseX < 2158 && mouseY > 318 && mouseY < 461) {
    fill(255, 165, 0);
    rect(1824, 318, 2158 - 1824, 461 - 318);
  } else {
    fill(0, 139, 139);
    rect(665, 277, 1012 - 665, 1065 - 277);
  }

  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);

  // a helpful mouse coordinate pointer
  fill(255, 0, 0);
  noStroke();
  text(`${mouseX},${mouseY}`, mouseX, mouseY);
}
