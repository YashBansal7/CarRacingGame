var database;
var position;
var form,player,game;
var gamestate=0;
var playercount=0;
function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game=new Game();
  game.getstate();
game.start();
}

function draw(){
  background("white");


}