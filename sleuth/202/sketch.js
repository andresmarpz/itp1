/*

Officer: 6319957
CaseNum: 202-0-96521499-6319957

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Coral text (see https://www.w3.org/TR/css3-iccprof#numerical). 
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
  letterFont = loadFont("Ballpointprint.ttf");
}

function setup() {
  createCanvas(629, 523);
  textFont(letterFont);
  textSize(28);
}

function draw() {
  background(255);

  fill(25, 25, 112);
  // text("alone", 533, 84);
  fill(255, 0, 255);
  // text("You", 281, 295);
  fill(173, 216, 230);
  // text("voice", 365, 114);
  fill(0, 191, 255);
  // text("of", 316, 205);
  fill(184, 134, 11);
  // text("that", 151, 176);
  fill(0, 255, 127);
  // text("my", 376, 295);
  fill(124, 252, 0);
  // text("hose", 252, 267);
  // text("Love", 15, 383);
  fill(148, 0, 211);
  // text("can", 161, 205);
  fill(0, 139, 139);
  // text("saw", 428, 234);
  fill(255, 255, 0);
  // text("were", 17, 295);
  fill(144, 238, 144);
  // text("the", 54, 114);
  fill(0, 128, 0);
  // text("nfession", 195, 84);
  fill(0, 255, 127);
  // text("your", 353, 205);
  fill(233, 150, 122);
  // text("I", 127, 205);
  // text("From", 93, 234);
  fill(123, 104, 238);
  // text("only", 205, 205);
  // text("kisses,", 125, 383);
  fill(32, 178, 170);
  // text("the", 456, 144);
  fill(218, 165, 32);
  // text("your", 314, 114);
  fill(238, 232, 170);
  // text("am", 236, 176);
  // text("few", 311, 267);
  fill(139, 69, 19);
  // text("sunny", 417, 295);
  fill(255, 165, 0);
  // text("eye", 22, 234);
  // text("Bob", 15, 439);
  fill(240, 230, 140);
  // text("blessed", 22, 144);
  fill(186, 85, 211);
  // text("make", 103, 84);
  // text("are", 329, 295);
  fill(240, 230, 140);
  // text("lovely", 57, 28);
  // text("am", 494, 84);
  // text("I", 394, 234);
  fill(153, 50, 204);
  // text("x", 69, 439);
  fill(0, 250, 154);
  // text("like", 429, 114);
  fill(72, 209, 204);
  // text("Daisy,", 125, 28);
  // text("my", 82, 295);
  // text("you", 508, 267);
  fill(128, 0, 0);
  // text("s.", 64, 234);
  fill(128, 128, 0);
  // text("green", 488, 205);
  fill(30, 144, 255);
  // text("of", 180, 144);
  fill(205, 133, 63);
  // text("the", 152, 234);
  fill(255, 0, 255);
  // text("true", 171, 295);
  fill(0, 128, 128);
  // text("May", 15, 84);
  fill(100, 149, 237);
  // text("I", 202, 176);
  fill(240, 230, 140);
  // text("think", 254, 205);
  fill(205, 133, 63);
  // text("be", 412, 144);
  fill(128, 0, 128);
  // text("the", 217, 144);
  fill(255, 127, 80);
  text("chosen", 326, 176);
  text("April", 17, 327);
  text("second", 368, 267);
  fill(128, 0, 0);
  // text("co", 178, 84);
  fill(0, 128, 0);
  // text("darling,", 404, 205);
  // text("music", 117, 144);
  fill(106, 90, 205);
  // text("person", 17, 176);
  fill(255, 140, 0);
  // text("and", 76, 383);
  fill(50, 205, 50);
  // text("harp.", 266, 144);
  // text("I", 89, 267);
  // text("t", 245, 267);
  fill(240, 128, 128);
  // text("Ever", 404, 176);
  fill(147, 112, 219);
  // text("I", 69, 84);
  fill(0, 0, 255);
  // text("luckiest", 505, 144);
  fill(255, 69, 0);
  // text("since", 467, 176);
  // text("ment", 282, 234);
  fill(255, 99, 71);
  // text("first", 201, 234);
  // text("hear", 255, 114);
  fill(0, 0, 128);
  // text("Oh", 15, 28);
  fill(0, 100, 0);
  // text("?", 292, 84);
  fill(135, 206, 250);
  // text("quiet", 103, 114);
  // text("face,", 22, 267);
  fill(0, 0, 128);
  // text("from", 187, 267);
  fill(220, 20, 60);
  // text("must", 358, 144);
  fill(0, 128, 128);
  // text("s", 433, 267);
  // text("the", 481, 114);
  fill(165, 42, 42);
  // text("I", 460, 84);
  fill(25, 25, 112);
  // text("It", 323, 84);
  fill(135, 206, 235);
  // text("I", 324, 144);
  fill(238, 130, 238);
  // text("one", 123, 295);
  // text("is", 364, 84);
  // text("love.", 224, 295);
  fill(222, 184, 135);
  // text("your", 475, 234);
  fill(160, 82, 45);
  // text("I", 221, 114);
  fill(255, 127, 80);
  text("day", 482, 295);
  fill(240, 128, 128);
  // text("that", 457, 267);
  fill(255, 69, 0);
  // text("mo", 260, 234);
  // text("knew", 123, 267);
  fill(0, 100, 0);
  // text("our", 532, 176);
  fill(255, 127, 80);
  text("date", 66, 205);
  text("a", 153, 84);
  fill(255, 69, 0);
  // text("lovely", 526, 234);
  fill(0, 128, 0);
  // text("your", 275, 176);
  fill(255, 127, 80);
  text("in", 533, 295);
  fill(255, 165, 0);
  // text("that", 343, 234);
  fill(0, 128, 0);
  // text("that", 170, 114);
  fill(127, 255, 0);
  // text("last", 21, 205);
  fill(160, 82, 45);
  // text("alive", 90, 176);
  fill(0, 0, 139);
  // text("when", 395, 84);
  fill(0, 100, 0);
  // text("in", 22, 114);
}
