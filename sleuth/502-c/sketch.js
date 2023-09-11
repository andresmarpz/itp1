/*

Officer: 6319957
CaseNum: 502-2-67272542-6319957

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var paper_A = {
  redacted_0: ["play", "meddle", "stuff"],
  redacted_1: ["plug", "fence", "clip"],
  redacted_2: ["sail", "charge", "smile"],
  redacted_3: ["hurry", "protect", "syndicate"],
  redacted_4: ["smile", "radiate", "charge"],
  redacted_5: ["consider", "hit", "sneeze"],
  redacted_6: ["clip", "start", "succeed"],
  redacted_7: ["a donation", "protect", "stuff"],
  redacted_8: ["play", "plug", "play"],
  redacted_9: ["meddle", "stuff", "protect"],
};

var paper_B = {
  redacted_0: ["Edsger", "succeed", "stuff"],
  redacted_1: ["stuff", "consider", "protect"],
  redacted_2: ["tug", "Governor Zuckerberg", "sail"],
  redacted_3: ["stuff", "mend", "consider"],
  redacted_4: ["consider", "consider", "consider"],
  redacted_5: ["hurry", "charge", "ALGOL"],
  redacted_6: ["rejoice", "$200,000", "consider"],
  redacted_7: ["campaign", "sneeze", "play"],
  redacted_8: ["Hopper", "bake", "play"],
  redacted_9: ["sneeze", "protect", "charge"],
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont("SpecialElite.ttf");
  backgroundImg = loadImage("Background.png");
}

function setup() {
  createCanvas(1280, 800);

  // replace all redacted words indicated with '+' characters with the correct values from the data structures above. Use ${} to be able to use variables inside strings.
  // The words are
  // Governor Zuckerberg
  // a donation
  // campaign
  // $200,000
  // Hopper
  // syndicate
  // hit
  // ALGOL
  // Edsger
  redactedText = `Dear ${paper_B.redacted_2[1]}, I am sure that something could be worked out in terms of ${paper_A.redacted_7[0]} for your ${paper_B.redacted_7[0]}. How does ${paper_B.redacted_6[1]} sound ? I am afraid I will need to be so crude as to spell out what ${paper_B.redacted_8[0]} requires in return. ${paper_A.redacted_3[2]} needs to be out of the picture. She’s caused enough trouble. Get the ${paper_A.redacted_3[2]} to organise the ${paper_A.redacted_5[1]} but I’d prefer it you don’t mention me or ${paper_B.redacted_5[2]}. I owe them enough favours already. Your old friend, ${paper_B.redacted_0[0]}`;
}

function draw() {
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width / 2, 10, width / 2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(
    "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger",
    670,
    100,
    580,
    600
  );
}
