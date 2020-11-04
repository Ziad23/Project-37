class Player {
  constructor(){
    this.distance = 0
    this.name = null
    this.index = null
    this.rank = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
 
  update(){
    var playerIndex = "players/player" + this.index;
    console.log(playerIndex)
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players')
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val()
    })
  }
getCarsAtEnd(){
  var CarsAtEnd = database.ref('CarsAtEnd');
  CarsAtEnd.on("value",(data)=>{
    this.rank = data.val()

  })
}
static updateCarsAtEnd(rank){
database.ref('/').update({
  CarsAtEnd:rank
})
}
}
