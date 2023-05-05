window.onload = function() {
  // collect all the divs
  var divs = document.getElementsByClassName('scattered');
  // get window width and height
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  // calculate boundaries of center box
  var centerBoxTop = (winHeight - 600) / 2;
  var centerBoxLeft = (winWidth - 600) / 2;
  var centerBoxBottom = centerBoxTop + 600;
  var centerBoxRight = centerBoxLeft + 600;

  // array to keep track of previously positioned elements
  var positions = [];

  // i stands for "index". you could also call this banana or haircut. it's a variable
  for ( var i=0; i < divs.length; i++ ) {
      // shortcut! the current div in the list
      var thisDiv = divs[i];

      // generate random position until it is outside the center box
      var randomTop, randomLeft;
      do {
        randomTop = getRandomNumber(80, winHeight - thisDiv.offsetHeight);
        randomLeft = getRandomNumber(100, winWidth - thisDiv.offsetWidth - 100);
      } while (randomTop > centerBoxTop && randomTop < centerBoxBottom &&
               randomLeft > centerBoxLeft && randomLeft < centerBoxRight);

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
            do {
              randomTop = getRandomNumber(80, winHeight - thisDiv.offsetHeight);
              randomLeft = getRandomNumber(100, winWidth - thisDiv.offsetWidth - 100);
            } while (randomTop > centerBoxTop && randomTop < centerBoxBottom &&
                     randomLeft > centerBoxLeft && randomLeft < centerBoxRight);
            break;
          }
        }
      }

      // adjust top position if necessary to stay within the margin
      if (randomTop < 80) {
        randomTop = 80;
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
