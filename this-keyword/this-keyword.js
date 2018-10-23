// Example use :
//
// sport.playerNames();
// returns ["Lebron James plays basketball", "Kevin Durant plays basketball"]

var sport = {
  name: 'basketball',
  players: [
    { name: 'LeBron James', age: 31 },
    { name: 'Kevin Durant', age: 28 }
  ],
  playerNames: function () {
    // YOUR CODE HERE
    var res = []
    for(var i = 0; i < this["players"].length; i++){
      res.push(`${this["players"][i]["name"]} plays ${this["name"]}`);
    }
    return res
  }
};

module.exports = sport;