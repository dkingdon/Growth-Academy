console.log('pkShapesController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('pkShapesController', pkShapesController);

    pkShapesController.$inject = ['$http'];
    function pkShapesController ($http) {
      var vm = this;
      var targetShape;
      var activeGame = 1; //global to identify present game type

      /* - - - temp - - - */
      // maybe have the array be objects with name and image ref. this way can associate the selection with the answers.
      var shapes = ['square', 'circle', 'triangle', 'rectangle'];

// TODO: need to write a function that alternates between the two game types.

      vm.alternateGameStyle = function() {
        activeGame === 1 ? vm.displayOneShape() : vm.displayManyShapes();
      }

      /* - - - Shuffles Arrays - - - */
      vm.randomize = function(arr) {
        var currentIndex = arr.length
        while (0 !== currentIndex) {
          var randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          var tempVal = arr[currentIndex];
          arr[currentIndex] = arr[randomIndex];
          arr[randomIndex] = tempVal
        }
        return arr;
      }

      //button display: for loop that loops through the randomized array and outputs a button. 4 times. name and iswinner arg will be created using index number. consider using .append()

      vm.displayOneShape = function() {
        targetShape = shapes[Math.floor(Math.random() * shapes.length)];
        var randomShapes = vm.randomize(shapes);
        $('#pk-directions h1').text('What shape is this?');
        $('#pk-board h2').text(targetShape);
        $('#pk-answer-btns').attr('style', 'visibility:visible');
        activeGame = 0;
      }


      vm.displayManyShapes = function() {
        var randomShapes = vm.randomize(shapes);
        var targetShape = randomShapes[Math.floor(Math.random() * randomShapes.length)];
        $('#pk-directions h1').text('Can you find the ' + targetShape + '?')
        $('#pk-board h2').text(randomShapes[0] + ' ' + randomShapes[1] + ' ' + randomShapes[2] + ' ' + randomShapes[3]);
        activeGame = 1
      }

      //TODO: deactivate buttons after inital answer
      vm.checkForWinner = function(shape) {
        $('#pk-board h2').text('');
        if (shape == targetShape) {
          $('#pk-directions h1').text("Great Job! You did it!");
        }
        else {
          $('#pk-directions h1').text("Woops, not quite right");
          $('#pk-board h2').text('That was a ' + targetShape);
        };
        $('#pk-answer-btns').attr('style', 'visibility:hidden');
        $('.action').text('Next');
      };




    } // End of controller TODO: remove before production
