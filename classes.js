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
    /*balas*/
    this.eBullets = game.add.group();
    this.eBullets.enableBody = true;
    this.eBullets.createMultiple(10, 'bullet');
    this.eBullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
    this.eBullets.setAll('checkWorldBounds', true);
    /*animaciones*/
    this.animations.add('rigth',[9,10,11],5,true);
    this.animations.add('left',[6,7,8],5,true);
    this.animations.add('shootl',[1,0,1],7,true);
    this.animations.add('shootr',[3,4,5],5,true);
  }

  update() {
    if (this.body.velocity.x > 0) {
      this.animations.play('rigth');
    } else if (this.body.velocity.x < 0) {
      this.animations.play('left');
    }

    if (Math.abs(this.x - player.x) < 200) {
      this.body.velocity.x = 0.5 * (this.x - player.x / this.x - player.x) * -1;
      console.log(Math.floor(this.x - player.x / this.x - player.x));
      this.shoot();
      this.animations.play('shootl');
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
    if (bullet) {
      bullet.reset(this.x -45, this.y + 30);
      bullet.body.velocity.x = 10 * (this.x - player.x / this.x - player.x) * -1;
      bulletRate = game.time.now + 10;
    }
  }
}

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