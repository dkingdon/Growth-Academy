console.log('kPatternsController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('kPatternsController', kPatternsController);

    kPatternsController.$inject = ['$http'];
    function kPatternsController ($http) {
      var vm = this;
      var answer;


      var patternOptions = [{name:'square', img:'../images/pkShapes/square.png'}, {name:'circle', img:'../images/pkShapes/circle.png'}, {name:'triangle', img:'../images/pkShapes/triangle.png'},{name:'dinosaurs', img:'../images/pkCounting/dinosaurs.png'}, {name:'butterflies', img:'../images/pkCounting/butterflies.png'}, {name:'ballons', img:'../images/pkCounting/balloons.png'}, {name:'hotdogs', img:'../images/pkCounting/hotdogs.png'}];

      randomize = function(arr) {
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

// randomize, create new array, cut down to 3 indexes,
      vm.displayPattern = function() {
        var random = randomize(patternOptions);
        var pattern = [random[0], random[1], random[2], random[0], random[1], {name:'question', img:'../images/question_mark.png'}];
        var preRandomOptions = [random[2], random[1], random[6], random[4] ]
        var finalOptions = randomize(preRandomOptions);
        answer = finalOptions.indexOf(random[2])
        console.log(finalOptions);
        console.log(answer);
        for (var i = 0; i < pattern.length; i++) {
        $('#k-board').append('<img src="' + pattern[i].img + '" />');
        };
        for (var i = 0; i < finalOptions.length; i++) {
        $('#k-answers').append('<img src="' + finalOptions[i].img + '" />');
        };
      }
      ////////?????????????? answer = index of random[2],
// randomize again (new array) push answer into array, randomize against
// put pattern on top (big images) first a (possibly a question mark pic) rray, with last index blank, put 4 possible answers below (smaller)
// clicking image
// maybe have function that changes a variable on the controller, variable value will determine winner. (need to make sure we are passing the correct win info in the global 'answer' variable above )



  } // End of controller TODO: remove before production
