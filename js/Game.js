class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,100)
    car1.addImage("1", car1Img)
    car2 = createSprite(100,200)
    car2.addImage("2", car2Img)
    car3 = createSprite(100,300)
    car3.addImage("3", car3Img)
    car4 = createSprite(100,400)
    car4.addImage("4", car4Img)

    cars = [car1, car2, car3, car4]
  }

  play(){
    background(ground)
    form.hides()
    Player.getPlayerInfo()
    player.getRank()

    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)

    if(allPlayers!==undefined){
      var y 
      var x = 200 
      var index = 0

      for(var plrs in allPlayers){
        /*console.log(plrs)
        textSize(20)
        y = y+20
        text(allPlayers[plrs].name+" : "+allPlayers[plrs].distance,180,y)*/

        x = x+200
        y = displayHeight-allPlayers[plrs].distance
        cars[index].x = x
        cars[index].y = y

        index += 1

        if(index==player.index){
          fill("purple")
          ellipse(cars[index-1].x,cars[index-1].y,100,100)

          textSize(15)
          fill("white")
          strokeWeight(5)
          text(player.name, cars[index-1].x-17, cars[index-1].y+62)

          camera.position.x = displayWidth/2
          camera.position.y = cars[index-1].y
        }
      }
    }

    if(player.index!==null && keyDown("up")){
      player.distance = player.distance+20
      player.update()
    }

    if(player.distance==3760){
      gameState = 2
      //this.update(2)
      player.rank += 1
      Player.updateRank(player.rank)
      console.log("H I Y A")
    }

    console.log(player.rank)
    console.log(gameState)

    drawSprites()
  }

  end(){
    background("white")
    
    var gameEnd = createElement('h1',"GAME OVER")
    gameEnd.position(displayWidth/2-40, displayHeight/4)  
    

    //console.log("GAME OVER")
  }
}
