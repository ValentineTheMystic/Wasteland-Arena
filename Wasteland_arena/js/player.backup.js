let player;

function Player(classType, health, agility, strength, intelligence, speed) {
 this.classType = classType;
 this.health = health;
 this.agility = agility;
 this.strength = strength;
 this.intelligence = intelligence;
 this.speed = speed;
}

let PlayerMoves = {
 calcAttack: function() {
 let playerAttack = function() {
 let calcBaseDamage;
 calcBaseDamage = player.strength * player.agility / 10;
 let offsetDamage = (Math.floor(Math.random() * Math.floor(10)) / 10);
 let calcOutputDamage = calcBaseDamage + offsetDamage;
// Number of hits
 let numberOfHits = (Math.floor(player.intelligence * player.speed / 10));
 let attackValues = [calcOutputDamage, numberOfHits];
 return attackValues;
 }

// Enemy attacks!
  let enemyAttack = function() {
   let calcBaseDamage;
    calcBaseDamage = enemy.strength * enemy.agility / 10;
   let offsetDamage = (Math.floor(Math.random() * Math.floor(10)) / 10);
   let calcOutputDamage = calcBaseDamage + offsetDamage;
// Number of hits
let numberOfHits = (Math.floor(enemy.intelligence * enemy.speed / 10));
   let attackValues = [calcOutputDamage, numberOfHits];
   return attackValues;
 }
// Get the player/enemy health to change later
 let getPlayerHealth = document.querySelector(".health-player");
 let getEnemyHealth = document.querySelector(".health-enemy");
//This is what happens if the player is faster
 if(player.speed >= enemy.speed) {
  let playerAttackValues = playerAttack();
  while(playerAttackValues[1] > 0) {
  let playerRoll = (Math.random() * 10) * 10;
  let playerChance = player.speed * player.agility + 35;
  if(playerRoll < playerChance) {
   let totalDamage = playerAttackValues[0];
   enemy.health = enemy.health - totalDamage;
   alert("You hit " + totalDamage.toFixed(2) + " damage");
  } else {
   alert("Your attack missed!");
  }
  playerAttackValues[1]--;
  }
  if(enemy.health <= 0) {
   alert("You win! Refresh browser to play again.");
   let playerHealth = player.health;
   getPlayerHealth.innerHTML = 'Health: ' + playerHealth.toFixed(2);
   getEnemyHealth.innerHTML = 'Health: 0';
  } else {
   let enemyHealth = enemy.health;
   getEnemyHealth.innerHTML = 'Health: ' + enemyHealth.toFixed(2);
// Enemy attacks
   let enemyAttackValues = enemyAttack();
   while(enemyAttackValues[1] > 0) {
    let enemyRoll = (Math.random() * 10) * 10;
    let enemyChance = enemy.speed * enemy.agility + 35;
    if(enemyRoll < enemyChance) {
     let totalDamage = enemyAttackValues[0];
     player.health = player.health - totalDamage;
     alert("Enemy hit " + totalDamage.toFixed(2) + " damage ");
    } else {
     alert("Enemy attack missed!");
    }
    enemyAttackValues[1]--;
   }
   if(player.health <= 0) {
    alert("You lose! Refresh browser to play again.");
    getPlayerHealth.innerHTML = 'Health: 0';
    let enemyHealth = enemy.health;
    getEnemyHealth.innerHTML = 'Health: ' + enemyHealth.toFixed(2);
   } else {
    let playerHealth = player.health;
    getPlayerHealth.innerHTML = 'Health: ' + playerHealth.toFixed(2);
   }
  }
// This is what happens if the enemy is faster
 } else if(enemy.speed > player.speed) {
  let enemyAttackValues = enemyAttack();
  while(enemyAttackValues[1] > 0) {
   let enemyRoll = (Math.random() * 10) * 10;
   let enemyChance = enemy.speed * enemy.agility + 35;
   if(enemyRoll < enemyChance) {
    let totalDamage = enemyAttackValues[0];
    player.health = player.health - totalDamage;
    alert("Enemy hit " + totalDamage.toFixed(2) + " damage ");
   } else {
    alert("Enemy attack missed!");
   }
   enemyAttackValues[1]--;
  }
  if(player.health <= 0) {
   alert("You lose! Refresh browser to play again.");
   let enemyHealth = enemy.health;
   getEnemyHealth.innerHTML = 'Health: ' + enemyHealth.toFixed(2);
   getPlayerHealth.innerHTML = 'Health: 0';
  } else {
   let playerHealth = player.health;
   getPlayerHealth.innerHTML = 'Health: ' + playerHealth.toFixed(2);
// Player attacks
   let playerAttackValues = playerAttack();
   while(playerAttackValues[1] > 0) {
    let playerRoll = (Math.random() * 10) * 10;
    let playerChance = player.speed * player.agility + 35;
    if(playerRoll < playerChance) {
     let totalDamage = playerAttackValues[0];
     enemy.health = enemy.health - totalDamage;
     alert("You hit " + totalDamage.toFixed(2) + " damage ");
    } else {
    alert("Your attack missed!");
    }
    playerAttackValues[1]--;
   }
   if(enemy.health <= 0) {
    alert("You win! Refresh browser to play again.");
    getEnemyHealth.innerHTML = 'Health: 0';
    let playerHealth = player.health;
    getPlayerHealth.innerHTML = 'Health: ' + playerHealth.toFixed(2);
   } else {
    let enemyHealth = enemy.health
    getEnemyHealth.innerHTML = 'Health: ' + enemyHealth.toFixed(2);
   }
  }
} 
}
}

