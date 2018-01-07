
/** test **/
function setUpBullets(){
  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.createMultiple(10,'bullets');
  bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
  bullets.setAll('checkWorldBounds', true);
}

//borra a player por alguna razon
function shootBullet(x,y,dx,dy){
  let bullet = bullets.getFirstExists(false);
  if( game.time.now > bulletRate ){
    if (bullet) {
      bullet.anchor.setTo(.5,.5);
      bullet.frame = 0;
      bullet.scale.setTo(2,2);
      if (direccion == -1){
        bullet.scale.x = -2;
      }; 

    let x,y;

    x = (player.x + 20) * direccion;
    y = (player.y + 20) * direccion;
    bullet.reset(x,y);

    bullet.body.velocity.x = 1000 * direccion;
    bullet.body.velocity.y = (player.body.velocity.y) * .5;
    
    bulletRate = game.time.now + 300;
    //bullet rate
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