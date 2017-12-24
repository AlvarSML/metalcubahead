function configEnemy() {
  soldiers = game.add.physicsGroup(Phaser.Physics.ARCADE);
}

function spawEnemy(x,y,sprite) {
  soldier = soldiers.create(x,y,sprite);
  soldier.physicsBodyType = Phaser.Physics.ARCADE;
  game.physics.arcade.enable(soldier); 
  soldier.body.gravity.y = GRAVEDAD; 
  soldier.body.collideWorldBounds = true;
  soldier.scale.setTo(2,2);
  soldier.frame = 2;
}
