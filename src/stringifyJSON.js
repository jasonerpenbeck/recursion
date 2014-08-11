// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here

  console.log(obj);

  if(typeof obj === 'object') {
    console.log("We are working with an object...");

    if(obj === null) {
      // Handle nulls
      return '' + null + '';
      }

    else if(Array.isArray(obj)) {
      // Handle arrays
      console.log("...which is also an array");


      if(obj.length !== 0) {
      var arrList = stringifyJSON(obj[0]);

      // Run function recursively for each element in array
      if(obj.length > 1) {
        for(var i=1;i<obj.length;i++) {
          // Add a comma before all elements except the first
          arrList +=  ',' + stringifyJSON(obj[i]);
          }
        }
      return '' + '[' + arrList +']' + '';
      }

     else {
       // Handle empty arrays
      return '' + '[]' + '';
     }

    }

    else {
      // Check if the object is empty
      if(Object.getOwnPropertyNames(obj).length === 0){
        console.log("This is an empty object.");
        console.log('' + '{}' + '');
      return '' + "{}" + '';
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
