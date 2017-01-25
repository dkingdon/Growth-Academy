console.log('kMathController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('kMathController', kMathController);

    kMathController.$inject = ['$http'];
    function kMathController ($http) {
      var vm = this;
      var answer;
      var firstVal; //might not need this to be global
      var secondVal; //might not need this to be global
      var operator; //might not need this to be global

      var numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var operatorList = ['+', '-'];

      vm.generateFlashCard = function() {
        firstVal = numbersList[Math.floor(Math.random() * numbersList.length)];
        secondVal = numbersList[Math.floor(Math.random() * numbersList.length)];
        operator = operatorList[Math.floor(Math.random() * operatorList.length)];
          // condition to make sure simle subrations equation is presented.
          while (operator == '-' && firstVal < secondVal) {
            firstVal += 1;
            secondVal -= 1;
          }
          operator == '+' ? answer = (firstVal + secondVal) : answer = (firstVal - secondVal);

        $('#equation').text(firstVal + ' ' + operator + ' ' + secondVal + ' ' + '=');
        $('.answer-nums').attr('style', 'visibility: visible');
        $('.action').attr('style', 'visibility:hidden');
        $('.flashcard h1').text(' ');
      }

      vm.checkForWinner = function(num) {
        $('#equation').text(' ');
        if (num === answer) {
          $('.flashcard h1').text('Great Job!');
        }
        else {
          $('.flashcard h1').text('Woops! Try again.');
        }
        $('.action').text('Next').attr('style', 'visibility:visible');
        $('.answer-nums').attr('style', 'visibility:hidden')
      };

      // add click funtion to links
      // value will be matched with answer var

  } // End of controller TODO: remove before production
