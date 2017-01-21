console.log('pkColorsController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('pkColorsController', pkColorsController);

    pkColorsController.$inject = ['$http'];
    function pkColorsController ($http) {
      var vm = this;
      var randomColor;

      /* - - - temp - - - */
      // maybe have the array be objects with name and image ref. this way can associate the selection with the answers.
      var shapes = ['red', 'blue', 'yellow', 'green'];

      vm.displayColor = function() {
        randomColor = shapes[Math.floor(Math.random() * shapes.length)];
        $('#pk-directions h1').text('What color is this?');
        $('#pk-board h2').text(randomColor);
      }

      //TODO: deactivate buttons after inital answer
      vm.checkForWinner = function(color) {
        $('#pk-board h2').text('');
        if (color == randomColor) {
          $('#pk-directions h1').text("Great Job! You did it!");
        }
        else {
          $('#pk-directions h1').text("Woops, not quite right");
          $('#pk-board h2').text('That was ' + randomColor);
        };
        $('.action').text('Next');
      };




    } // End of controller TODO: remove before production
