//controls
function setupControls() {
  keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
  
  keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);

  keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);

  keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
}

//movement functions

function moveX(speed,animation) {
  console.log(speed);
  player.body.velocity.x = speed;
  player.animations.play(animation);
}

// update function

function controls() {
  if (keyA.isDown) {
    moveX(-150,'left');
  } else if (keyD.isDown) {

  }

  else {
    player.animations.stop();
    player.frame = 3;
  }
}