/*

Officer: 6319957
CaseNum: 401-2-18931699-6319957

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When methanol dips below 0.58, whilst at the same time, Amanita_Mushrooms goes above 0.29 or botulinium dips below 0.38, try decreasing calciumGluconate by 0.03
	- If cyanide goes above 0.35, or on the other hand, Spider_Venom goes above 0.54 and hemlock dips below 0.36, try increasing calciumGluconate by 0.01
	- If cyanide goes above 0.33 and Amanita_Mushrooms dips below 0.69, decrement ethanol by 0.01
	- If hemlock dips below 0.28 or methanol goes above 0.29, raise ethanol by 0.05
	- When methanol goes above 0.47, whilst at the same time, hemlock dips below 0.67 or Amanita_Mushrooms goes above 0.48, try decreasing antitoxin by 0.03
	- When cyanide dips below 0.31 and botulinium dips below 0.26, increment antitoxin by 0.03
	- If methanol dips below 0.33 and Amanita_Mushrooms goes above 0.42, or on the other hand, cyanide goes above 0.25, decrease glucagon by 0.03
	- When Spider_Venom dips below 0.26 or hemlock goes above 0.54, increase glucagon by 0.01


Your conditional statements should consider the following poisons:

	- Amanita_Mushrooms
	- cyanide
	- methanol
	- hemlock
	- botulinium
	- Spider_Venom


Your conditional statements should modify the following antidotes:

	- calciumGluconate
	- ethanol
	- antitoxin
	- glucagon


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
var Amanita_Mushrooms;
var cyanide;
var methanol;
var hemlock;
var botulinium;
var Spider_Venom;

//Declare the antidote variables
var calciumGluconate;
var ethanol;
var antitoxin;
var glucagon;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  Amanita_Mushrooms = 0.5;
  cyanide = 0.5;
  methanol = 0.5;
  hemlock = 0.5;
  botulinium = 0.5;
  Spider_Venom = 0.5;
  calciumGluconate = 0.5;
  ethanol = 0.5;
  antitoxin = 0.5;
  glucagon = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 6; i++) {
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
  // 	- When methanol dips below 0.58, whilst at the same time, Amanita_Mushrooms goes above 0.29 or botulinium dips below 0.38, try decreasing calciumGluconate by 0.03
  // 	- If cyanide goes above 0.35, or on the other hand, Spider_Venom goes above 0.54 and hemlock dips below 0.36, try increasing calciumGluconate by 0.01
  // 	- If cyanide goes above 0.33 and Amanita_Mushrooms dips below 0.69, decrement ethanol by 0.01
  // 	- If hemlock dips below 0.28 or methanol goes above 0.29, raise ethanol by 0.05
  // 	- When methanol goes above 0.47, whilst at the same time, hemlock dips below 0.67 or Amanita_Mushrooms goes above 0.48, try decreasing antitoxin by 0.03
  // 	- When cyanide dips below 0.31 and botulinium dips below 0.26, increment antitoxin by 0.03
  // 	- If methanol dips below 0.33 and Amanita_Mushrooms goes above 0.42, or on the other hand, cyanide goes above 0.25, decrease glucagon by 0.03
  // 	- When Spider_Venom dips below 0.26 or hemlock goes above 0.54, increase glucagon by 0.01

  // Your conditional statements should consider the following poisons:

  // 	- Amanita_Mushrooms
  // 	- cyanide
  // 	- methanol
  // 	- hemlock
  // 	- botulinium
  // 	- Spider_Venom

  // Your conditional statements should modify the following antidotes:

  // 	- calciumGluconate
  // 	- ethanol
  // 	- antitoxin
  // 	- glucagon

  if (methanol < 0.58 && (Amanita_Mushrooms > 0.29 || botulinium < 0.38)) {
    calciumGluconate -= 0.03;
  }
  if (cyanide > 0.35 || (Spider_Venom > 0.54 && hemlock < 0.36)) {
    calciumGluconate += 0.01;
  }
  if (cyanide > 0.33 && Amanita_Mushrooms < 0.69) {
    ethanol -= 0.01;
  }
  if (hemlock < 0.28 || methanol > 0.29) {
    ethanol += 0.05;
  }
  if (methanol > 0.47 && (hemlock < 0.67 || Amanita_Mushrooms > 0.48)) {
    antitoxin -= 0.03;
  }
  if (cyanide < 0.31 && botulinium < 0.26) {
    antitoxin += 0.03;
  }
  if ((methanol < 0.33 && Amanita_Mushrooms > 0.42) || cyanide > 0.25) {
    glucagon -= 0.03;
  }
  if (Spider_Venom < 0.26 || hemlock > 0.54) {
    glucagon += 0.01;
  }

  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  Amanita_Mushrooms = nextValue(graphs[0], Amanita_Mushrooms);
  cyanide = nextValue(graphs[1], cyanide);
  methanol = nextValue(graphs[2], methanol);
  hemlock = nextValue(graphs[3], hemlock);
  botulinium = nextValue(graphs[4], botulinium);
  Spider_Venom = nextValue(graphs[5], Spider_Venom);

  calciumGluconate = constrain(calciumGluconate, 0, 1);
  ethanol = constrain(ethanol, 0, 1);
  antitoxin = constrain(antitoxin, 0, 1);
  glucagon = constrain(glucagon, 0, 1);

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
  ];

  for (var i = 0; i < graphs.length; i++) {
    stroke(colors[i]);
    drawGraph(graphs[i]);
  }

  //draw the poisons as text
  noStroke();
  fill(colors[0]);
  text("Amanita_Mushrooms: " + nf(Amanita_Mushrooms, 1, 2), 20, 20);
  fill(colors[1]);
  text("cyanide: " + nf(cyanide, 1, 2), 20, 40);
  fill(colors[2]);
  text("methanol: " + nf(methanol, 1, 2), 20, 60);
  fill(colors[3]);
  text("hemlock: " + nf(hemlock, 1, 2), 20, 80);
  fill(colors[4]);
  text("botulinium: " + nf(botulinium, 1, 2), 20, 100);
  fill(colors[5]);
  text("Spider_Venom: " + nf(Spider_Venom, 1, 2), 20, 120);

  //draw the antidotes bar chart
  drawBar(calciumGluconate, 50, "calciumGluconate");
  drawBar(ethanol, 200, "ethanol");
  drawBar(antitoxin, 350, "antitoxin");
  drawBar(glucagon, 500, "glucagon");
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
