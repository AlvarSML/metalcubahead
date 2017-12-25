function configEnemy() {
  soldiers = game.add.physicsGroup(Phaser.Physics.ARCADE);
  soldiers.physicsBodyType = Phaser.Physics.ARCADE;
  game.physics.arcade.enable(soldiers);

}

function spawEnemy(x,y,sprite) {
  soldier = soldiers.create(x,y,sprite);  
  soldier.body.gravity.y = GRAVEDAD; 
  soldier.body.collideWorldBounds = true;
  soldier.scale.setTo(2,2);
  soldier.frame = 2;
}

/*test*/
function spawn2() {
  e = new Enemy();
}

class Enemy{
  constructor(){
    //Phaser.Sprite.call(90, 0, 'enemy');
    this.p = game.add.sprite(0,50,'enemy');
    this.p.physicsBodyType = Phaser.Physics.ARCADE;
    game.physics.arcade.enable(this.p);
    this.p.body.gravity.y
    this.p.body.gravity.y = GRAVEDAD; 
    this.p.body.collideWorldBounds = true;
    this.p.scale.setTo(2,2);
    this.p.frame = 2;
  }

  update() {
    this.p.body.x += 1;
  }
}
