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
    this.direction = -1;
    this.bulletRate = 0;
    this.anchor.setTo(.5,.5);
    /*balas*/
  }

  update() {

  }

  stdReset(x, y) {
    this.reset(x, y);
  }

  shoot(){
    if (this.bulletRate < game.time.now) {

      let bullet = new Bullet(game,this.x - (50 * this.direction * -1),this.y + 10,1000 * this.direction,0);


      if (this.direction == -1) {
        bullet.scale.x = -2;
      }

      bullets.add(bullet);

      console.log('PUM!');
      this.bulletRate = game.time.now + 300;
    }
  }

}

class Enemy extends Entity {
  constructor(game,x,y,hp){
    super(game,x,y,hp,'enemy');
    this.alive = true;
    this.frame = 2;
    //this.body.immovable = true;
    /*animaciones*/
    this.animations.add('rigth',[9,10,11],5,true);
    this.animations.add('left',[6,7,8],5,true);
    this.animations.add('shootl',[0,1,2],7,true);
    this.animations.add('shootr',[3,4,5],5,true);
  }

  shoot(){
    if (this.bulletRate < game.time.now) {

        let bullet = new Bullet(game,this.x - (50 * this.direction * -1),this.y + 10,1000 * this.direction,0);


      if (this.direction == -1) {
        bullet.scale.x = -2;
      }

      bullets.add(bullet);

      console.log('PUM!');
      this.bulletRate = game.time.now + 100;
    }
  }

  update() {
    if (this.body.velocity.x > 0) {
      this.animations.play('rigth');
    } else if (this.body.velocity.x < 0) {
      this.animations.play('left');
    }


    if ((this.x - playerp.x) > 0 && (this.x - playerp.x) < 400 && ((this.y - playerp.y)>-100 && ((this.y - playerp.y)<100)) && this.alive) {
      // si el jugador esta a la izquierda
      // y en el mismo nivel
      // dispara a la izquierda
      this.scale.x = 2;
      this.direction = -1;
      setTimeout(shoot,2000);
      //this.shoot();
      this.animations.play('shootl');
    } else if ((this.x - playerp.x) < 0 && (playerp.x - this.x) < 400 && ((this.y - playerp.y)>-100 && ((this.y - playerp.y)<100)) && this.alive) {
      // si el jugador esta detras
      this.direction = 1;
      this.scale.x = -2;
      this.animations.stop();
      setTimeout(shoot,2000);
      //this.shoot();
    } else {
      this.body.velocity.x = 0;
      this.animations.stop();
    }
  }

  stdReset(x, y) {
    this.reset(x, y);
  }

  damage(hp) {
    this.health -= hp;
  }
}

class MainPlayer extends Entity {
  constructor(game,x,y,hp) {
    super(game,x,y,hp,'camilo');
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
    this.animations.add('shootrun', ['shoot','shootrun1','shootrun2',], 10,true);
    this.animations.add('squash', ['down'],10,true);
    this.animations.add('damage', ['damage'],10,true);
  }

  update() {
    let adown = this.keyA.isDown;
    let ddown = this.keyD.isDown;
    let sdown = this.keyS.isDown;
    let ldown = this.keyL.isDown;

    if(!this.body.touching.down){
      this.frame = 4;
    }

    if (sdown) {
      this.direction = 1;
      this.body.velocity.x = 0;
      this.animations.play('squash');
      this.scale.x = 2;
      playerp.body.setSize(35, 10, 5, 32);
    }else if (adown) {
      this.direction = -1;
      this.body.velocity.x = -200;
      if (this.body.touching.down) {
        this.animations.play('run');
      }
      this.scale.x = -2;
    } else if (ddown) {
      this.direction = 1;
      this.body.velocity.x = 200;
      if (this.body.touching.down) {
        this.animations.play('run');
      }
      this.scale.x = 2;
    }
    else {
      this.body.velocity.x = 0;
    }

    if(!sdown){
      playerp.body.setSize(15, 37, 10, 5);
    }

    if (ldown) {
      this.shootPlayer();
    }


    if(!ldown && !sdown && !adown && !ddown && this.body.touching.down){
      this.animations.stop();
      this.body.velocity.x = 0;
      this.frame = 0;
    }

    if(this.keySpace.isDown && this.body.touching.down){
      this.jump();
      this.frame = 4;
    }

  }
  shootPlayer(){
    this.shoot();
    if (this.body.velocity.x != 0) {
      this.animations.play('shootrun');
    } else {
      this.frame = 'shoot';
    }
  }

  jump(){
    this.body.velocity.y = -500;
  }
}

/** Test **/
class Bullet extends Phaser.Sprite {
  constructor(game,x,y,vX,vY) {
    super(game,x,y,'bullets');
    game.add.existing(this);
    this.game.physics.enable(this);
    this.body.collideWorldBounds = false;
    this.scale.setTo(2,2);
    this.body.velocity.x  = vX;
    this.body.velocity.y = vY;
    this.frame = 0;
    this.lifespan = 400;
  }
  // methods
}

/****/
