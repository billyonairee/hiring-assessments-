/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var printArray = function(array) {
  // [1,2,3,[4,5,[6]]]
  var res = []
  var find = function(arr){
    for(var i = 0; i<arr.length; i++){
      if(typeof arr[i] === 'number'){
        res.push(arr[i]);
      }else if(Array.isArray(arr[i])){
        find(arr[i])
      }
    }
  }
  find(array)
  console.log(res.join(''))
  return res;
};

module.exports = printArray;

//의도가 뭔지 자세히 모르겠음....