let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update },false,false);
let player, e;

const GRAVEDAD = 800;

let keyW, keyA, keyS, keyD;

function preload() {
  game.load.spritesheet('player','assets/characters/character.png',33,44,7);
  game.load.spritesheet('enemy','assets/characters/soldier.png',32,44,7);
  game.load.atlas('texturas','assets/tiles/spritesheet.png', 'assets/tiles/sprites2.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

  game.load.image('backgrund','assets/fondo3.png');
  game.load.image('bullet','assets/bullet.png');

  game.world.setBounds(0,0,5000, 600);
}

let soldiers;
let backgrund;

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  background = game.add.sprite(0,0,'backgrund').scale.setTo(2,2);

  /* Protagonista */
  player = game.add.sprite(32,game.world.height - 250, 'player');
  player.physicsBodyType = Phaser.Physics.ARCADE;
  game.physics.arcade.enable(player);
  player.body.gravity.y = GRAVEDAD;
  player.body.collideWorldBounds = true;
  player.scale.setTo(2,2);
  player.frame = 2;

  player.animations.add('left', [0, 1, 2], 10, true);
  player.animations.add('right', [4, 5, 6], 10, true);

  /* Enemigos */
  configEnemy()
  ///spawEnemy(0,0,'enemy');
  ///spawEnemy(70,0,'enemy');
  spawn2();

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
  
  game.physics.arcade.collide(player, ground);
  game.physics.arcade.collide(bullets, ground, bulletKillGround);
  game.physics.arcade.collide(player, bullets, playerKill);
  game.physics.arcade.collide(soldiers, ground);
  //controls
  cursors = game.input.keyboard.createCursorKeys();

  controls();
}
