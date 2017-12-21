let soldier, soldiers;

function createEnemies() {

  soldiers = game.add.group();
  soldiers.enableBody = true;
  soldiers.physicsBodyType = Phaser.Physics.ARCADE;
  soldiers.scale.setTo(2,2);

}

function spawEnemy(x,y,sprite) {
  soldier = soldiers.create(x,y,sprite);
  soldier.frame = 0;
  soldier.body.collideWorldBounds = true;
  soldier.body.gravity.y = 100; 

}
