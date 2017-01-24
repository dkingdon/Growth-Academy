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
      }

      vm.checkForWinner = function(num) {
        if (num === answer) {
          $('#equation').text('Great Job!');
        }
        else {
          $('#equation').text('Woops! ' + firstVal + ' ' + operator + ' ' + secondVal + ' = ' + answer);
        }
      };

      // add click funtion to links
      // value will be matched with answer var

  } // End of controller TODO: remove before production
