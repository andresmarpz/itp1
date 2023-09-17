function drawMenu() {
  background(0);
  fill(255);
  textSize(40);
  textAlign(CENTER);
  text("Press ENTER to start", gameWidth / 2, gameHeight / 2);
}

function handleMenuKeys() {
  if (keyCode == ENTER) {
    gameState = GAME_STATE.PLAY;
  }
}
