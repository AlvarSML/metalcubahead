
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
  bullet.kill();
  player.health-=1;

  if(player.health<0){
    player.kill();
    player.deleteEntity();
    game.vidas -= 1;
    playerp = new MainPlayer(game,200,200,10);
    game.camera.follow(playerp);
    txtVidas.setText('Vidas: '+game.vidas);
  }

  if(game.vidas == 0){
     playerp.kill();
     //gTile.kill();
     game.add.text(200, 250, 'Perdiste', {font:'80px Arial', fill: '#000'});
     game.add.text(200, 350, 'Nivel: '+game.nivel, {font:'30px Arial', fill: '#000'});
     game.add.text(200, 400, 'Puntaje: '+game.puntaje, {font:'30px Arial', fill: '#000'});
  }
}

function bulletKillGround(bullet,ground){
  bullet.kill();
}

function enemyKill(bullet,ene){
  bullet.kill();
  ene.health -= 1;
  bullet.kill();
  if (ene.health <= 0) {
    ene.kill();
    ene.alive = false;
    game.puntaje+=100;
    txtPuntaje.setText('Puntaje: '+game.puntaje);
  }
  console.log(ene.health);
}

function perderVida(){

}
