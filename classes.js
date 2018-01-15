let contBalas=60,algo=0,mortar;
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

  deleteEntity(){
    //mas o menos borra el bulletRate para que no se ejecute la función shoot
    console.log(delete this.bulletRate);
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
class EnemyBoss extends Entity{
  //posicion 2400x 400y
  constructor(game,x,y,hp){
    super(game,x,y,hp,'enemy');
    this.alive = true;
    this.frame = 2;
    this.contBalas = 50;
    this.contSalto = 50;
    this.movimiento = "left";
    this.ataque = true;
    this.ataqueTiming=0;
    this.mortarP;
    //this.body.immovable = true;
    /*animaciones*/
    this.animations.add('rigth',[9,10,11],5,true);
    this.animations.add('left',[6,7,8],5,true);
    this.animations.add('shootl',[0,1,2],7,true);
    this.animations.add('shootr',[3,4,5],5,true);
    }
    shoot(){
      if (this.bulletRate < game.time.now) {
        if(this.contBalas<31 && this.contBalas>25){
          this.contBalas--;
          let bullet = new Bullet(game,this.x - (50 * this.direction * -1),this.y + 10,500 * this.direction,this.body.velocity.y * .5);


        if (this.direction == -1) {
          bullet.scale.x = -2;
        }

        eBullets.add(bullet);

        console.log('PUM!');
        this.bulletRate = game.time.now + 50;
        }
        else if(this.contBalas==0){
          this.contBalas=30;
        }else{
          this.contBalas--;
        }
      }
    }

    shootNade(){

        let mortar = new Mortar(game,this.x,this.y - 80,50 * this.direction,-800);
        mortar.setLifespan(5000);
        mortar.body.gravity.y = 1000;
        eBullets.add(mortar);
        //this.bulletRate = game.time.now + 1000;
        mortar.angle-=90;

      return mortar;
    }

    ataqueAereo(){
      if(this.ataqueTiming<15){
          let mortar = new Mortar(game,2100+40*this.ataqueTiming,50,0,400);
          mortar.setLifespan(3000);
          mortar.body.gravity.y = 1000;
          eBullets.add(mortar);
          this.ataqueTiming++;
          this.ataqueAereo();
          mortar.angle +=90;
      }
    }

    update() {


      if(this.health==10 && this.ataque==true){
          this.ataqueAereo();
          this.ataque=false;
      }

      if ((this.x - playerp.x) > 0 && (this.x - playerp.x) < 400 && ((this.y - playerp.y)>-100 && ((this.y - playerp.y)<100)) && this.alive) {
        // si el jugador esta a la izquierda
        // y en un rango de 50 arriba o abajo
        // dispara a la izquierda
        this.scale.x = 2;
        this.direction = -1;
        this.shoot();
        this.animations.play('shootl');
      } else if ((this.x - playerp.x) < 0 && (playerp.x - this.x) < 400 && ((this.y - playerp.y)>-100 && ((this.y - playerp.y)<100)) && this.alive) {
        // si el jugador esta detras
        this.direction = 1;
        this.scale.x = -2;
        this.animations.stop();
        this.shoot();
      } else {
        //this.body.velocity.x = 0;
        //this.animations.stop();
      }

      if(/*this.x-2400 <=0 && this.x-2400>-200*/this.movimiento=="left"){
        this.direction = -1;
        this.body.velocity.x=this.direction*200;
        if(this.x<=2150){
          this.movimiento="right";
        }
      }else{
        this.direction = 1;
        this.body.velocity.x=this.direction*200;
        if(this.x>=2550){
          this.movimiento="left";
        }
      }

      if(this.body.velocity.y == 0){
        if(this.contSalto==50){
          this.body.velocity.y = -400;
          this.contSalto--;
          this.shootNade();
        }else if(this.contSalto==35){
          this.contSalto--;
          this.shootNade();
        }else if(this.contSalto==15){
          this.contSalto--;
          this.shootNade();
        }else if(this.contSalto==0){
          this.contSalto=50;
        }else{
          this.contSalto--;
        }
      }

    //end Update
    }


    stdReset(x, y) {
      this.reset(x, y);
    }

    damage(hp) {
      this.health -= hp;
    }
  }



class Enemy extends Entity {
  constructor(game,x,y,hp){
    super(game,x,y,hp,'enemy');
    this.alive = true;
    this.frame = 2;
    this.contBalas=contBalas;
    //this.body.immovable = true;
    /*animaciones*/
    this.animations.add('rigth',[9,10,11],5,true);
    this.animations.add('left',[6,7,8],5,true);
    this.animations.add('shootl',[0,1,2],7,true);
    this.animations.add('shootr',[3,4,5],5,true);
  }

  shoot(y){
    if (this.bulletRate < game.time.now) {
      if(this.contBalas<31 && this.contBalas>27){
        this.contBalas--;
        let bullet = new Bullet(game,this.x - (50 * this.direction * -1),this.y + 10,500 * this.direction,y);


      if (this.direction == -1) {
        bullet.scale.x = -2;
      }

      eBullets.add(bullet);

      console.log('PUM!');
      this.bulletRate = game.time.now + 50;
      }
      else if(this.contBalas==0){
        this.contBalas=30;
      }else{
        this.contBalas--;
      }
    }
  }

  update() {

   if((this.x - playerp.x) > 0 && (this.x - playerp.x) > 400 && this.contPasosEnemigo==0){
      this.contPasosEnemigo++;
      this.direction = -1;
      this.body.velocity.x = 10 * this.direction;
    }
    else if ((this.x - playerp.x) > 0 && (this.x - playerp.x) < 400 && ((this.y - playerp.y)>-100 && ((this.y - playerp.y)<100)) && this.alive) {
      // si el jugador esta a la izquierda
      // y en el mismo nivel
      // dispara a la izquierda
      this.scale.x = 2;
      this.direction = -1;
      /*if((this.y - playerp.y)>-100 && (this.y - playerp.y)<-50){
        this.shoot(200);
      }else if((this.y - playerp.y)<100 && (this.y - playerp.y)>50){
        this.shoot(-200);
      }else{*/
        this.shoot(0);
      //}
      this.animations.play('shootl');
    } else if ((this.x - playerp.x) < 0 && (playerp.x - this.x) < 400 && ((this.y - playerp.y)>-100 && ((this.y - playerp.y)<100)) && this.alive) {
      // si el jugador esta detras
      this.direction = 1;
      this.scale.x = -2;
      this.animations.stop();
      /*if((this.y - playerp.y)>-100 && (this.y - playerp.y)<-50){
        this.shoot(200);
      }else if((this.y - playerp.y)<100 && (this.y - playerp.y)>50){
        this.shoot(-200);
      }else{*/
        this.shoot(0);
      //}
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
      this.body.velocity.x = 0;
      this.frame = 5
      playerp.body.setSize(15, 10, 10, 25);
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
      playerp.body.setSize(15, 37, 10, 4);
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
    } else if(this.keyS.isDown){
      this.frame = 6;
    } else {
      this.frame = 3;
    }
  }

  jump(){
    this.body.velocity.y = -500;
  }
}


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
    this.lifespan = 1000;
  }
  // methods
  setLifespan(lifespan){
    this.lifespan=lifespan;
  }
}

class Mortar extends Phaser.Sprite {
  constructor(game,x,y,vX,vY) {
    super(game,x,y,'mortar');
    game.add.existing(this);
    this.game.physics.enable(this);
    this.body.collideWorldBounds = false;
    this.scale.setTo(2,2);
    this.body.velocity.x  = vX;
    this.body.velocity.y = vY;
    this.frame = 0;
    this.lifespan = 1000;
  }
  // methods
  setLifespan(lifespan){
    this.lifespan=lifespan;
  }

  update(){
    if(this.body.velocity.y>=0 && (this.angle!=90 || this.angle!=-90)){
      this.angle+=3*this.body.velocity.x/50;
    }
    else if(this.body.velocity.y>=-400 && (this.angle!=90 || this.angle!=-90)){
      this.angle+=1*this.body.velocity.x/50;
    }
  }

}
