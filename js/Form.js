class Form {
  constructor() {   
    this.greeting = createElement('h3');
  }

  hides(){
    this.greeting.hide()
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-70, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(displayWidth/2-50, displayHeight/2);
    button.position(displayWidth/2, displayHeight/2+30);

    button.mousePressed(()=>{
      input.hide();
      button.hide();

      player.name = input.value();
      
      playerCount+=1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);

      
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-40, displayHeight/4)
    });

    var reset = createButton("Reset");
    reset.position(displayWidth-75, 10)

    reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
      Player.updateRank(0)
    })
  }
}
