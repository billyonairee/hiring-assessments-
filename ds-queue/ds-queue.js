/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  this._storage = {},
  this.count = 0;
  this.int = 0;
};

Queue.prototype.add = function(value) {
  // console.log(value)
  this.count ++
  this._storage[this.count] = value

};

Queue.prototype.remove = function() {
  this.int ++
  var deletedItem = this._storage[this.int]
  delete this._storage[this.int]
  return deletedItem
};

module.exports = Queue;