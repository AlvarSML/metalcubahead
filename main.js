let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render },false,false);
let playerp, e;

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

  game.world.setBounds(0,0,3000, 600);
}

let backgrund, enemies, test;
let bulletRate = 0;
let direccion = 1;

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  background = game.add.sprite(0,0,'backgrund').scale.setTo(2,2);

  /* Protagonista */
  playerp = new MainPlayer(game,200,200,10);
  game.camera.follow(playerp,Phaser.Camera.FOLLOW_PLATFORMER);

  /* Enemigos */
  //enemies = game.add.group();
  //spawnEnemy(600,0);

  // ground
  createGround();

  //anclamos la camara al jugador
  

  //controls
  //setupControls();
  setUpBullets();


}

function update() {
  //colision suelo
  //**  Arreglar colisiones  **//
  
  //game.physics.arcade.collide(bullets, ground, bulletKillGround);
  //game.physics.arcade.collide(player, bullets, playerKill);
  game.physics.arcade.collide(enemies, ground);
  game.physics.arcade.collide(playerp, ground);
  //game.physics.arcade.collide(Bullet, ground);
  //controls
  //cursors = game.input.keyboard.createCursorKeys();

  //console.log(player.x);

}

function render() {
  //game.debug.cameraInfo(game.camera, 32, 32);
  game.debug.spriteInfo(playerp, 32, 32);
}