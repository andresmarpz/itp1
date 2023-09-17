const world = {
  width: 800,
  gameScore: 0,
  maxGameScore: 25,
};

let trees = [];
let canyons = [];
let collectables = [];
let mountains = [];
let clouds = [];

function setupWorld() {
  trees = generateTrees(10);

  canyons = generateCanyons(6);

  collectables = generateCollectables(world.maxGameScore);

  mountains = [
    {
      x_pos: 500,
      width: 200,
    },
    {
      x_pos: 1000,
      width: 300,
    },
  ];

  clouds = [
    {
      x_pos: 200,
      y_pos: 100,
      width: 200,
    },
    {
      x_pos: 500,
      y_pos: 100,
      width: 150,
    },
  ];
}
