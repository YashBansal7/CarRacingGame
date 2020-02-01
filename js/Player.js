class Player {
    constructor(){
    }
    // It will get the count of player.
getcount(){
    var playercountref = database.ref('playercount');
    playercountref.on("value",function(data){
        playercount=data.val();
    });
}
updatecount(playercount){
    database.ref('/').update({ playercount:count})
}
update(Name){
    var playerindex = "player"+playercount;
    database.ref(playerindex).set({Name:Name});
}
}