/* test - funciona mas o menos */
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
    this.body.velocity.x = 10;
    /*animaciones*/
    this.animations.add('rigth',[9,10,11],5,true);
    this.animations.add('left',[6,7,8],5,true);
  }

  update() {
    if (this.body.velocity.x > 0) {
      this.animations.play('rigth');
    } else {
      this.animations.play('left');
    }

    if (Math.abs(this.x - player.x) < 200) {
      console.log('pum');
    }

  }

  stdReset(x, y) {
    this.reset(x, y);
  }

  spawn() {
    //WIP
  }

}

function poolEnemies(){
  //WIP
}

function spawnEnemy(x,y) {
  enemies.add(new Enemy(game,x,y));
  ene = enemies.getFirstExists(true);
}
