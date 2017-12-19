function createGround() {
  ground = game.add.group();
  ground.enableBody = true;

  for (let x = 0; x < game.world.width;x+=50) {
    let gTile = ground.create(x,game.world.height - 50,'tile');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;
  }
}
