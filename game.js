class Game{

constructor(){

}

getstate(){
 var refer = database.ref('gameState');
 refer.on("value",function(data){
     gameState = data.val();
 })
    
}

update(num){
database.ref('/').update({
 gameState: num  
})
}

start(){

    if(gameState === 0){
        player = new Player();
        player.getcount();

        form = new Form();
        form.display();
    }
}

play(){
    form.remove();
    text("Game Start",120,100);
    Player.getplayerinfo();
    if(allplayers !== undefined){
        var position = 120;
        for(var plr in allplayers){
            if(plr === "player" + player.index){
                fill("red");

            }
            else{
                fill("black");
            }
            position = position + 20;
            text(allplayers[plr].name + ":" + allplayers[plr].distance,120,position);
        }
    }
    if(keyIsDown(UP_ARROW)&& player.index !== null){
        player.distance = player.distance + 50;
        player.update();
    }
}

}