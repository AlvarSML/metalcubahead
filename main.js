let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render },false,false);
let playerp, e;

const GRAVEDAD = 800;

let keyW, keyA, keyS, keyD;

function preload() {
  game.load.spritesheet('enemy','assets/characters/soldier.png',32,44,12);
  game.load.spritesheet('bullets','assets/bullets.png',9,5,6);
  game.load.image('mortar','assets/mortar.png',25,10,90);
  game.load.atlas('texturas','assets/tiles/texturas.png', 'assets/tiles/texturas.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  game.load.atlas('camilo','assets/characters/camilo.png','assets/characters/camilo.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  game.load.atlas('hpbar','assets/hpbar.png','assets/hpbar.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  game.load.image('background','assets/fondo3.png');

  game.world.setBounds(0,0,4000, 600);
  game.load.spritesheet('a','assets/characters/soldier.png',1);
}


let backgrund, enemies, test, enemy, bullets, fin, ffin, eBullets, door, boss;

let bulletRate = 0;
let direccion = 1;
let txtVidas;
let txtPuntaje;
let gameEnd = false;
let bar = [];

function create() {
  game.vidas=3;
  game.puntaje=0;

  game.physics.startSystem(Phaser.Physics.ARCADE);

  background = game.add.sprite(0,0,'background').scale.setTo(2,2);

  /* Protagonista */
  playerp = new MainPlayer(game,200,400,10);
  game.camera.follow(playerp);

  /* Enemigos */
  enemies = game.add.group();
  /*Boss*/
  enemies.add(boss = new EnemyBoss(game,2400,400,20));
  spawnEnemy(600,0,3);

  enemies.add(new Enemy(game,1285,450,20));
  enemies.add(new Enemy(game,1820,465,20));

  bullets = game.add.group();
  eBullets = game.add.group();

  door = game.add.sprite(2700,410,'texturas','branch');
  door.scale.setTo(2,2);
  game.physics.enable(door);
  door.body.immovable = true;
  // ground
  createGround();

  fin = game.add.sprite(3200,450,'texturas','flag3');
  game.physics.enable(fin);
  fin.scale.setTo(3,3);

  txtVidas = game.add.text(20, 50, 'Vidas: 3', {font: '12px Arial', fill: '#fff'});
  txtVidas.fixedToCamera=true;
  txtPuntaje = game.add.text(80, 50, 'Puntaje: 0', { font: '12px Arial', fill: '#fff' });
  txtPuntaje.fixedToCamera=true;

  hpbar(playerp.health);
}

function update() {
  //colision suelo
  game.physics.arcade.collide(bullets, ground, bulletKillGround);
  game.physics.arcade.collide(eBullets, ground, bulletKillGround);
  game.physics.arcade.collide(playerp, eBullets, playerKill);
  game.physics.arcade.collide(enemies, ground);
  game.physics.arcade.collide(playerp, ground);
  game.physics.arcade.collide(playerp, door);
  game.physics.arcade.overlap(bullets, enemies, enemyKill);
  if (!gameEnd) {
   game.physics.arcade.overlap(playerp, fin, win);
  }


}

function render() {
  //game.debug.cameraInfo(game.camera, 32, 32);
  //game.debug.spriteInfo(playerp, 32, 32);
  //game.debug.body(playerp);
  //game.debug.body(enemies.getFirstExists(true));
}
