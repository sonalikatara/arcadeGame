"use strict";
var keysDown = {};

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.speed = 210; // movement in pixel per second
    this.x = 0;
    this.y = 0;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if (this.x > 505){
        this.x =  Math.random() * 430;
        this.y = (Math.random() * 120 ) + (Math.random() * 150);
    };

    // Are they touching?

    if (
            player.x <= (this.x + 42)
            && this.x <= (player.x + 42)
            && player.y <= (this.y + 42)
            && this.y <= (player.y + 42)
    ) {
            // yes they are touching so the player looses a life
            // and the player is brought back to start
            --player.livesLeft;
            //reset();
             player.x = 200;
             player.y = 330 + Math.random(150);
    };

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.speed = 200; // movement in pixel per second
    this.x = 200;
    this.y = 330;
    // The image/sprite for our player, this uses
    // a helper in resources.js to easily load images
    this.sprite = 'images/char-cat-girl.png';
    this.livesLeft = 15; // A player gets 15 lives in a game
    this.gems = 0;       // The player collects a gem each time he reaches water
};

Player.prototype.update = function(dt) {

   this.handleInput(dt);

   // Prevent the player from falling off the canvas
   // canvas width is 505 and height is 608 but 456 looks
   // like the maximum value for player.Y

   if(this.x > 420){this.x = 420;}; // player falling off the screen
   if(this.x < 1){this.x = 1;};
   if(this.y > 456){this.y = 455;}; // player reached the bottom of the screen
   if(this.y < 1){    // Player has reached water
       this.y = 330; // Player is now on grass 
       this.x = 200;
       ++this.gems;  // Add one more gem to the collection
    };

};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
    };

 Player.prototype.handleInput = function(dt){
     if ('left' in keysDown){
        this.x -= this.speed * dt;
   }
    if ('right' in keysDown){
        this.x += this.speed * dt;
    }
    if ('up' in keysDown){
        this.y -= this.speed * dt;
    }
    if ('down' in keysDown){
        this.y += this.speed * dt;
    }
 } ;

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

allEnemies[1] = new Enemy();
allEnemies[1].x = Math.random() * 110;
allEnemies[1].y = (Math.random() * 40 )+ (Math.random() * 220);
allEnemies[2] = new Enemy();
allEnemies[2].x = (Math.random() * 520) + Math.random() * 30;
allEnemies[2].y = (Math.random() * 20 ) + (Math.random() * 250);
allEnemies[3] = new Enemy();
allEnemies[3].x = (Math.random() *  370) + Math.random() * 20;
allEnemies[3].y =(Math.random() * 50 )+ (Math.random() * 200);
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   delete keysDown[allowedKeys[e.keyCode]];
},false);

document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

  keysDown[allowedKeys[e.keyCode]] = true;
},false);
