function poolEnemies(){
  //WIP
}

function spawnEnemy(x,y) {
  enemies.add(new Enemy(game,x,y));
  enemy = enemies.getFirstExists(true);
}
