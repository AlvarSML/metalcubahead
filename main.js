let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update },false,false);
let player;
const GRAVEDAD = 800;

function preload() {
  game.load.spritesheet('player','assets/characters/character.png',33,44,7);
  game.load.image('tile','assets/tiles/tile2.png');
}

function create() {
  // main character
  player = game.add.sprite(32,game.world.height - 250, 'player');
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);
  player.scale.setTo(4,4);
  player.frame = 2;

  player.animations.add('left', [0, 1, 2], 10, true);
  player.animations.add('right', [4, 5, 6], 10, true);

  game.physics.arcade.enable(player);
  // ground
  createGround();


  //  Player physics properties. Give the little guy a slight bounce.
  player.body.gravity.y = GRAVEDAD;
  player.body.collideWorldBounds = true;
}

function update() {
  //controls
  cursors = game.input.keyboard.createCursorKeys();

  //  Reset the players velocity (movement)
  player.body.velocity.x = 0;

  if (cursors.left.isDown)
  {
      //  Move to the left
      player.body.velocity.x = -150;

      player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
      //  Move to the right
      player.body.velocity.x = 150;

      player.animations.play('right');
    }
    else
    {
      //  Stand still
      player.animations.stop();

      player.frame = 3;
    }

  //  Allow the player to jump if they are touching the ground.
  if (cursors.up.isDown && player.body.touching.down && hitPlatform)
  {
    player.body.velocity.y = -350;
  }
}