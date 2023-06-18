/*
The case of the Python Syndicate
Stage 3


Officer: 6319957
CaseNum: 301-2-15682186-6319957

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Robbie Kray has been declared and initialised
- Position each mugshot relative to Robbie Kray
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Robbie Kray object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Robbie Kray 
- Do not add any additional commands

*/

var photoBoard;
var cecilKarpinskiImage;
var pawelKarpinskiImage;
var robbieKrayImage;
var rockyKrayImage;
var adaLovelaceImage;
var annaKarpinskiImage;

var robbieKrayObj;

function preload() {
  photoBoard = loadImage("photoBoard.png");
  cecilKarpinskiImage = loadImage("karpinskiBros1.png");
  pawelKarpinskiImage = loadImage("karpinskiBros2.png");
  robbieKrayImage = loadImage("krayBrothers2.png");
  rockyKrayImage = loadImage("krayBrothers1.png");
  adaLovelaceImage = loadImage("ada.png");
  annaKarpinskiImage = loadImage("karpinskiWoman.png");
}

function setup() {
  createCanvas(photoBoard.width, photoBoard.height);
  robbieKrayObj = {
    x: 701,
    y: 40,
    image: robbieKrayImage,
  };
}

function draw() {
  image(photoBoard, 0, 0);

  // Update these image commands with your x and y coordinates.
  image(robbieKrayObj.image, robbieKrayObj.x, robbieKrayObj.y);

  image(cecilKarpinskiImage, robbieKrayObj.x - 586, robbieKrayObj.y);
  image(pawelKarpinskiImage, robbieKrayObj.x - 293, robbieKrayObj.y);
  image(rockyKrayImage, robbieKrayObj.x - 586, robbieKrayObj.y + 269);
  image(adaLovelaceImage, robbieKrayObj.x - 293, robbieKrayObj.y + 269);
  image(annaKarpinskiImage, robbieKrayObj.x, robbieKrayObj.y + 269);
}
