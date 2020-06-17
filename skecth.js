var canvas;
var groundImage, track, car1img, car2img;

var fireAuth, db;
var game,Friend1, Friend2;

var secret_word;
var player, allPlayers;

var gameState = null;
var playerCount;

function preload() {
groundImage=loadImage("images/ground.png");  
car1img=loadImage("images/car1png");  
car2img=loadImage("images/car2.png");  
trackimage=loadImage("images/track.png");  
groundImage=loadImage("images/ground.png")

}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  fireAuth = firebase.auth();
  db = firebase.database();
  game = new Game();
  welcome = new Welcome();
  Friend = new Friend1();
  Friend = new Friend2();
  player = new Player();

  car1 = createSprite(width / 2, 200);
  car1.addImage("car1", car1img);
  car2 = createSprite(width - 300, 200);
  car2.addImage("car2", car2img);

  cars = [car1, car2];
}

function draw() {
  background(backgroundImage);
  if (gameState === null || gameState === 0) {
    game.start();
  }
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    
    Friend2.greeting.hide();
    Friend2.greeting2.hide();
    Friend2.playButton.hide();
    Friend2.secretWord.hide();

    Friend1.greeting.hide();
    Friend1.greeting2.hide();
    Friend1.playButton.hide();

   
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}
