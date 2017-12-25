function configEnemy() {
  soldiers = game.add.physicsGroup(Phaser.Physics.ARCADE);
  soldiers.physicsBodyType = Phaser.Physics.ARCADE;
  game.physics.arcade.enable(soldiers);
  soldiers.update = f => {
    console.log("hola");
  }
}

function spawEnemy(x,y,sprite) {
  soldier = soldiers.create(x,y,sprite);  
  soldier.body.gravity.y = GRAVEDAD; 
  soldier.body.collideWorldBounds = true;
  soldier.scale.setTo(2,2);
  soldier.frame = 2;
}
