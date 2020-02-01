class Game{
    constructor(){

    }
//Getstate will read the gamestate from database.
getstate(){
var gamestateref = database.ref('gamestate');
gamestateref.on("value",function(data){
    gamestate=data.val();
})
}

//Update state will update gamestate in database.
update(state){
    database.ref('/').update({ gamestate:state})
}
start(){
    if(gamestate===0){
 player = new Player();
 player.getcount();

 form = new Form();
 form.display();
    }
}






    }
