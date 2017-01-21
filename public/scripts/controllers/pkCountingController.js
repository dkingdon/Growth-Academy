console.log('pkCountingController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('pkCountingController', pkCountingController);

    pkCountingController.$inject = ['$http'];
    function pkCountingController ($http) {
      var vm = this;
      var randomNum;

      /* - - - temp - - - */
      // maybe have the array be objects with name and image ref. this way can associate the selection with the answers.
      var numbers = ['one', 'two', 'three', 'four'];

      vm.displayNum = function() {
        randomNum = numbers[Math.floor(Math.random() * numbers.length)];
        $('#pk-directions h1').text('What number is this?');
        $('#pk-board h2').text(randomNum);
      }

      //TODO: deactivate buttons after inital answer
      vm.checkForWinner = function(num) {
        $('#pk-board h2').text('');
        if (num == randomNum) {
          $('#pk-directions h1').text("Great Job! You did it!");
        }
        else {
          $('#pk-directions h1').text("Woops, not quite right");
          $('#pk-board h2').text('That was number ' + randomNum);
        };
        $('.action').text('Next');
      };




    } // End of controller TODO: remove before production
