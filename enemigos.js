function spawnEnemy(x,y,hp) {
  enemies.add(new Enemy(game,x,y,hp));
  enemy = enemies.getFirstExists(true);
}
