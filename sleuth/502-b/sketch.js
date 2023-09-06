/*

Officer: 6319957
CaseNum: 502-1-36814132-6319957

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var AEvidence = [
  { detail0: "plug", detail1: "smile", detail2: "start" },
  { detail0: "sneeze", detail1: "fence", detail2: "a donation" },
  { detail0: "smile", detail1: "smile", detail2: "fence" },
  { detail0: "protect", detail1: "bake", detail2: "charge" },
  { detail0: "mend", detail1: "play", detail2: "start" },
  { detail0: "Governor Zuckerberg", detail1: "COBOL", detail2: "clip" },
  { detail0: "capital", detail1: "play", detail2: "plug" },
  { detail0: "stuff", detail1: "stuff", detail2: "fence" },
  { detail0: "start", detail1: "sneeze", detail2: "Edsger" },
  { detail0: "bake", detail1: "sneeze", detail2: "delicate" },
];

var BEvidence = [
  { detail0: "plug", detail1: "Hopper’s", detail2: "bake" },
  { detail0: "hurry", detail1: "stuff", detail2: "fence" },
  { detail0: "start", detail1: "play", detail2: "meddle" },
  { detail0: "meddle", detail1: "start", detail2: "fence" },
  { detail0: "charge", detail1: "fence", detail2: "play" },
  { detail0: "smile", detail1: "she has", detail2: "clip" },
  { detail0: "clip", detail1: "bake", detail2: "charge" },
  { detail0: "play", detail1: "clip", detail2: "tug" },
  { detail0: "syndicate", detail1: "bake", detail2: "hurry" },
  { detail0: "consider", detail1: "romantic", detail2: "stuff" },
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont("SpecialElite.ttf");
  backgroundImg = loadImage("Background.png");
}

function setup() {
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  // The order is:
  // Edsger, Hopper's, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg
  redactedText = `My dearest 
	${AEvidence[8].detail2}, Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about ${BEvidence[0].detail1} intervention. I suspect that ${BEvidence[5].detail1} a ${BEvidence[9].detail1} interest at the ${AEvidence[5].detail1}. I and the ${BEvidence[8].detail0} appreciate your many contributions over the years. However, this is a most ${AEvidence[9].detail2} matter which would require significant ${AEvidence[6].detail0} for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps ${AEvidence[1].detail2} to my forthcoming campaign would help. Yours sincerely, ${AEvidence[5].detail0}`;
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
    "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg",
    670,
    100,
    580,
    600
  );
}
