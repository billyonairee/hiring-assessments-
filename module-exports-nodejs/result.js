// TODO: import your variables here to give 'hello world !' as an output
// TODO: import your variables here to give 'hello world !' as an output
var hello = require("./hello");
var {world,bang} = require("./world");
// var bang = require("./world");

var result = hello + ' ' + world + ' ' + bang;

//
// TODO: export your result so that test can run

module.exports = result;