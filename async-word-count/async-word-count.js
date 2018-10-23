var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  getWordCount(filePathOne, function(err, data1){
    if(err){
      callback(err)
      return;
    }else {
      getWordCount(filePathTwo, function(err, data2){
        if(err){
          callback(err)
          return;
        }
        var totalData = data1 + data2
        callback(err, totalData)
      })
    }
  })
};

module.exports = getTotalWordCount;
