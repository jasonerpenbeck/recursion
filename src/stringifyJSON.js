// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

  if(typeof obj === 'object') {
//    console.log("We are working with an object...");

      // Handle nulls
    if(obj === null) {
      return '' + null + '';
      }

      // Handle arrays
    else if(Array.isArray(obj)) {
//      console.log("...which is also an array");

      // Check if array is empty
      if(obj.length !== 0) {

      // Add first array element to arrList
      // Doing this separately so that remaineder of elements can be preceded by a comma
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

    // basic objects
    else {
      // Check if the object is empty
      if(Object.getOwnPropertyNames(obj).length === 0){
//        console.log("This is an empty object.");
      return '' + "{}" + '';
      }

      else {

        var objList = '';

        for (var key in obj) {
          if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
            objList += ',' + '"' + key + '"' + ':' + stringifyJSON(obj[key]);
          }
        }

        // returning full object after removing the leading comma
        return '{' + objList.replace(',','') + '}';
      }

    }

  }

  // Non-objects
  else {

    // Undefined
    if(typeof obj === 'undefined' || typeof obj === 'function') {
 //     console.log("type is undefined or a function");
    }

    // Strings
    else if(typeof obj === 'string') {
      return '"' + obj + '"';
    }

    else {return '' + obj + '';}
  }

};
