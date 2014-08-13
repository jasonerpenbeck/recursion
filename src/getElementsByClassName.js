// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    console.log('looking for: ' + className);



    var arrDOM = [];

    function searchDOM(startingPoint) {

      console.log('My array with matches: ');
      console.log(arrDOM);

      console.log('Currently working through: ')
      console.log(startingPoint);
      console.log(startingPoint.childNodes);

      if(startingPoint.classList === undefined) {
        console.log("No Class List Here.  Move along");
      }

      else {
        console.log("Look Through The Class List.");

        for(var i=0;i<startingPoint.classList.length;i++) {
          console.log(i + ': Iterating Through classList');


          if(startingPoint.classList[i] == className) {
              arrDOM.push(startingPoint);
              console.log('Match!');
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

