var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;

var car1, car1Img, car2, car2Img, car3, car3Img, car4, car4Img;
var cars = [];

var track
var ground

function preload(){
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png")
  car3Img = loadImage("../images/car3.png")
  car4Img = loadImage("images/car4.png")

  track = loadImage("images/track.jpg")

  ground = loadImage("images/ground.png")
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){

  if(playerCount==4){
    gameState = 1
    game.update(1)
  }

  if(gameState==1){
    game.play()
  }

  if(gameState==2){
    game.end()
  }
}