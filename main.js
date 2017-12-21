let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update },false,false);
let player,soldier;

const GRAVEDAD = 800;

let keyW, keyA, keyS, keyD;

function preload() {
  game.load.spritesheet('player','assets/characters/character.png',33,44,7);
  game.load.spritesheet('enemy','assets/characters/soldier.png',32,44,12);

  game.load.image('tile','assets/tiles/tile2.png');
  game.load.image('backgrund','assets/fondo2.png');
  game.load.image('bullet','assets/bullet.png');  

  game.world.setBounds(0,0,1700, 600);
}

function create() {
  game.add.sprite(0,0,'backgrund').scale.setTo(2,2);
  // main character
  player = game.add.sprite(32,game.world.height - 250, 'player');
  //player.animations.add('left', [0, 1, 2, 3], 10, true);
  //player.animations.add('right', [5, 6, 7, 8], 10, true);
  player.scale.setTo(2,2);
  player.frame = 2;

  //soldiers
  
  //createEnemies();
  //spawEnemy(100,200,'enemy');

  soldier = game.add.sprite(50,200,'enemy');
  soldier.enableBody = true;
  soldier.physicsBodyType = Phaser.Physics.ARCADE;
  soldier.body.collideWorldBounds = true;
  soldier.body.gravity.y = 100; 

  player.animations.add('left', [0, 1, 2], 10, true);
  player.animations.add('right', [4, 5, 6], 10, true);

  game.physics.arcade.enable(player);
  // ground
  createGround();

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.gravity.y = GRAVEDAD;
  player.body.collideWorldBounds = true;

  //anclamos la camara al jugador
  game.camera.follow(player);

  //bullets
  createBullet();

  //controls
  setupControls();

}

function update() {
  //colision suelo
  //**  Arreglar colisiones  **//
  game.physics.arcade.collide(soldier,ground);
  game.physics.arcade.collide(player, ground);
  game.physics.arcade.collide(bullets, ground, bulletKillGround);
  game.physics.arcade.collide(player, bullets, playerKill);
  
  //controls
  cursors = game.input.keyboard.createCursorKeys();

  controls();
  /*  Allow the player to jump if they are touching the ground.
  if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
    player.body.velocity.y = -350;
  }*/
}
