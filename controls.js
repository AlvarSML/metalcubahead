//controls
function setupControls() {
  keyL = game.input.keyboard.addKey(Phaser.Keyboard.L);

  keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);

  keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);

  keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
}

//movement functions

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
    moveX(-150,'left');
  } else if (keyD.isDown) {
    moveX(150,'right');
  }
  else {
    //player.animations.stop();
    //player.frame = 3;
    player.body.velocity.x = 0;
  }

  if (keyL.isDown) {
    salto();
  } else if (keyS.isDown) {
    moveY(150,'down');
  }

  if(!keyL.isDown && !keyS.isDown && !keyA.isDown && !keyD.isDown){
    player.animations.stop();
    player.frame = 3;
  }
}


//Salto
function salto(){
  if(player.body.velocity.y == 0){
    player.body.velocity.y = -500;
  }
}
