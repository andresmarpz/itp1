function renderInterface() {
  if (gameState === GAME_STATE.MENU) {
    drawMenu();
    return;
  }

  renderGameScore(16, 20);
  renderLives(16, 40);
}
