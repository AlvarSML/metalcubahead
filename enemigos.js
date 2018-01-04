function poolEnemies(){
  //WIP
}

function spawnEnemy(x,y) {
  enemies.add(new Enemy(game,x,y));
  ene = enemies.getFirstExists(true);
}
