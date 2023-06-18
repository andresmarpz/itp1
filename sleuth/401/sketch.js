/*

Officer: 6319957
CaseNum: 401-0-24084789-6319957

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- If botulinium goes above 0.34, try decreasing CalciumChloride by 0.04
	- If polonium dips below 0.62, increment CalciumChloride by 0.03
	- When botulinium dips below 0.64, reduce plasma by 0.02
	- When polonium goes above 0.67, raise plasma by 0.04
	- If polonium dips below 0.44, reduce antitoxin by 0.02
	- When arsenic dips below 0.37, increment antitoxin by 0.05


Your conditional statements should consider the following poisons:

	- polonium
	- botulinium
	- arsenic


Your conditional statements should modify the following antidotes:

	- CalciumChloride
	- plasma
	- antitoxin


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var polonium;
var botulinium;
var arsenic;

//Declare the antidote variables
var CalciumChloride;
var plasma;
var antitoxin;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  polonium = 0.5;
  botulinium = 0.5;
  arsenic = 0.5;
  CalciumChloride = 0.5;
  plasma = 0.5;
  antitoxin = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 3; i++) {
    graphs.push([]);
    for (var j = 0; j < 512; j++) {
      graphs[i].push(0.5);
    }
  }
}

function draw() {
  //Develop the antidote below
  //Write conditional statements to change the amount of each substance ...

  // 	- If botulinium goes above 0.34, try decreasing CalciumChloride by 0.04
  // 	- If polonium dips below 0.62, increment CalciumChloride by 0.03
  // 	- When botulinium dips below 0.64, reduce plasma by 0.02
  // 	- When polonium goes above 0.67, raise plasma by 0.04
  // 	- If polonium dips below 0.44, reduce antitoxin by 0.02
  // 	- When arsenic dips below 0.37, increment antitoxin by 0.05

  // Your conditional statements should consider the following poisons:

  // 	- polonium
  // 	- botulinium
  // 	- arsenic

  // Your conditional statements should modify the following antidotes:

  // 	- CalciumChloride
  // 	- plasma
  // 	- antitoxin

  if (botulinium > 0.34) {
    CalciumChloride -= 0.04;
  }

  if (polonium < 0.62) {
    CalciumChloride += 0.03;
  }

  if (botulinium < 0.64) {
    plasma -= 0.02;
  }

  if (polonium > 0.67) {
    plasma += 0.04;
  }

  if (polonium < 0.44) {
    antitoxin -= 0.02;
  }

  if (arsenic < 0.37) {
    antitoxin += 0.05;
  }

  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  polonium = nextValue(graphs[0], polonium);
  botulinium = nextValue(graphs[1], botulinium);
  arsenic = nextValue(graphs[2], arsenic);

  CalciumChloride = constrain(CalciumChloride, 0, 1);
  plasma = constrain(plasma, 0, 1);
  antitoxin = constrain(antitoxin, 0, 1);

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
  text("polonium: " + nf(polonium, 1, 2), 20, 20);
  fill(colors[1]);
  text("botulinium: " + nf(botulinium, 1, 2), 20, 40);
  fill(colors[2]);
  text("arsenic: " + nf(arsenic, 1, 2), 20, 60);

  //draw the antidotes bar chart
  drawBar(CalciumChloride, 50, "CalciumChloride");
  drawBar(plasma, 200, "plasma");
  drawBar(antitoxin, 350, "antitoxin");
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
