class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.resetButton = createButton('Reset')
    this.greeting = createElement('h3');
    this.title = createElement('h2')
    this.leaderboard = createElement('h3')
  }

  display(){
   
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50, 0);
    
   
    
    this.input.position(displayWidth/2-50, displayHeight/2 - 40);
    this.button.position(displayWidth/2, displayHeight/2);
    this.resetButton.position(displayWidth-35, 10)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      
      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-50, displayHeight/2-40)
    });
  this.resetButton.mousePressed(()=>{
      player.updateCount(0)    
      game.update(0)
  });
  }
hide(){
this.input.hide()
this.button.hide()
this.greeting.hide()
}
displayRanks(){
  this.leaderboard.html(player.rank)
  this.leaderboard.position(displayWidth/2, displayHeight/2)
}
  }

