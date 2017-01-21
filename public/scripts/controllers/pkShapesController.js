console.log('pkShapesController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('pkShapesController', pkShapesController);

    pkShapesController.$inject = ['$http'];
    function pkShapesController ($http) {
      var vm = this;
      var randomShape;

      /* - - - temp - - - */
      // maybe have the array be objects with name and image ref. this way can associate the selection with the answers.
      var shapes = ['square', 'circle', 'triangle', 'rectangle'];

      vm.displayShape = function() {
        randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        $('#pk-directions h1').text('What shape is this?');
        $('#pk-board h2').text(randomShape);
      }

// TODO: need to write funciton that displays mulitple shapes on screens, text asking to identify a specific shape. using randomize function

// TODO: need to write a function that alternates between the two game types.

      vm.displayShapes = function() {

      }
      /* - - - Shuffles Arrays - - - */
      vm.randomize = function(arr) {
        var currentIndex = arr.length, tempVal, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          tempVal = arr[currentIndex];
          arr[currentIndex] = arr[randomIndex];
          arr[randomIndex] = tempVal
        }
        return arr;
      }

      //TODO: deactivate buttons after inital answer
      vm.checkForWinner = function(shape) {
        $('#pk-directions h1').text();
        $('#pk-board h2').text('');
        if (shape == randomShape) {
          $('#pk-directions h1').text("Great Job! You did it!");
        }
        else {
          $('#pk-directions h1').text("Woops, not quite right");
          $('#pk-board h2').text('That was a ' + randomShape);
        };
        $('.action').text('Next');
      };




    } // End of controller TODO: remove before production
