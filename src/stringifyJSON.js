// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here

  //console.log(typeof obj);

  if(typeof obj === 'object') {
    console.log("We are working with an object");
    if(obj === null) {return '' + null + '';}

    if(Array.isArray(obj)) {
      console.log("...which is also an array");

      if(obj.length !== 0) {

      var arrList = stringifyJSON(obj[0]);

      // Run function recursively for each element in array
      if(obj.length > 1) {
        for(var i=1;i<obj.length;i++) {
          arrList +=  ',' + stringifyJSON(obj[i]);
          }
        }
      return '' + '[' + arrList +']' + '';
      }

     else {
      return '' + '[]' + '';
     }

    }

  }

  else {
    //console.log("'" + obj + "'");

    if(typeof obj === 'undefined') {
 //     console.log("type is undefined");

    }

    else if(typeof obj === 'string') {
      return '"' + obj + '"';
    }

    else {return '' + obj + '';}
  }

};
