function createGround() {
  ground = game.add.group();
  ground.enableBody = true;
  let gTile;

  for (let x = 0; x < game.world.width;x+=50) {
    gTile = ground.create(x,game.world.height - 50,'texturas','ground');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;
  }

  /* Maderas */
  gTile = ground.create(380,400,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(430,400,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(480,400,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  /* Plataformas */
  gTile = ground.create(600,250,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(650,250,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(700,250,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(750,250,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(750,400,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(750,450,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(750,500,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(800,425,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(850,425,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(900,425,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(900,375,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(900,325,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(900,275,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  /**
   * Fase dos
   */

  gTile = ground.create(1200,500,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1200,450,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1200,400,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1200,350,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1200,300,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1150,400,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1450,200,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1500,200,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1675,100,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1725,100,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1775,100,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1750,425,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1750,400,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  gTile = ground.create(1750,350,'texturas','metal');
  gTile.scale.setTo(2,2);
  gTile.body.immovable = true;

  /**
   * Fase tres
   */

   gTile = ground.create(2200,500,'texturas','metal');
   gTile.scale.setTo(2,2);
   gTile.body.immovable = true;

   gTile = ground.create(2200,450,'texturas','metal');
   gTile.scale.setTo(2,2);
   gTile.body.immovable = true;

   gTile = ground.create(2250,450,'texturas','metal');
   gTile.scale.setTo(2,2);
   gTile.body.immovable = true;

   gTile = ground.create(2300,450,'texturas','metal');
   gTile.scale.setTo(2,2);
   gTile.body.immovable = true;

   gTile = ground.create(2350,450,'texturas','metal');
   gTile.scale.setTo(2,2);
   gTile.body.immovable = true;

   gTile = ground.create(2400,450,'texturas','metal');
   gTile.scale.setTo(2,2);
   gTile.body.immovable = true;

   gTile = ground.create(2450,450,'texturas','metal');
   gTile.scale.setTo(2,2);
   gTile.body.immovable = true;

   gTile = ground.create(2500,450,'texturas','metal');
   gTile.scale.setTo(2,2);
   gTile.body.immovable = true;

   gTile = ground.create(2550,450,'texturas','metal');
   gTile.scale.setTo(2,2);
   gTile.body.immovable = true;

   gTile = ground.create(2550,500,'texturas','metal');
   gTile.scale.setTo(2,2);
   gTile.body.immovable = true;


   /**
    * Fase final
    */

    gTile = ground.create(2850,500,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2850,450,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2850,400,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2850,350,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2850,300,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2850,250,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2850,200,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2850,150,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2800,400,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2800,200,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2600,0,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2600,50,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2600,100,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2600,150,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2600,200,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2600,250,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

    gTile = ground.create(2600,300,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;


    gTile = ground.create(2650,250,'texturas','metal');
    gTile.scale.setTo(2,2);
    gTile.body.immovable = true;

}
