
/** test **/
function setUpBullets(){
  bbullets = game.add.group();
  bbullets.enableBody = true;
  bbullets.createMultiple(10,'bullets');
  bbullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
  bbullets.setAll('checkWorldBounds', true);
}

function shootBullet(x,y,dx,dy){
  let bullet = bbullets.getFirstExists(false);
  if( game.time.now > bulletRate ){
    if (bullet) {
    //bullet = new Bullet(game,x,y,(dx * 1000),dy);
    bullet.frame = 0;
    bullet.scale.setTo(2,2);
    if (direccion == -1){
      bullet.anchor.setTo(.5,.5);
      bullet.angle = -180;
    }; 

    bullet.reset(player.x + 50, player.y + 20);

    bullet.body.velocity.x = 1000 * direccion;
    bullet.body.velocity.y = (player.body.velocity.y) * .5;
    
    bulletRate = game.time.now + 300;
    //bullet rate
    }
  }
}

/***/

//bullets
function createBullet(){
  bullets = game.add.group();

  bullets.enableBody = true;

  bullets.physicsBodyType = Phaser.Physics.ARCADE;

  bullets.createMultiple(1000, 'bullets');
  bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
  bullets.setAll('checkWorldBounds', true);


}
/*
/** deprecated
function fireBullet () {
  if (game.time.now > bulletRate){
    bullet = bullets.getFirstExists(false);
    //bullet.body.gravity.y = 800;
    if (bullet) {
      bullet.animations.add('shot',[0,1,2],5,true);
      if(direccion == 0 || direccion == 1){
        bullet.reset(player.x + 50, player.y + 20);
        bullet.body.velocity.x= 1000;
        bulletRate = game.time.now + 100;
        //bullet.animations.add('shot',[0,1,2],5,true);
        bullet.animations.play('shot');
        bullet.scale.setTo(2,2);
      }else{
        bullet.reset(player.x - 40, player.y + 20);
        bullet.body.velocity.x= -1000;
        bulletRate = game.time.now + 100;
      }
    }
  }
}
*/


//  Called if the bullet goes out of the screen
function resetBullet (bullet) {
  bullet.kill();
}

function playerKill(player,bullet){
  player.kill();
  bullet.kill();
}
function bulletKillGround(bullet,ground){
  bullet.kill();
}

//controls
function setupControls() {
  keyL = game.input.keyboard.addKey(Phaser.Keyboard.L);

  keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);

  keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);

  keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);

  keySpace = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

//controlls functions

function moveX(speed,animation) {
  player.body.velocity.x = speed;
  player.animations.play(animation);
}

function moveY(speed,animation) {
  player.body.velocity.y = speed;
  player.animations.play(animation);
}

// update function

function controls() {
  aDown = keyA.isDown;

  if (keyA.isDown) {
    moveX(-200,'left');
    direccion = -1;
  } else if (keyD.isDown) {
    moveX(200,'right');
    direccion = 1;
  } else {
    player.body.velocity.x = 0;
  }

  if (keyL.isDown) {
    salto();
  }

  if(!keyL.isDown && !keyS.isDown && !keyA.isDown && !keyD.isDown){
    player.animations.stop();
    player.frame = 3;
  }

  if(keySpace.isDown){
    //fireBullet();
    shootBullet(player.x,player.y);
  }
}

//Salto
function salto(){
  if(player.body.velocity.y == 0){
    player.body.velocity.y = -500;
  }
}
