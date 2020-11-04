var canvas, backgroundImage;
var car1, car2, car3, car4, cars;
var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
function preload(){
car1image = loadImage("images/car1.png")
car2image = loadImage("images/car2.png")
car3image = loadImage("images/car3.png")
car4image = loadImage("images/car4.png")
trackImage = loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20,displayHeight - 20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1)
  }
  if(gameState === 1){
    clear()
    game.play()
  }
  if(gameState === 2){
   game.end() 
  }
}
