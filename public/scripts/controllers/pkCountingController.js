console.log('pkCountingController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('pkCountingController', pkCountingController);

    pkCountingController.$inject = ['$http'];
    function pkCountingController ($http) {
      var vm = this;
      var targetNum;
      var activeGame = 1

      /* - - - temp - - - */
      // maybe have the array be objects with name and image ref. this way can associate the selection with the answers.
      // var numbers = ['one', 'two', 'three', 'four'];

      var numbers = [{name:'dinosaurs', amount:'one', img:'../images/pkCounting/dinosaurs.png'}, {name:'butterflies', amount:'two', img:'../images/pkCounting/butterflies.png'}, {name:'ballons', amount:'three', img:'../images/pkCounting/balloons.png'}, {name:'hotdogs', amount:'four', img:'../images/pkCounting/hotdogs.png'}];

      vm.alternateGameStyle = function() {
        activeGame === 1 ? vm.displayOneNum() : vm.displayManyNums();
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

      vm.displayOneNum = function() {
        targetNum = numbers[Math.floor(Math.random() * numbers.length)];
        $('#pk-directions h1').text('How many ' + targetNum.name + ' are there?');
        $('#pk-board h2').prepend('<img src="' + targetNum.img + '" />');
        $('#pk-answer-btns').attr('style', 'visibility:visible');
        activeGame = 0;
      }

      vm.displayManyNums = function() {
        $('#pk-board h2').text(' ')
        var randomNums = vm.randomize(numbers);
        targetNum = randomNums[Math.floor(Math.random() * randomNums.length)];
        $('#pk-directions h1').text('Can you find the group of ' + targetNum.amount + ' ?')
        $('#pk-board h2').prepend('<img src="' + randomNums[0].img + '" />' + ' ' + '<img src="' + randomNums[1].img + '" />' + ' ' + '<img src="' + randomNums[2].img + '" />' + ' ' + '<img src="' + randomNums[3].img + '" />');
        activeGame = 1
      }



      //TODO: deactivate buttons after inital answer
      vm.checkForWinner = function(num) {
        $('#pk-board h2').text('');
        if (num == targetNum.amount) {
          $('#pk-directions h1').text("Great Job! You did it!");
        }
        else {
          $('#pk-directions h1').text("Woops, not quite right");
          $('#pk-board h2').text('That was number ' + targetNum.amount);
        };
        $('#pk-answer-btns').attr('style', 'visibility:hidden');
        $('.action').text('Next');
        $('img').remove();
      };




    } // End of controller TODO: remove before production
