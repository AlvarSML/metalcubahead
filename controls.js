var bullet;
var bullets;
var bulletRate = 0;
var direccion = 0;

//bullets
function createBullet(){
  bullets = game.add.group();

  bullets.enableBody = true;

  bullets.physicsBodyType = Phaser.Physics.ARCADE;

  bullets.createMultiple(1000, 'bullet');
  bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
  bullets.setAll('checkWorldBounds', true);

}

function fireBullet () {

  if (game.time.now > bulletRate){
    bullet = bullets.getFirstExists(false);
    bullet.body.gravity.y = 800;
    if (bullet) {
      if(direccion == 0 || direccion == 1){
        bullet.reset(player.x + 50, player.y + 20);
        bullet.body.velocity.x= 1000;
        bulletRate = game.time.now + 100;
      }else{
        bullet.reset(player.x - 40, player.y + 20);
        bullet.body.velocity.x= -1000;
        bulletRate = game.time.now + 100;
      }
    }
  }
}

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
    fireBullet();
  }
}

//Salto
function salto(){
  if(player.body.velocity.y == 0){
    player.body.velocity.y = -500;
  }
}
