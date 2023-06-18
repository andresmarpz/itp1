/*

Officer: 6319957
CaseNum: 202-3-30144278-6319957

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Salmon filled text with a Gold outline in Melissa font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
  Ballpointprint = loadFont("Ballpointprint.ttf");
  Melissa = loadFont("Melissa.otf");
  Diggity = loadFont("Diggity.ttf");
  RonsFont = loadFont("RonsFont.ttf");
}

function setup() {
  createCanvas(510, 362);
  textSize(23);
}

function draw() {
  background(255);

  fill(205, 133, 63);
  stroke(178, 34, 34);
  textFont(Diggity);
  // text("Is", 214,96);
  fill(255, 215, 0);
  stroke(184, 134, 11);
  textFont(Ballpointprint);
  // text("x", 55,288);
  push();
  fill(210, 105, 30);
  stroke(255, 0, 255);
  textFont(Melissa);
  // text("continual", 178,146);
  pop();
  stroke(139, 0, 139);
  textFont(RonsFont);
  // text("go", 344,69);
  fill(0, 191, 255);
  stroke(0, 255, 255);
  // text("so,", 202,121);
  fill(250, 128, 114);
  stroke(128, 0, 0);
  // text("i", 73,146);
  fill(0, 0, 128);
  stroke(124, 252, 0);
  textFont(Ballpointprint);
  // text("s", 59,196);
  fill(173, 255, 47);
  stroke(50, 205, 50);
  textFont(RonsFont);
  // text("g", 77,146);
  fill(107, 142, 35);
  stroke(184, 134, 11);
  textFont(Diggity);
  // text("this", 113,96);
  fill(139, 69, 19);
  stroke(255, 0, 255);
  textFont(Ballpointprint);
  // text("av", 67,69);
  fill(173, 255, 47);
  stroke(0, 0, 128);
  textFont(RonsFont);
  // text("we", 267,69);
  fill(0, 250, 154);
  stroke(220, 20, 60);
  textFont(Ballpointprint);
  // text("ometimes.", 66,196);
  fill(152, 251, 152);
  stroke(165, 42, 42);
  textFont(Melissa);
  // text("can", 127,169);
  fill(220, 20, 60);
  stroke(255, 140, 0);
  // text("?", 171,121);
  fill(250, 128, 114);
  stroke(0, 255, 255);
  // text("My", 13, 23);
  fill(135, 206, 250);
  stroke(0, 128, 0);
  // text("Are", 5,69);
  fill(128, 128, 0);
  stroke(139, 69, 19);
  textFont(RonsFont);
  // text("longer", 9,146);
  fill(34, 139, 34);
  stroke(184, 134, 11);
  // text("Are", 429,96);
  fill(144, 238, 144);
  stroke(0, 0, 255);
  textFont(Melissa);
  // text("send", 279,121);
  fill(0, 0, 205);
  stroke(127, 255, 0);
  // text("Bob,", 92,23);
  fill(107, 142, 35);
  stroke(255, 0, 255);
  textFont(Ballpointprint);
  // text("Perhaps", 192,69);
  push();
  fill(255, 0, 255);
  stroke(0, 139, 139);
  // text("oiding", 83,69);
  pop();
  textFont(Melissa);
  // text("and", 46,96);
  fill(240, 128, 128);
  stroke(75, 0, 130);
  textFont(Diggity);
  // text("not", 356,146);
  fill(124, 252, 0);
  stroke(153, 50, 204);
  textFont(RonsFont);
  // text("can", 375,121);
  fill(165, 42, 42);
  stroke(0, 0, 255);
  textFont(Diggity);
  // text("darling", 38,23);
  fill(139, 69, 19);
  stroke(0, 255, 255);
  // text("Daisy", 8,288);
  push();
  fill(50, 205, 50);
  stroke(0, 0, 128);
  textFont(Melissa);
  // text("ed", 40,196);
  pop();
  fill(50, 205, 50);
  stroke(255, 140, 0);
  textFont(Ballpointprint);
  // text("much", 18,169);
  fill(0, 255, 255);
  stroke(0, 0, 128);
  textFont(RonsFont);
  // text("how", 444,146);
  fill(75, 0, 130);
  stroke(32, 178, 170);
  // text("yo", 79,242);
  stroke(165, 42, 42);
  // text("sure", 389,146);
  fill(107, 142, 35);
  stroke(148, 0, 211);
  textFont(Diggity);
  // text("I", 233,121);
  fill(0, 250, 154);
  stroke(128, 0, 128);
  textFont(Melissa);
  // text("these", 137,146);
  fill(0, 139, 139);
  stroke(148, 0, 211);
  textFont(Diggity);
  // text("sh", 52,121);
  fill(72, 209, 204);
  stroke(0, 0, 139);
  // text("Forever", 13,242);
  fill(160, 82, 45);
  stroke(25, 25, 112);
  // text("of", 101,121);
  fill(255, 0, 0);
  stroke(0, 191, 255);
  // text("are", 447,169);
  fill(240, 230, 140);
  stroke(0, 206, 209);
  textFont(Ballpointprint);
  // text("more", 66,169);
  push();
  fill(250, 128, 114);
  stroke(50, 205, 50);
  textFont(Diggity);
  // text("you", 33,69);
  pop();
  fill(218, 112, 214);
  textFont(RonsFont);
  // text("delays.", 237,146);
  fill(135, 206, 235);
  stroke(255, 140, 0);
  // text("for", 425,69);
  fill(138, 43, 226);
  stroke(0, 0, 139);
  textFont(Melissa);
  // text("should", 301,69);
  fill(0, 100, 0);
  stroke(139, 69, 19);
  textFont(Ballpointprint);
  // text("I'm", 304,146);
  fill(123, 104, 238);
  stroke(218, 165, 32);
  textFont(RonsFont);
  // text("The", 202,169);
  push();
  fill(0, 0, 139);
  stroke(128, 0, 128);
  textFont(Ballpointprint);
  // text("You", 407,169);
  pop();
  fill(127, 255, 212);
  textFont(Diggity);
  // text("sort", 72,96);
  fill(144, 238, 144);
  stroke(127, 255, 0);
  textFont(Melissa);
  // text("money", 127,121);
  push();
  fill(238, 130, 238);
  stroke(165, 42, 42);
  textFont(RonsFont);
  // text("nore", 86,146);
  pop();
  fill(199, 21, 133);
  stroke(0, 0, 255);
  // text("so", 482,169);
  fill(250, 128, 114);
  stroke(255, 215, 0);
  text("safe", 377, 96);
  fill(218, 165, 32);
  stroke(148, 0, 211);
  textFont(RonsFont);
  // text("you", 11,121);
  fill(255, 165, 0);
  stroke(107, 142, 35);
  textFont(Diggity);
  // text("ort", 67,121);
  fill(199, 21, 133);
  stroke(124, 252, 0);
  textFont(RonsFont);
  // text("cash.", 313,121);
  fill(0, 128, 128);
  stroke(178, 34, 34);
  textFont(Diggity);
  // text("?", 411,96);
  push();
  fill(0, 191, 255);
  stroke(0, 100, 0);
  textFont(RonsFont);
  // text("away", 371,69);
  pop();
  fill(0, 255, 127);
  stroke(0, 139, 139);
  textFont(Ballpointprint);
  // text("a", 465,69);
  fill(152, 251, 152);
  stroke(107, 142, 35);
  textFont(RonsFont);
  // text("?", 176,69);
  fill(124, 252, 0);
  stroke(128, 0, 0);
  textFont(Ballpointprint);
  // text("secrets,", 236,169);
  fill(255, 255, 0);
  stroke(0, 0, 139);
  // text("out.", 177,96);
  fill(147, 112, 219);
  textFont(Melissa);
  // text("If", 183,121);
  fill(219, 112, 147);
  stroke(255, 0, 0);
  textFont(RonsFont);
  // text("?", 186,169);
  push();
  fill(173, 255, 47);
  textFont(Ballpointprint);
  // text("all", 148,96);
  pop();
  stroke(218, 165, 32);
  textFont(Diggity);
  // text("I", 363,121);
  fill(0, 0, 139);
  stroke(0, 0, 205);
  textFont(RonsFont);
  // text("urs,", 98,242);
  fill(255, 140, 0);
  stroke(199, 21, 133);
  textFont(Diggity);
  // text("no", 414,121);
  fill(0, 250, 154);
  stroke(0, 100, 0);
  textFont(Ballpointprint);
  // text("silence.", 335,169);
  fill(238, 232, 170);
  stroke(0, 191, 255);
  textFont(Diggity);
  // text("can", 245,121);
  push();
  fill(72, 209, 204);
  stroke(25, 25, 112);
  textFont(RonsFont);
  // text("me", 142,69);
  pop();
  fill(148, 0, 211);
  stroke(0, 206, 209);
  textFont(RonsFont);
  // text("our", 233,96);
  fill(255, 69, 0);
  stroke(154, 205, 50);
  textFont(Ballpointprint);
  // text("relationship", 279,96);
  fill(250, 128, 114);
  stroke(255, 215, 0);
  textFont(Melissa);
  text("break", 7, 96);
  text("the", 309, 169);
  text("guard", 7, 196);
  text("take", 153, 169);
  fill(25, 25, 112);
  stroke(128, 0, 128);
  // text("I", 115,169);
}
