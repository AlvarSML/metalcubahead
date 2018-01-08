/* personaje generico */
class Entity extends Phaser.Sprite {
  constructor(game,x,y,hp,sprite){
    //Phaser.Sprite.call(90, 0, 'enemy');
    super(game,x,y,sprite);
    this.exsists = false;
    this.health = hp;
    this.game.physics.enable(this);
    this.body.gravity.y = GRAVEDAD; 
    this.body.collideWorldBounds = true;
    this.scale.setTo(2,2);
    //this.frame = 2;
    this.direction;
    this.bulletRate = 0;
    this.anchor.setTo(.5,.5);
    /*balas*/
    this.bullets = game.add.group();
    this.bullets.enableBody = true;
    this.bullets.createMultiple(100, 'bullets');
    this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
    this.bullets.setAll('checkWorldBounds', true);

  }

  update() {

  }

  stdReset(x, y) {
    this.reset(x, y);
  }

  shoot(){
    let bullet = this.bullets.getFirstExists(false);
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

class Enemy extends Entity {
  constructor(game,x,y,hp){
    super(game,x,y,hp,'enemy');
    this.frame = 2;
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

    
    if ((this.x - playerp.x) > 0 && (this.x - playerp.x) < 400) {
      // si el jugador esta a la izquierda
      // dispara a la izquierda
      this.shoot();
      this.animations.play('shootl');
    } else if ((this.x - playerp.x) < 0) {
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
    let bullet = this.bullets.getFirstExists(false);
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

class MainPlayer extends Entity {
  constructor(game,x,y,hp) {
    super(game,x,y,hp,'camilo');
    //this.addChild(game.add.sprite(0, 0, 'someSprite'));
    game.add.existing(this);
    this.direction = 1;
    //controls
    this.keyL = game.input.keyboard.addKey(Phaser.Keyboard.L);
    this.keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.keySpace = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //animations
    this.animations.add('run', [0, 1, 2], 10, true);  
  }

  update() {
    let adown = this.keyA.isDown;
    let ddown = this.keyD.isDown;
    let sdown = this.keyS.isDown;


    if (adown) {
      this.body.velocity.x = -200;
      //this.animations.play('run');
      //this.scale.x = -2;
      //this.direccion = -1;
    } else if (ddown) {
      this.body.velocity.x = 200;
      //this.animations.play('run');
      //this.scale.x = 2;
      //this.direccion = 1;
    } else {
      this.body.velocity.x = 0;
    }

    if (this.keyL.isDown) {
      this.shoot();
    }

    /*
    if(!this.keyL.isDown && !this.keyS.isDown && !this.keyA.isDown && !this.keyD.isDown){
      this.animations.stop();
      this.body.velocity.x = 0;
      this.frame = 3;
    }

    if(this.keySpace.isDown && this.body.touching.down){
      this.jump();
    }
    */

  }

  jump(){
    this.body.velocity.y = -500;
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