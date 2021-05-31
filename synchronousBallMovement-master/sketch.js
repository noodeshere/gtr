var database;
var gameState=0
var playerCount=0
var allPlayers;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
form=new Form()
  form.display()
player=new Player()
game=new Game()
game.getState()
player.getCount()
}
function draw (){
  if(playerCount==4){
    gameState=1
  }
  if(gameState==1){
    game.play()
  }
}


























