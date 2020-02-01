class Form{
    constructor(){

}
display(){
var title = createElement('h1');
title.html("Multiplayer Car Racing Game");
title.position(250,150);
var input = createInput("Enter Your Name -");
input.position(150,250);
var button = createButton("Join Game");
button.position(250,350);

button.mousePressed(function(){
input.hide();
button.hide();
var Name = input.value();
playercount+=1;
player.update(Name);
player.updatecount(playercount);

var greeting = createElement('h1');
greeting.html("Welcome");
greeting.position(250,300);
})

}
}