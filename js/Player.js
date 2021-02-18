class Player {
  constructor(){
    this.index = null
    this.name = null
    this.distance = 0
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

  getRank(){
    var playerRankRef = database.ref('rank')
    playerRankRef.on("value", (data)=>{
      this.rank = data.val() 
    })
  }

static updateRank(place){
    database.ref('/').update({
      rank : place
    })  
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

static getPlayerInfo(){
    database.ref("players").on("value",function(data){
      allPlayers = data.val()
    })
  }
}