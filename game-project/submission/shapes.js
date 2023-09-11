// make a cloud that has a ellipse on each side and a bigger one on the middle
function drawCloud(x, y, width, height) {
  ellipse(x + width * 0.2, y + height * 0.5, width * 0.4, height * 0.8);
  ellipse(x + width * 0.8, y + height * 0.5, width * 0.4, height * 0.8);
  ellipse(x + width * 0.5, y + height * 0.5, width * 0.5, height);
}

function drawTree(x, y, width, height) {
  // brown
  fill(139, 69, 19);
  rect(x + width * 0.35, y + height * 0.7, width * 0.3, height * 0.3);

  // green leaves in 3 layers
  fill(0, 101, 0);
  for (let i = 0; i < 3; i++)
    triangle(
      x + width * 0.5,
      y,
      x,
      y + height * 0.7 + i * height * 0.1,
      x + width,
      y + height * 0.7 + i * height * 0.1
    );
}

function drawMountain(x, y, width, height) {
  fill(140, 140, 140);
  triangle(x + width * 0.5, y, x, y + height, x + width * 0.6, y + height);
  fill(130, 130, 130);
  triangle(
    x + width * 0.5,
    y,
    x + width * 0.6,
    y + height,
    x + width,
    y + height
  );
  fill(255, 255, 255);
  beginShape();
  vertex(x + width * 0.5 - width * 0.15, y + height * 0.3);
  vertex(x + width * 0.5, y);
  vertex(x + width * 0.5 + width * 0.1, y + height * 0.2);
  vertex(x + width * 0.5, y + height * 0.15);
  endShape(CLOSE);
}

function drawCanyon(x, y, width, height) {
  fill(150, 75, 0);
  rect(x, y, width, height);
  fill(140, 60, 0);
  noStroke();
  beginShape();
  vertex(x, y);
  vertex(x + width * 0.3, y + height * 0.3);
  vertex(x + width * 0.3, y + height);
  vertex(x + width * 0.7, y + height);
  vertex(x + width * 0.7, y + height * 0.3);
  vertex(x + width, y);
  vertex(x + width, y + height);
  vertex(x, y + height);
  endShape();
}

function drawDiamond(x, y, size) {
  fill(50, 200, 250);
  stroke(50);
  beginShape();

  x = x - size / 2;
  y = y - size / 2;
  vertex(x, y + size * 0.3);
  vertex(x + size * 0.3, y);
  vertex(x + size * 0.7, y);
  vertex(x + size, y + size * 0.3);
  vertex(x + size * 0.5, y + size);
  vertex(x, y + size * 0.3);
  endShape();

  beginShape();
  vertex(x, y + size * 0.3);
  vertex(x + size * 0.3, y + size * 0.4);
  vertex(x + size * 0.7, y + size * 0.4);
  vertex(x + size, y + size * 0.3);
  endShape();
}
