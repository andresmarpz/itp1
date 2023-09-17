function generateCanyons(amount) {
  let latestX = 0;
  return Array.from({ length: amount }, (entry, idx) => {
    const randomX = valueBetween(
      Math.random() * 800 * idx,
      idx * 600,
      idx * 800
    );
    const posX = randomX + Math.max(randomX - latestX, 900);
    latestX = posX;

    return {
      x_pos: posX,
      y_pos: floor_y,
      width: valueBetween(Math.random() * 100, 50, 125),
      height: gameHeight - floor_y,
    };
  });
}

function generateCollectables(amount) {
  let latestX = 0;
  return Array.from({ length: amount }, (entry, idx) => {
    const randomX = Math.min(Math.random() * 800 * idx, idx * 350);
    const posX = randomX + Math.max(randomX - latestX, 120);
    latestX = posX;

    return {
      x_pos: posX,
      y_pos: floor_y - 10,
      size: 40,
    };
  });
}

function generateTrees(amount) {
  let latestX = 0;
  return Array.from({ length: amount }, (entry, idx) => {
    const randomX = valueBetween(
      Math.random() * 800 * idx,
      idx * 350,
      idx * 600
    );
    const posX = randomX + Math.max(randomX - latestX, 600);
    latestX = posX;

    const randomHeight = valueBetween(Math.random() * 400, 175, 400);

    return {
      x_pos: posX,
      y_pos: floor_y - randomHeight,
      width: 100,
      height: randomHeight,
    };
  });
}
