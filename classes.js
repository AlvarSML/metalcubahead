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
    this.direction = -1;
    this.bulletRate = 0;
    this.anchor.setTo(.5,.5);
    /*balas*/
    this.eBullets = game.add.group();
    this.eBullets.enableBody = true;
    this.eBullets.createMultiple(10, 'bullets');
    this.eBullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
    this.eBullets.setAll('checkWorldBounds', true);
    /*animaciones*/
    this.animations.add('rigth',[9,10,11],5,true);
    this.animations.add('left',[6,7,8],5,true);
    this.animations.add('shootl',[0,1,2],7,true);
    this.animations.add('shootr',[3,4,5],5,true);
  }

  update() {
    if (this.body.velocity.x > 0) {
      this.animations.play('rigth');
    } else if (this.body.velocity.x < 0) {
      this.animations.play('left');
    }

    
    if ((this.x - player.x) > 0 && (this.x - player.x) < 400) {
      // si el jugador esta a la izquierda
      // dispara a la izquierda
      this.shoot();
      this.animations.play('shootl');
    } else if ((this.x - player.x) < 0) {
      // si el jugador esta detras
      this.scale.x = -2;
    } else {
      this.body.velocity.x = 0;
      this.animations.stop();
    }
  }

  stdReset(x, y) {
    this.reset(x, y);
  }

  shoot(){
    let bullet = this.eBullets.getFirstExists(false);
    if (bullet && this.bulletRate < game.time.now) {
      bullet.frame = 0;
      bullet.scale.setTo(2,2);
      bullet.reset(this.x - 10 , this.y + 15);
      bullet.body.velocity.x = 300 * this.direction;
      
      if (this.direction = -1) {
        bullet.anchor.setTo(.5,.5);
        bullet.angle = -180;
      }


      this.bulletRate = game.time.now + 400;
    }
  }

  damage(hp) {
    this.health -= hp;
  }
}
/** Test **/
class Bullet extends Phaser.Sprite {
  constructor(game,x,y,vX,vY) {
    super(game,x,y,'bullets');
    this.exsists = false;
    this.game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.scale.setTo(2,2);
    this.body.velocity.x  = 1;
    this.frame = 0;
  }
  // methods
}

/****/