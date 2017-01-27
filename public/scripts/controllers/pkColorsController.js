
  angular
    .module('academy')
    .controller('pkColorsController', pkColorsController);

    pkColorsController.$inject = ['$http'];
    function pkColorsController ($http) {
      var vm = this;
      var targetColor;
      var activeGame = 1;

//Eventually you'll probably want to host images somewhere on the web/in the cloud instead of locally
//This might be somewhat slow on Heroku though.
      var colors = [{name:'red', img: '../images/pkColors/red.png'}, {name:'blue', img:'../images/pkColors/blue.png'}, {name:'yellow', img:'../images/pkColors/yellow.png'}, {name:'green', img:'../images/pkColors/green.png'}];

      vm.alternateGameStyle = function() {
        activeGame === 1 ? vm.displayOneColor() : vm.displayManyColors();
        $('#pk-board h2').text('');
      }

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

      vm.displayOneColor = function() {
        targetColor = colors[Math.floor(Math.random() * colors.length)];
        $('#pk-directions h1').text('What color is this?');
        $('#pk-board').prepend('<img class="one-color" src="' + targetColor.img + '" />');
        $('#pk-answer-btns').attr('style', 'visibility:visible');
        activeGame = 0;
        $('.action').attr('style', 'visibility:hidden');
      }


      vm.displayManyColors = function() {
        $('#pk-board h2').text(' ')
        $('#pk-many-colors').attr('style', 'visibility:visible');
        var randomColors = vm.randomize(colors);
        targetColor = randomColors[Math.floor(Math.random() * randomColors.length)];
        $('#pk-directions h1').text('Can you find the color ' + targetColor.name + '?')
        for (var i = 0; i < randomColors.length; i++) {
            $('#color-' + i ).attr('style', ' ');
        }
        activeGame = 1
        $('.action').attr('style', 'visibility:hidden');
      }

      vm.checkForWinner = function(color) {
        $('#pk-board h2').text('');
        if (color == targetColor.name) {
          $('#pk-directions h1').text("Great Job! You did it!");
        }
        else {
          $('#pk-directions h1').text("Woops, not quite right");
          $('#pk-board h2').text('The color you chose was ' + color);
        };
        $('#pk-answer-btns').attr('style', 'visibility:hidden');
          for (var i = 0; i < 4; i++) {
            $('#color-' + i ).attr('style', 'height:0px');
          }
        $('#pk-many-colors').attr('style', 'visibility:hidden');
        $('.action').text('Next').attr('style', 'visibility:visible');;
        $('.one-color').remove();
      };

    }
