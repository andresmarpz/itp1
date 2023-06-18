/*

Officer: 6319957
CaseNum: 401-3-61562152-6319957

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When methanol dips below 0.38 and arsenic goes above 0.48, whilst at the same time, NerveGas goes above 0.53 or amanitaMushrooms goes above 0.43, reduce methylene by 0.01
	- If strychnine goes above 0.54 and chlorine dips below 0.26, or on the other hand, SpiderVenom dips below 0.54 and snake_venom goes above 0.34, raise methylene by 0.05
	- If arsenic dips below 0.36 or amanitaMushrooms goes above 0.3, whilst at the same time, snake_venom goes above 0.64 or strychnine dips below 0.25, reduce aspirin by 0.02
	- When methanol goes above 0.55, chlorine dips below 0.67, and also NerveGas goes above 0.44, try increasing aspirin by 0.03
	- When strychnine goes above 0.34 and SpiderVenom dips below 0.5, whilst at the same time, snake_venom goes above 0.37 or methanol dips below 0.36, try decreasing paracetamol by 0.03
	- If chlorine dips below 0.45 and arsenic goes above 0.64, or on the other hand, amanitaMushrooms goes above 0.33 or NerveGas goes above 0.49, try increasing paracetamol by 0.01
	- If SpiderVenom goes above 0.35 or strychnine dips below 0.26, or on the other hand, arsenic dips below 0.4 and snake_venom goes above 0.73, decrement calcium_chloride by 0.03
	- When chlorine dips below 0.32, amanitaMushrooms dips below 0.3, and also methanol goes above 0.66, try increasing calcium_chloride by 0.03
	- If snake_venom goes above 0.67 or NerveGas dips below 0.71, whilst at the same time, amanitaMushrooms dips below 0.46 or arsenic goes above 0.49, reduce betaBlocker by 0.01
	- If strychnine dips below 0.73 or methanol goes above 0.64, or on the other hand, SpiderVenom dips below 0.66 and chlorine goes above 0.64, try increasing betaBlocker by 0.03


Your conditional statements should consider the following poisons:

	- strychnine
	- SpiderVenom
	- chlorine
	- arsenic
	- amanitaMushrooms
	- NerveGas
	- snake_venom
	- methanol


Your conditional statements should modify the following antidotes:

	- methylene
	- aspirin
	- paracetamol
	- calcium_chloride
	- betaBlocker


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var strychnine;
var SpiderVenom;
var chlorine;
var arsenic;
var amanitaMushrooms;
var NerveGas;
var snake_venom;
var methanol;

//Declare the antidote variables
var methylene;
var aspirin;
var paracetamol;
var calcium_chloride;
var betaBlocker;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  strychnine = 0.5;
  SpiderVenom = 0.5;
  chlorine = 0.5;
  arsenic = 0.5;
  amanitaMushrooms = 0.5;
  NerveGas = 0.5;
  snake_venom = 0.5;
  methanol = 0.5;
  methylene = 0.5;
  aspirin = 0.5;
  paracetamol = 0.5;
  calcium_chloride = 0.5;
  betaBlocker = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 8; i++) {
    graphs.push([]);
    for (var j = 0; j < 512; j++) {
      graphs[i].push(0.5);
    }
  }
}

function draw() {
  //Develop the antidote below
  //Write conditional statements to change the amount of each substance ...

  // You must develop the antidote by using conditional statements in the draw loop to do the following.

  // 	- When methanol dips below 0.38 and arsenic goes above 0.48, whilst at the same time, NerveGas goes above 0.53 or amanitaMushrooms goes above 0.43, reduce methylene by 0.01
  // 	- If strychnine goes above 0.54 and chlorine dips below 0.26, or on the other hand, SpiderVenom dips below 0.54 and snake_venom goes above 0.34, raise methylene by 0.05
  // 	- If arsenic dips below 0.36 or amanitaMushrooms goes above 0.3, whilst at the same time, snake_venom goes above 0.64 or strychnine dips below 0.25, reduce aspirin by 0.02
  // 	- When methanol goes above 0.55, chlorine dips below 0.67, and also NerveGas goes above 0.44, try increasing aspirin by 0.03
  // 	- When strychnine goes above 0.34 and SpiderVenom dips below 0.5, whilst at the same time, snake_venom goes above 0.37 or methanol dips below 0.36, try decreasing paracetamol by 0.03
  // 	- If chlorine dips below 0.45 and arsenic goes above 0.64, or on the other hand, amanitaMushrooms goes above 0.33 or NerveGas goes above 0.49, try increasing paracetamol by 0.01
  // 	- If SpiderVenom goes above 0.35 or strychnine dips below 0.26, or on the other hand, arsenic dips below 0.4 and snake_venom goes above 0.73, decrement calcium_chloride by 0.03
  // 	- When chlorine dips below 0.32, amanitaMushrooms dips below 0.3, and also methanol goes above 0.66, try increasing calcium_chloride by 0.03
  // 	- If snake_venom goes above 0.67 or NerveGas dips below 0.71, whilst at the same time, amanitaMushrooms dips below 0.46 or arsenic goes above 0.49, reduce betaBlocker by 0.01
  // 	- If strychnine dips below 0.73 or methanol goes above 0.64, or on the other hand, SpiderVenom dips below 0.66 and chlorine goes above 0.64, try increasing betaBlocker by 0.03

  // Your conditional statements should consider the following poisons:

  // 	- strychnine
  // 	- SpiderVenom
  // 	- chlorine
  // 	- arsenic
  // 	- amanitaMushrooms
  // 	- NerveGas
  // 	- snake_venom
  // 	- methanol

  // Your conditional statements should modify the following antidotes:

  // 	- methylene
  // 	- aspirin
  // 	- paracetamol
  // 	- calcium_chloride
  // 	- betaBlocker

  if (
    methanol < 0.38 &&
    arsenic > 0.48 &&
    (NerveGas > 0.53 || amanitaMushrooms > 0.43)
  ) {
    methylene -= 0.01;
  }
  if (
    (strychnine > 0.54 && chlorine < 0.26) ||
    (SpiderVenom < 0.54 && snake_venom > 0.34)
  ) {
    methylene += 0.05;
  }
  if (
    (arsenic < 0.36 || amanitaMushrooms > 0.3) &&
    (snake_venom > 0.64 || strychnine < 0.25)
  ) {
    aspirin -= 0.02;
  }
  if (methanol > 0.55 && chlorine < 0.67 && NerveGas > 0.44) {
    aspirin += 0.03;
  }
  if (
    strychnine > 0.34 &&
    SpiderVenom < 0.5 &&
    (snake_venom > 0.37 || methanol < 0.36)
  ) {
    paracetamol -= 0.03;
  }
  if (
    (chlorine < 0.45 && arsenic > 0.64) ||
    amanitaMushrooms > 0.33 ||
    NerveGas > 0.49
  ) {
    paracetamol += 0.01;
  }
  if (
    SpiderVenom > 0.35 ||
    strychnine < 0.26 ||
    (arsenic < 0.4 && snake_venom > 0.73)
  ) {
    calcium_chloride -= 0.03;
  }
  if (chlorine < 0.32 && amanitaMushrooms < 0.3 && methanol > 0.66) {
    calcium_chloride += 0.03;
  }
  if (
    (snake_venom > 0.67 || NerveGas < 0.71) &&
    (amanitaMushrooms < 0.46 || arsenic > 0.49)
  ) {
    betaBlocker -= 0.01;
  }
  if (
    strychnine < 0.73 ||
    methanol > 0.64 ||
    (SpiderVenom < 0.66 && chlorine > 0.64)
  ) {
    betaBlocker += 0.03;
  }

  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  strychnine = nextValue(graphs[0], strychnine);
  SpiderVenom = nextValue(graphs[1], SpiderVenom);
  chlorine = nextValue(graphs[2], chlorine);
  arsenic = nextValue(graphs[3], arsenic);
  amanitaMushrooms = nextValue(graphs[4], amanitaMushrooms);
  NerveGas = nextValue(graphs[5], NerveGas);
  snake_venom = nextValue(graphs[6], snake_venom);
  methanol = nextValue(graphs[7], methanol);

  methylene = constrain(methylene, 0, 1);
  aspirin = constrain(aspirin, 0, 1);
  paracetamol = constrain(paracetamol, 0, 1);
  calcium_chloride = constrain(calcium_chloride, 0, 1);
  betaBlocker = constrain(betaBlocker, 0, 1);

  ///////// DO NOT CHANGE THE CODE BELOW ///////////

  //drawing code

  // set background
  background(0);
  noFill();

  //draw the graphs for the vitals

  var colors = [
    color(255, 0, 0),
    color(0, 255, 0),
    color(0, 0, 255),
    color(255, 0, 255),
    color(255, 255, 0),
    color(0, 255, 255),
    color(255, 100, 100),
    color(255, 100, 0),
  ];

  for (var i = 0; i < graphs.length; i++) {
    stroke(colors[i]);
    drawGraph(graphs[i]);
  }

  //draw the poisons as text
  noStroke();
  fill(colors[0]);
  text("strychnine: " + nf(strychnine, 1, 2), 20, 20);
  fill(colors[1]);
  text("SpiderVenom: " + nf(SpiderVenom, 1, 2), 20, 40);
  fill(colors[2]);
  text("chlorine: " + nf(chlorine, 1, 2), 20, 60);
  fill(colors[3]);
  text("arsenic: " + nf(arsenic, 1, 2), 20, 80);
  fill(colors[4]);
  text("amanitaMushrooms: " + nf(amanitaMushrooms, 1, 2), 20, 100);
  fill(colors[5]);
  text("NerveGas: " + nf(NerveGas, 1, 2), 20, 120);
  fill(colors[6]);
  text("snake_venom: " + nf(snake_venom, 1, 2), 20, 140);
  fill(colors[7]);
  text("methanol: " + nf(methanol, 1, 2), 20, 160);

  //draw the antidotes bar chart
  drawBar(methylene, 50, "methylene");
  drawBar(aspirin, 200, "aspirin");
  drawBar(paracetamol, 350, "paracetamol");
  drawBar(calcium_chloride, 500, "calcium_chloride");
  drawBar(betaBlocker, 650, "betaBlocker");
}

function nextValue(graph, val) {
  //gets the next value for a vital and puts it in an array for drawing
  var delta = random(-0.03, 0.03);

  val += delta;
  if (val > 1 || val < 0) {
    delta *= -1;
    val += delta * 2;
  }

  graph.push(val);
  graph.shift();
  return val;
}

function drawGraph(graph) {
  //draws an array as a graph
  beginShape();
  for (var i = 0; i < graph.length; i++) {
    vertex((width * i) / 512, height * 0.5 - (graph[i] * height) / 3);
  }
  endShape();
}

function drawBar(val, x, name) {
  //draws the bars for bar chart
  noStroke();
  fill(0, 100, 100);
  var mh = height * 0.4 - 50;
  rect(x, height - 50 - val * mh, 100, val * mh);
  fill(255);
  text(name + ": " + val, x, height - 20);
}
