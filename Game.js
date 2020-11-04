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
    car1 = createSprite(400,200)
    car1.addImage(car1image)
    car2 = createSprite(600,200)
   car2.addImage(car2image)
    car3 = createSprite(800,200)
    car3.addImage(car3image)
    car4 = createSprite(1000,200)
    car4.addImage(car4image)
    cars = [car1,car2,car3,car4]

  }
play(){
  form.hide()
  textSize(20)
  text("Gamestart", 150,100)
  Player.getPlayerInfo()
  player.getCarsAtEnd()
  var index = 0
  var x = 180
  var y = 0
  if(allPlayers !== undefined){
    background("brown")
    image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
   // var displayPosition = 130
  for(var plr in allPlayers){
    console.log(plr)
    index = index +1
    x = x + 200
    y = displayHeight - allPlayers[plr].distance
    cars[index - 1].x =x
    cars[index - 1].y = y

    /*if(plr ===  "player" + player.index){
      fill("red")
    
    }
    else{
      fill("black")
    }*/
    if(index === player.index){
      strokeWeight(10)
      fill("red")
      circle(x,y,70)
      cars[index-1].shapeColor = "red"
      camera.position.x = displayWidth/2
      camera.position.y = cars[index - 1].y
    }
    /*displayPosition = displayPosition + 20;
    
    textSize(15)
    text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition)*/
   
  }
  }
if(keyDown(UP_ARROW) && player.index !== null){
  player.distance = player.distance + 50;
  player.update()
}

if(player.distance>displayHeight*5){
  gameState = 2
  player.rank = player.rank+1
  Player.updateCarsAtEnd(player.rank)
  form.displayRanks()
}

drawSprites()
}
end(){
  console.log("Game has ended")
  console.log(player.rank)
}
}
