## Arcade Game, How it works ?

In this game you have a Player and Enemies (Bugs). 
The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The 
enemies move in varying speeds on the paved block portion of the scene. 
Once a the player collides with an enemy,he looses a LIFE. A player has 15 LIVES in the beginning of the Game,when he looses all his lives, the game is resets and the 
GEMS are set to 0 and LIFE to 15. Once the player reaches the water the player gets a GEM.


## Code Example

The repository includes the following files :
CSS/style.css: Contains all of the CSS needed to style the game.

images : Contains all the images of the game (backgroung, sprites, gems, etc)

js/app.js : The Player and the Enemy classes are implemented here. They are initiated and updated here. The player inputs are handled here.

js/engine.js : This file is needed to run the game. A game engine works by drawing the entire game screen over and over, kind of like a flipbook you may have created as a kid. When your player moves across the screen, it may look like just that image/character is moving or being 
drawn but that is not the case. What's really happening is the entire "scene" is being drawn over and over, presenting the illusion of animation.

js/resources.js : * This is simply an image loading utility. It eases the process of loading image files so that they can be used within your game. It also includes
 a simple "caching" layer so it will reuse cached images if you attempt to load the same image multiple times.

index.html :  opening index.html loads the game.


## Motivation
This project is made for learning and teaching How to make a Simple HTML Game.


## Installation

1. ### Clone the repository

'git clone https:://github.com/sonalikatara/archadeGame'

2. ### Create a branch for your game

'git checkout -b yourGameName'





