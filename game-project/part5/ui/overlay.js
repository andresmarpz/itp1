function drawText(textTuple, posX, posY, drawShadow = true) {
  textSize(18);

  let x = posX / 2;
  for (const [txt, color = "white"] of textTuple) {
    const string = String(txt);
    const textX = x + textWidth(string) / 2;
    if (drawShadow) {
      fill("black");
      text(string, textX + 1, posY + 1);
    }

    fill(color);
    text(string, textX, posY);

    x += textWidth(string);
  }
}

function renderGameScore(posX, posY) {
  drawText(
    [
      ["Score: "],
      [world.gameScore],
      [" / ", "lightgray"],
      [world.maxGameScore, "lightgray"],
    ],
    posX,
    posY
  );
}

function renderLives(posX, posY) {
  drawText([["Lives: "], ["♥".repeat(player.lives), "red"]], posX, posY);
}
