let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update },false,false);
let player;
let soldiers, soldier;

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
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.add.sprite(0,0,'backgrund').scale.setTo(2,2);

  /* Protagonista */
  player = game.add.sprite(32,game.world.height - 250, 'player');
  player.physicsBodyType = Phaser.Physics.ARCADE;
  game.physics.arcade.enable(player);
  player.body.gravity.y = GRAVEDAD;
  player.body.collideWorldBounds = true;
  player.scale.setTo(2,2);
  player.frame = 2;

  /* Enemigos */


  /*
    soldier = game.add.sprite(50,200,'enemy');
    game.physics.arcade.enable(soldier);
    soldier.body.gravity.y = GRAVEDAD;
    soldier.physicsBodyType = Phaser.Physics.ARCADE;
    soldier.body.collideWorldBounds = true;
    soldier.scale.setTo(2,2);
    */

  player.animations.add('left', [0, 1, 2], 10, true);
  player.animations.add('right', [4, 5, 6], 10, true);

  soldiers = game.add.group(); 
  soldiers.enableBody = true;
  soldiers.scale.setTo(2,2);
  game.physics.enable(soldiers,Phaser.Physics.ARCADE);

  let soldier = soldiers.create(0,0,'enemy');
  soldier.frame = 0;
  soldier.body.collideWorldBounds = true;
  soldier.body.gravity.y = 50;
  //spawEnemy(32,0,'enemy');

  // ground
  createGround();

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
  game.physics.arcade.collide(soldiers ,ground);
  game.physics.arcade.collide(soldiers ,player);
  game.physics.arcade.collide(player, ground);
  game.physics.arcade.collide(bullets, ground, bulletKillGround);
  game.physics.arcade.collide(player, bullets, playerKill);
  
  //controls
  cursors = game.input.keyboard.createCursorKeys();

  controls();
}
