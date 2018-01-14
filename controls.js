function hpbar(hp){
  position = 23;
  color = 0;
  
  bar[0] = game.add.sprite(20,20,'hpbar');
  bar[0].frame = 0 + color;
  bar[0].scale.setTo(3,3);
  bar[0].fixedToCamera =true;

  for (i = 1; i < 9; i++) {
    bar[i] = game.add.sprite(position+=12,20,'hpbar');
    if (i > hp){
      color = 9;
    }
    bar[i].frame = 1 + color;
    bar[i].scale.setTo(3,3);
    bar[i].fixedToCamera =true;
  }

  bar[9] = game.add.sprite(131,20,'hpbar');
  bar[9].frame = 2;
  bar[9].scale.setTo(3,3);
  bar[9].fixedToCamera =true;

}

function rHPBar(hp){

  if (hp < 3) {
    color = 6;
  } else if (hp < 5) {
    color = 3;
  } else {
    color = 0;
  }

  bar[0].frame = 0 + color;

  for (let i = 1; i < 9; i++) {
    if(i > hp) {
      color = 9;
    }
    bar[i].frame = color + 1;
  }

  bar[9].frame = 11;
}

/** test **/
function setUpBullets(){
  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.createMultiple(10,'bullets');
  bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet, this);
  bullets.setAll('checkWorldBounds', true);
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
    if(game.vidas>0){
      playerp = new MainPlayer(game,200,200,10);
      game.camera.follow(playerp);
      hpbar(playerp);
      bar[9].frame = 2;
    }
    txtVidas.setText('Vidas: '+game.vidas);
  }

  if(game.vidas == 0){
    playerp.kill();
    //gTile.kill();
    txt1=game.add.text(200, 250, 'Perdiste', {font:'80px Arial', fill: '#fff'});
    txt1.fixedToCamera=true;
    txt2=game.add.text(200, 350, 'Nivel: '+game.nivel, {font:'30px Arial', fill: '#fff'});
    txt2.fixedToCamera=true;
    txt3=game.add.text(200, 400, 'Puntaje: '+game.puntaje, {font:'30px Arial', fill: '#fff'});
    txt3.fixedToCamera=true;
  }

  if (playerp.health < 10) {
    rHPBar(playerp.health);
  }
  

}

function bulletKillGround(bullet,ground){
  bullet.kill();
}

function enemyKill(bullet,ene){
  bullet.kill();
  ene.health -= 1;
  if (ene.health <= 0) {
    ene.kill();
    ene.alive = false;
    game.puntaje+=100;
    txtPuntaje.setText('Puntaje: '+game.puntaje);
  }
  console.log(ene.health);
}

function win(player,fin) {
  console.log('fin');
  txt1=game.add.text(200, 250, 'Victoria!', {font:'80px Arial', fill: '#fff'});
  txt1.fixedToCamera=true;
  txt2=game.add.text(200, 350, 'Nivel: '+game.nivel, {font:'30px Arial', fill: '#fff'});
  txt2.fixedToCamera=true;
  txt3=game.add.text(200, 400, 'Puntaje: '+game.puntaje, {font:'30px Arial', fill: '#fff'});
  txt3.fixedToCamera=true;
  gameEnd = true;

  game.camera.follow(fin);
  player.body.velocity.x = 300;
  playerp.update = f => {};
}
