function checkCollectable(collectable) {
  // collectable item logic
  if (
    dist(player.posX, player.posY, collectable.x_pos, collectable.y_pos) <=
      collectable.size &&
    !collectable.isFound
  ) {
    collectable.isFound = true;
    world.gameScore += 1;
  }
}

function checkCanyon(canyon) {
  return (
    player.posY >= floor_y &&
    player.posX >= canyon.x_pos &&
    player.posX <= canyon.x_pos + canyon.width
  );
}

function checkFlagpole(flagpole) {
  // flagpole logic
  const d = abs(player.posX - flagpole.x_pos);
  if (d < 15) {
    flagpole.isReached = true;
  }
}
