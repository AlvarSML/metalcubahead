function createTile(x,y,material,side){
  //side = l, r, m (left-right-middle)
  let sp = material + side;
  let tile = ground.create(x,y,'texturas',sp);
  if (material != 'branch') {
    tile.body.checkCollision.down = false;
  }  
  tile.scale.setTo(2,2);
  tile.body.immovable = true;
}

function createGround() {
  ground = game.add.group();
  ground.enableBody = true;
  let gTile;

  /* Maderas */
  createTile(380,400,"wood","l");
  createTile(430,400,'wood','m');
  createTile(480,400,'wood','r');

  /* Plataformas */

  createTile(600,250,'wood','l');
  createTile(650,250,'wood','m');
  createTile(700,250,'wood','m');
  createTile(750,250,'wood','r');

  createTile(750,410,'branch','');

  createTile(800,425,'wood','m');
  createTile(850,425,'wood','m');

  createTile(900,300,'branch','');
  createTile(900,440,'log','m');
  createTile(900,480,'log','m');
  createTile(900,520,'log','m');

  createTile(940,420,'wood','r');


  /**
  * Fase dos
  */
  createTile(1200,300,'branch','');
  createTile(1200,440,'log','m');
  createTile(1200,480,'log','m');
  createTile(1200,520,'log','m');

  createTile(1160,320,'wood','l');

  createTile(1470,200,'wood','l');
  createTile(1520,200,'wood','r');
 
  createTile(1695,100,'wood','l');
  createTile(1745,100,'wood','m');
  createTile(1795,100,'wood','r');


  //se tienen que crear de arriba a abajo
  createTile(1900,320,'branch','');
  createTile(1900,429,'branch','');
  createTile(1860,400,'wood','l');
  /**
  * Fase tres
  */

  createTile(2200,505,'beam','m');
  createTile(2160,480,'metal','l');
  createTile(2210,480,'metal','m');
  createTile(2260,480,'metal','m');
  createTile(2310,480,'metal','m');
  createTile(2360,480,'metal','m');
  createTile(2410,480,'metal','m');
  createTile(2460,480,'metal','m');
  createTile(2510,480,'metal','r');
  createTile(2480,505,'beam','m');

  /**
  * Fase final
  */

  createTile(2700,0,'branch','');
  createTile(2700,135,'branch','');
  createTile(2700,270,'branch','');


  createTile(2960,410,'wood','l')
  createTile(2750,310,'wood','r');
  createTile(2960,210,'wood','l');

  
  createTile(3000,135,'branch','');
  createTile(3000,270,'branch','');
  createTile(3000,410,'branch','');

  fin = game.add.sprite(3200,410,'texturas','flag3');
  fin.scale.setTo(3,3);

  for (let x = 0; x < game.world.width;x+=50) {
    gTile = ground.create(x,game.world.height - 50,'texturas','ground');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;
  }

}
