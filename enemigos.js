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

/* test - funciona mas o menos */
function spawn2() {
  var eneg = game.add.group();
  var ene = new Enemy(game,0,0);
  eneg.add(ene);
  console.log(ene.health);
  ///eneg.add(new Enemy(game,0,0));
  ///eneg.add(new Enemy(game,0,0));
  ///var ene = eneg.getFirstExists(false);

  ene.stdReset(0,0);
}

class Enemy extends Phaser.Sprite {
  constructor(game,x,y){
    //Phaser.Sprite.call(90, 0, 'enemy');
    super(game,x,y,'enemy');
    this.exsists = false;
    this.health = 5;
    this.game.physics.enable(this);
    this.body.gravity.y = GRAVEDAD; 
    this.body.collideWorldBounds = true;
    this.scale.setTo(2,2);
    this.frame = 2;
  }

  update() {
    this.body.x + 1;
  }

  stdReset(x, y) {
    this.reset(x, y);
  }

  spawn() {

  }
}
