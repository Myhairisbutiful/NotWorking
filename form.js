class Form{

    constructor(){
         this.input = createInput("name");
        this.button = createButton("player registration");
        this.greeting = createElement('h2');
    }

display(){
    var title = createElement('h2');
    title.html("Multi Car Racing Game");
    title.position(130,0);

   
    this.input.position(130,160);
    this.button.position(250,200);

    this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

     player.name = this.input.value();
    playerCount = playerCount + 1;
    player.index = playerCount;
player.updateCount(playerCount);
player.update();

this.greeting.html("Welcome  " + player.name);
this.greeting.position(130,100);

    })
}

remove(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}



}