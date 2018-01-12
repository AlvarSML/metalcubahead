let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render },false,false);
let playerp, e;

const GRAVEDAD = 800;

let keyW, keyA, keyS, keyD;

function preload() {
  game.load.spritesheet('enemy','assets/characters/soldier.png',32,44,12);
  game.load.spritesheet('bullets','assets/bullets.png',9,5,6);
  game.load.atlas('texturas','assets/tiles/texturas.png', 'assets/tiles/texturas.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  game.load.atlas('camilo','assets/characters/camilo.png','assets/characters/camilo.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  game.load.image('background','assets/fondo3.png');

  game.world.setBounds(0,0,4000, 600);
  game.load.spritesheet('a','assets/characters/soldier.png',1);
}

let backgrund, enemies, test, enemy, bullets, fin;
let bulletRate = 0;
let direccion = 1;
let txtVidas;
let txtPuntaje;

function create() {
  game.vidas=3;
  game.puntaje=0;

  game.physics.startSystem(Phaser.Physics.ARCADE);
  
  background = game.add.sprite(0,0,'background').scale.setTo(2,2);

  /* Protagonista */
  playerp = new MainPlayer(game,3000,200,10);
  game.camera.follow(playerp);

  /* Enemigos */
  enemies = game.add.group();
  /*Boss*/
  enemies.add(new EnemyBoss(game,2400,400,20));
  spawnEnemy(600,0,3);



  bullets = game.add.group();
  // ground
  createGround();

  fin = game.add.sprite(3200,430,'texturas','flag3');
  game.physics.enable(fin);
  fin.scale.setTo(3,3);

  txtVidas = game.add.text(20, 20, 'Vidas: 3', {font: '24px Arial', fill: '#000'});
  txtVidas.fixedToCamera=true;
  txtPuntaje = game.add.text(120, 20, 'Puntaje: 0', { font: '24px Arial', fill: '#000' });
  txtPuntaje.fixedToCamera=true;
}

function update() {
  //colision suelo
  //**  Arreglar colisiones  **//

  game.physics.arcade.collide(bullets, ground, bulletKillGround);
  game.physics.arcade.collide(playerp, bullets, playerKill);
  game.physics.arcade.collide(enemies, ground);
  game.physics.arcade.collide(playerp, ground);
  game.physics.arcade.overlap(bullets, enemies, enemyKill);
  game.physics.arcade.collide(playerp, fin, win);

}

function render() {
  //game.debug.cameraInfo(game.camera, 32, 32);
  //game.debug.spriteInfo(playerp, 32, 32);
  game.debug.body(playerp);
  //game.debug.body(enemies.getFirstExists(true));
}
