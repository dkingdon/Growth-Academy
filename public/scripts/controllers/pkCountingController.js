
  angular
    .module('academy')
    .controller('pkCountingController', pkCountingController);

    pkCountingController.$inject = ['$http'];
    function pkCountingController ($http) {
      var vm = this;
      var targetNum;
      var activeGame = 1

      var numbers = [{name:'dinosaurs', amount:'one', img:'../images/pkCounting/dinosaurs.png'}, {name:'butterflies', amount:'two', img:'../images/pkCounting/butterflies.png'}, {name:'ballons', amount:'three', img:'../images/pkCounting/balloons.png'}, {name:'hotdogs', amount:'four', img:'../images/pkCounting/hotdogs.png'}];

      vm.alternateGameStyle = function() {
        activeGame === 1 ? vm.displayOneNum() : vm.displayManyNums();
        $('#pk-board h2').text('');
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
        $('#pk-board').prepend('<img class="one-num" src="' + targetNum.img + '" />');
        $('#pk-answer-btns').attr('style', 'visibility:visible');
        activeGame = 0;
        $('.action').attr('style', 'visibility:hidden');
      }

      vm.displayManyNums = function() {
        $('#pk-board h2').text(' ')
        $('#pk-many-nums').attr('style', 'visibility:visible');
        var randomNums = vm.randomize(numbers);
        targetNum = randomNums[Math.floor(Math.random() * randomNums.length)];
        $('#pk-directions h1').text('Can you find the goup of ' + targetNum.amount + '?');
        for (var i = 0; i < randomNums.length; i++) {
            $('#num-' + i ).attr('style', ' ');
        }
        activeGame = 1
        $('.action').attr('style', 'visibility:hidden');
      }

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
          for (var i = 0; i < 4; i++) {
            $('#num-' + i ).attr('style', 'height:0px');
          }
        $('#pk-answer-btns').attr('style', 'visibility:hidden');
        $('.action').text('Next').attr('style', 'visibility:visible');;
        $('.one-num').remove();
      };

    } 
