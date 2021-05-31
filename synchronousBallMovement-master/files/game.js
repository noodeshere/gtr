class Game{
    constructor(){

    }
 play(){
 background("white")    
form.greeting1.hide()
form.greeting2.hide()

    player.getPlayerInfo() 
 if(allPlayers!==undefined){
if(keyDown(UP_ARROW)){
    player.distance=player.distance+10
    player.update()
}     
 var textPosition=150
 for(var plr in allPlayers){
     textPosition=textPosition+20
     if(plr=="player"+player.index){
         fill("red")

     }
     else{
         fill("yellow")
     }
     text(allPlayers[plr].name+" : "+ allPlayers[plr].distance,100,textPosition)
 }
}

}

    getState(){
database.ref('gameState')
.on("value",function(data){
gameState=data.val()
})
 }   
 updateState(x){
     database.ref('/')
     .update({
         gameState:x
     })
 }
}