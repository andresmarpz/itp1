/*
The case of the Python Syndicate
Stage 4

Officer: 6319957
CaseNum: 301-3-22393425-6319957

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
	- I’ve done one for you as an example.
	- Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var pawel_karpinski_image;
var rocky_kray_image;
var countess_hamilton_image;
var bones_karpinski_image;
var anna_karpinski_image;
var ada_lovelace_image;

var bones_karpinski_object;

//declare your new objects below
var pawel_karpinski_object = {
  x: 115,
  y: 40,
  image: pawel_karpinski_image,
};

var rocky_kray_object = {
  x: 408,
  y: 40,
  image: rocky_kray_image,
};

var countess_hamilton_object = {
  x: 701,
  y: 40,
  image: countess_hamilton_image,
};

var anna_karpinski_object = {
  x: 408,
  y: 309,
  image: anna_karpinski_image,
};

var ada_lovelace_object = {
  x: 701,
  y: 309,
  image: ada_lovelace_image,
};

function preload() {
  photoBoard = loadImage("photoBoard.png");
  pawel_karpinski_image = loadImage("karpinskiBros2.png");
  rocky_kray_image = loadImage("krayBrothers1.png");
  countess_hamilton_image = loadImage("countessHamilton.png");
  bones_karpinski_image = loadImage("karpinskiDog.png");
  anna_karpinski_image = loadImage("karpinskiWoman.png");
  ada_lovelace_image = loadImage("ada.png");
}

function setup() {
  createCanvas(photoBoard.width, photoBoard.height);
  bones_karpinski_object = {
    x: 115,
    y: 309,
    image: bones_karpinski_image,
  };

  pawel_karpinski_object.image = pawel_karpinski_image;
  rocky_kray_object.image = rocky_kray_image;
  countess_hamilton_object.image = countess_hamilton_image;
  anna_karpinski_object.image = anna_karpinski_image;
  ada_lovelace_object.image = ada_lovelace_image;

  //define your new objects below
}

function draw() {
  image(photoBoard, 0, 0);

  //And update these image commands with your x and y coordinates.
  image(
    pawel_karpinski_object.image,
    pawel_karpinski_object.x,
    pawel_karpinski_object.y
  );
  image(rocky_kray_object.image, rocky_kray_object.x, rocky_kray_object.y);
  image(
    countess_hamilton_object.image,
    countess_hamilton_object.x,
    countess_hamilton_object.y
  );
  image(
    bones_karpinski_object.image,
    bones_karpinski_object.x,
    bones_karpinski_object.y
  );
  image(
    anna_karpinski_object.image,
    anna_karpinski_object.x,
    anna_karpinski_object.y
  );
  image(
    ada_lovelace_object.image,
    ada_lovelace_object.x,
    ada_lovelace_object.y
  );
}
