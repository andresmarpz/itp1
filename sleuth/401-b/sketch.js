/*

Officer: 6319957
CaseNum: 401-1-56146611-6319957

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- When ricin dips below 0.71, reduce methylene by 0.04
	- When botulinium goes above 0.66, increment methylene by 0.05
	- If ricin goes above 0.4, reduce Sodium_Bicarbonate by 0.05
	- If botulinium goes above 0.48 or insecticide dips below 0.33, increment Sodium_Bicarbonate by 0.05
	- If botulinium goes above 0.47, decrease betaBlocker by 0.02
	- When insecticide dips below 0.74 or warfarin goes above 0.69, raise betaBlocker by 0.01
	- When ricin goes above 0.62 or insecticide dips below 0.51, reduce glucagon by 0.04
	- If warfarin dips below 0.58, raise glucagon by 0.05


Your conditional statements should consider the following poisons:

	- warfarin
	- insecticide
	- botulinium
	- ricin


Your conditional statements should modify the following antidotes:

	- methylene
	- Sodium_Bicarbonate
	- betaBlocker
	- glucagon


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var warfarin;
var insecticide;
var botulinium;
var ricin;

//Declare the antidote variables
var methylene;
var Sodium_Bicarbonate;
var betaBlocker;
var glucagon;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  warfarin = 0.5;
  insecticide = 0.5;
  botulinium = 0.5;
  ricin = 0.5;
  methylene = 0.5;
  Sodium_Bicarbonate = 0.5;
  betaBlocker = 0.5;
  glucagon = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 4; i++) {
    graphs.push([]);
    for (var j = 0; j < 512; j++) {
      graphs[i].push(0.5);
    }
  }
}

function draw() {
  //Develop the antidote below
  //Write conditional statements to change the amount of each substance ...

  // You must develop the antidote by using conditional statements in the draw loop to do the following:

  // 	- When ricin dips below 0.71, reduce methylene by 0.04
  // 	- When botulinium goes above 0.66, increment methylene by 0.05
  // 	- If ricin goes above 0.4, reduce Sodium_Bicarbonate by 0.05
  // 	- If botulinium goes above 0.48 or insecticide dips below 0.33, increment Sodium_Bicarbonate by 0.05
  // 	- If botulinium goes above 0.47, decrease betaBlocker by 0.02
  // 	- When insecticide dips below 0.74 or warfarin goes above 0.69, raise betaBlocker by 0.01
  // 	- When ricin goes above 0.62 or insecticide dips below 0.51, reduce glucagon by 0.04
  // 	- If warfarin dips below 0.58, raise glucagon by 0.05

  // Your conditional statements should consider the following poisons:

  // 	- warfarin
  // 	- insecticide
  // 	- botulinium
  // 	- ricin

  // Your conditional statements should modify the following antidotes:

  // 	- methylene
  // 	- Sodium_Bicarbonate
  // 	- betaBlocker
  // 	- glucagon

  if (ricin < 0.71) {
    methylene -= 0.04;
  }

  if (botulinium > 0.66) {
    methylene += 0.05;
  }

  if (ricin > 0.4) {
    Sodium_Bicarbonate -= 0.05;
  }

  if (botulinium > 0.48 || insecticide < 0.33) {
    Sodium_Bicarbonate += 0.05;
  }

  if (botulinium > 0.47) {
    betaBlocker -= 0.02;
  }

  if (insecticide < 0.74 || warfarin > 0.69) {
    betaBlocker += 0.01;
  }

  if (ricin > 0.62 || insecticide < 0.51) {
    glucagon -= 0.04;
  }

  if (warfarin < 0.58) {
    glucagon += 0.05;
  }

  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  warfarin = nextValue(graphs[0], warfarin);
  insecticide = nextValue(graphs[1], insecticide);
  botulinium = nextValue(graphs[2], botulinium);
  ricin = nextValue(graphs[3], ricin);

  methylene = constrain(methylene, 0, 1);
  Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);
  betaBlocker = constrain(betaBlocker, 0, 1);
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
  text("warfarin: " + nf(warfarin, 1, 2), 20, 20);
  fill(colors[1]);
  text("insecticide: " + nf(insecticide, 1, 2), 20, 40);
  fill(colors[2]);
  text("botulinium: " + nf(botulinium, 1, 2), 20, 60);
  fill(colors[3]);
  text("ricin: " + nf(ricin, 1, 2), 20, 80);

  //draw the antidotes bar chart
  drawBar(methylene, 50, "methylene");
  drawBar(Sodium_Bicarbonate, 200, "Sodium_Bicarbonate");
  drawBar(betaBlocker, 350, "betaBlocker");
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
