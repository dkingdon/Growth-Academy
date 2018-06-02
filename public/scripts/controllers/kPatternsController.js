//Thank you for having consistent code style!
  angular
    .module('academy')
    .controller('kPatternsController', kPatternsController);

    kPatternsController.$inject = ['$http'];
    function kPatternsController ($http) {
      var vm = this;
      var random;
      var answer;

      var patternOptions = [{name:'square', img:'../images/pkShapes/square.png'}, {name:'circle', img:'../images/pkShapes/circle.png'}, {name:'triangle', img:'../images/pkShapes/triangle.png'},{name:'dinosaurs', img:'../images/pkCounting/dinosaurs.png'}, {name:'butterflies', img:'../images/pkCounting/butterflies.png'}, {name:'balloons', img:'../images/pkCounting/balloons.png'}, {name:'hotdogs', img:'../images/pkCounting/hotdogs.png'}];

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

      vm.boardReset = function() {
        $('#k-board img').remove();
        $('#k-answers h2').text(' ')
        $('#pattern-header').text('What comes next in the pattern?');
      }

      vm.displayPattern = function() {
        vm.boardReset();
        random = vm.randomize(patternOptions);
        var pattern = [random[0], random[1], random[2], random[0], random[1], {name:'question', img:'../images/question_mark.png'}];
        var preRandomOptions = [random[2], random[1], random[6], random[4] ]

        // need to find a way to not hard code the question mark in the array. randomly select an index and replace it with the question mark. That the value of the old index moves to the answer variable above.

        var finalOptions = vm.randomize(preRandomOptions);
        answer = finalOptions.indexOf(random[2])
        for (var i = 0; i < pattern.length; i++) {
          $('#k-board').append('<img src="' + pattern[i].img + '" />');
        };
        for (var i = 0; i < finalOptions.length; i++) {
          $('#pattern-' + i).attr('src', finalOptions[i].img).attr('style', 'visibility:visible');
        };
        $('.action').text('Next').attr('style', 'visibility:hidden');;
      }

      vm.checkForWinner = function(num) {
        $('#k-board img').remove();
          for (var i = 0; i < 4; i++) {
            $('#pattern-' + i).attr('style', 'visibility:hidden');
          }
        if (num === answer) {
          $('#k-answers h2').text('Great Job! You did it!');
        }
        else {
          $('#pattern-header').text('Woops! Not quite right, the answer was ');
          $('#k-board').append('<img src="' + random[2].img + '" />');
        };
        activeGame = 0;
        $('.action').attr('style', 'visibility:visible');
      }

  }
