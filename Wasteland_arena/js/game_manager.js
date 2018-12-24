let GameManager = {
 setGameStart: function(classType) {
  this.resetPlayer(classType);
  this.setPreFight();
 },
 resetPlayer: function(classType) {
  switch (classType) {
   case "Rocket":
    player = new Player(classType, 85, 3, 6, 7, 8);
    break;
   case "Castle":
    player = new Player(classType, 65, 6, 4, 7, 7);
    break;
   case "Grognak":
    player = new Player(classType, 115, 7, 9, 3, 2);
    break;
   case "Murdock":
    player = new Player(classType, 65, 8, 4, 5, 7);
    break;
   case "Ragnar":
    player = new Player(classType, 65, 6, 4, 7, 7);
    break;
   case "Pietr":
    player = new Player(classType, 105, 7, 8, 5, 4);
    break;
  }
  let getInterface = document.querySelector(".interface");
  getInterface.innerHTML = '<img src="graphics/' +
  classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType
  + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Intelligence: ' + player.intelligence +
  '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility
  + '</p><p>Speed: ' + player.speed + '</p></div>';
 },
 setPreFight: function() {
  let getHeader = document.querySelector(".header");
  let getActions = document.querySelector(".actions");
  let getArena = document.querySelector(".arena");
  getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
  getActions.innerHTML =
  '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
  getArena.style.visibility = "visible";
 },
 setFight: function() {
  let getHeader = document.querySelector(".header");
  let getActions = document.querySelector(".actions");
  let getEnemy = document.querySelector(".enemy");
// Create enemies here
  let enemy00 = new Enemy("Mutant", 125, 7, 10, 4, 3);
  let enemy01 = new Enemy("Raider", 55, 8, 3, 5, 8);
  let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
// Here for Debug purposes
//  console.log(chooseRandomEnemy);
  switch (chooseRandomEnemy) {
   case 0:
    enemy = enemy00;
    break;
   case 1:
    enemy = enemy01;
    break;
  }
  getHeader.innerHTML = '<p>Task: Choose Your move!<p/>';
  getActions.innerHTML =
  '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
  getEnemy.innerHTML = '<img src="graphics/' +
  enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType +
  '"class="img-avatar"><div><h3>' + enemy.enemyType +
  '</h3><p class="health-enemy">Health: ' + enemy.health +
  '</p><p>Intelligence: ' + enemy.intelligence + '</p><p>Strength: ' +
  enemy.strength + '</p><p>Agility: ' + enemy.agility
  + '</p><p>Speed: ' + enemy.speed + '</p></div>';

 }

}
