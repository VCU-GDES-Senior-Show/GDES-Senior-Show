window.onload = function() {
  // collect all the divs
  var divs = document.getElementsByClassName('scattered');
  // get window width and height
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  // array to keep track of previously positioned elements
  var positions = [];

  // i stands for "index". you could also call this banana or haircut. it's a variable
  for ( var i=0; i < divs.length; i++ ) {
      // shortcut! the current div in the list
      var thisDiv = divs[i];

      // get random numbers for each element
      var randomTop = getRandomNumber(0, winHeight - thisDiv.offsetHeight);
      var randomLeft = getRandomNumber(0, winWidth - thisDiv.offsetWidth);

      // check if element overlaps with previously positioned elements
      var overlap = true;
      while (overlap) {
        overlap = false;
        for (var j = 0; j < positions.length; j++) {
          var pos = positions[j];
          if (pos.top < randomTop + thisDiv.offsetHeight &&
              pos.top + pos.height > randomTop &&
              pos.left < randomLeft + thisDiv.offsetWidth &&
              pos.left + pos.width > randomLeft) {
            overlap = true;
            randomTop = getRandomNumber(0, winHeight - thisDiv.offsetHeight);
            randomLeft = getRandomNumber(0, winWidth - thisDiv.offsetWidth);
            break;
          }
        }
      }

      // update top and left position
      thisDiv.style.top = randomTop +"px";
      thisDiv.style.left = randomLeft +"px";

      // add element position to array
      positions.push({
        top: randomTop,
        left: randomLeft,
        width: thisDiv.offsetWidth,
        height: thisDiv.offsetHeight
      });
  }

  // function that returns a random number between a min and max
  function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
  }
};