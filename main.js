let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update },false,false);
let player, e;

const GRAVEDAD = 800;

let keyW, keyA, keyS, keyD;

function preload() {
  game.load.spritesheet('player','assets/characters/character.png',33,44,7);
  game.load.spritesheet('enemy','assets/characters/soldier.png',32,44,12);
  game.load.spritesheet('bullets','assets/bullets.png',9,5,6);
  game.load.atlas('texturas','assets/tiles/spritesheet.png', 'assets/tiles/sprites2.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  game.load.atlas('camilo','assets/characters/camilo.png','assets/characters/camilo.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  game.load.image('backgrund','assets/fondo3.png');
  game.load.image('bullet','assets/bullet.png');

  game.world.setBounds(0,0,5000, 600);
}

let soldiers,backgrund, enemies;
let bullet, bullets, bbullets;
let bulletRate = 0;
let direccion = 1;

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  background = game.add.sprite(0,0,'backgrund').scale.setTo(2,2);

  /* Protagonista */
  player = new Player(game,200,200,10);

  /* Enemigos */
  enemies = game.add.group();
  spawnEnemy(600,0);

  // ground
  createGround();

  //anclamos la camara al jugador
  game.camera.follow(player);

  //controls
  //setupControls();

  setUpBullets();


}

function update() {
  //colision suelo
  //**  Arreglar colisiones  **//
  
  game.physics.arcade.collide(bullets, ground, bulletKillGround);
  game.physics.arcade.collide(player, bullets, playerKill);
  game.physics.arcade.collide(enemies, ground);
  game.physics.arcade.collide(player, ground);
  //game.physics.arcade.collide(Bullet, ground);
  //controls
  cursors = game.input.keyboard.createCursorKeys();

}