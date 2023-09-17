function drawJumpingCharacter(x, y) {
  // skin color
  fill(255, 200, 200);

  // arms
  rect(x - 15, y - 45, 10, 20, 4);
  rect(x + 5, y - 45, 10, 20, 4);

  // body
  fill(255, 0, 0);
  rect(x - 10, y - 50, 20, 40);

  beginShape();
  vertex(x, y - 10);
  vertex(x + 4, y - 4);
  vertex(x + 4, y);
  vertex(x + 8, y);
  vertex(x + 8, y - 4);
  vertex(x + 6, y - 10);
  endShape();

  beginShape();
  vertex(x, y - 10);
  vertex(x - 4, y - 4);
  vertex(x - 4, y);
  vertex(x - 8, y);
  vertex(x - 8, y - 4);
  vertex(x - 6, y - 10);
  endShape();

  // head
  fill(255, 200, 200);
  circle(x, y - 60, 30);

  // eyes
  fill(0);
  circle(x - 5, y - 65, 5);
  circle(x + 5, y - 65, 5);
}

function drawStandingCharacter(x, y) {
  // skin color
  fill(255, 200, 200);

  // arms
  rect(x - 15, y - 45, 10, 20, 4);
  rect(x + 5, y - 45, 10, 20, 4);

  // body
  fill(255, 0, 0);
  rect(x - 10, y - 50, 20, 40);
  rect(x - 10, y - 10, 6, 10);
  rect(x + 4, y - 10, 6, 10);

  // head
  fill(255, 200, 200);
  circle(x, y - 60, 30);

  // eyes
  fill(0);
  circle(x - 5, y - 65, 5);
  circle(x + 5, y - 65, 5);
}

function drawLeftCharacter(x, y) {
  // skin color
  fill(255, 200, 200);

  // body
  fill(255, 0, 0);
  rect(x - 7, y - 50, 14, 40);
  rect(x - 3, y - 10, 6, 10);

  // head
  fill(255, 200, 200);
  circle(x, y - 60, 30);

  // eyes
  fill(0);
  circle(x - 5, y - 65, 5);

  // arm
  fill(255, 200, 200);
  rect(x - 5, y - 45, 10, 20, 4);
}

function drawRightCharacter(x, y) {
  // skin color
  fill(255, 200, 200);

  // body
  fill(255, 0, 0);
  rect(x - 7, y - 50, 14, 40);
  rect(x - 3, y - 10, 6, 10);

  // head
  fill(255, 200, 200);
  circle(x, y - 60, 30);

  // eyes
  fill(0);
  circle(x + 5, y - 65, 5);

  // arm
  fill(255, 200, 200);
  rect(x - 5, y - 45, 10, 20, 4);
}

function drawJumpingLeftCharacter(x, y) {
  // skin color
  fill(255, 200, 200);
  // body
  fill(255, 0, 0);
  rect(x - 7, y - 50, 14, 40);
  beginShape();
  vertex(x, y - 10);
  vertex(x - 2, y - 4);
  vertex(x - 2, y);
  vertex(x - 6, y);
  vertex(x - 6, y - 4);
  vertex(x - 4, y - 10);
  endShape(CLOSE);
  // head
  fill(255, 200, 200);
  circle(x, y - 60, 30);
  // eyes
  fill(0);
  circle(x - 5, y - 65, 5);
  // arm
  fill(255, 200, 200);
  rect(x - 5, y - 45, 10, 20, 4);
}

function drawJumpingRightCharacter(x, y) {
  // skin color
  fill(255, 200, 200);

  // body
  fill(255, 0, 0);
  rect(x - 7, y - 50, 14, 40);
  beginShape();
  vertex(x, y - 10);
  vertex(x + 2, y - 4);
  vertex(x + 2, y);
  vertex(x + 6, y);
  vertex(x + 6, y - 4);
  vertex(x + 4, y - 10);
  endShape(CLOSE);

  // head
  fill(255, 200, 200);
  circle(x, y - 60, 30);

  // eyes
  fill(0);
  circle(x + 5, y - 65, 5);

  // arm
  fill(255, 200, 200);
  rect(x - 5, y - 45, 10, 20, 4);
}
