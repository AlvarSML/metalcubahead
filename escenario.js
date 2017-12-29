function createGround() {
  ground = game.add.group();
  ground.enableBody = true;
  let gTile;

  for (let x = 0; x < game.world.width;x+=50) {
    gTile = ground.create(x,game.world.height - 50,'texturas','ground');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;
  }

  /* Maderas */
  gTile = ground.create(380,400,'texturas','woodl');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(430,400,'texturas','wood');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(480,400,'texturas','woodr');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

}
