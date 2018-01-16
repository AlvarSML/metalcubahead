class Menu extends Phaser.State {
  preload(){
    game.load.image('screen','assets/fondomenu.png');
    game.load.image('button','assets/botoninicio.png');
    game.load.image('bar','assets/load.png');
  }

  create(){
    game.add.sprite(0,0,'screen');
    game.add.sprite(300,500,'button');
    this.button = game.add.button(300,500,'button',this.onClick);
    console.log("creado!")
  }

  update(){

  }

  onClick(){
    game.state.start('load');
  }
}

class LoadScreen extends Phaser.State {
  preload() {
     this.add.sprite(0,0,'screen'); 

    this.preloadbar =  this.add.sprite(300,500,'bar');
    this.load.setPreloadSprite(this.preloadbar);

    game.load.image('screen','assets/fondomenu.png');
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

  create() {
    game.add.sprite(0,0,'screen');
    game.state.start('game');
  }

  update() {
    
  }
}

