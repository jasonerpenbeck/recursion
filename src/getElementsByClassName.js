// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

    var arrDOM = [];

    function searchDOM(startingPoint) {

      if(startingPoint.classList === undefined) {
        console.log("No Class List Here.  Move along");
      }

      else {

        for(var i=0;i<startingPoint.classList.length;i++) {

          if(startingPoint.classList[i] == className) {
              arrDOM.push(startingPoint);
          }

          else {
            console.log(' ');
          }

        }

      }

      if(startingPoint.childNodes.length ===0) {
         console.log("Nothing further");
        }

      else {
          for(var i=0;i<startingPoint.childNodes.length;i++) {
              searchDOM(startingPoint.childNodes[i]);
            }
          }

        return arrDOM;
       }
    return searchDOM(document.body);
  };

