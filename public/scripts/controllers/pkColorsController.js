console.log('pkColorsController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('pkColorsController', pkColorsController);

    pkColorsController.$inject = ['$http'];
    function pkColorsController ($http) {
      var vm = this;
      var targetColor;
      var activeGame = 1;

      /* - - - temp - - - */
      // maybe have the array be objects with name and image ref. this way can associate the selection with the answers.
      var colors = [{name:'red', img: '../images/pkColors/red.png'}, {name:'blue', img:'../images/pkColors/blue.png'}, {name:'yellow', img:'../images/pkColors/yellow.png'}, {name:'green', img:'../images/pkColors/green.png'}];

      vm.alternateGameStyle = function() {
        activeGame === 1 ? vm.displayOneColor() : vm.displayManyColors();
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
      }

      //TODO: remove if cannot refactor. Parking here to come back to
      // for (var i = 0; i < randomColors.length; i++) {
      //   $('#color-' + i ).attr('src', randomColors[i].img);
      //     $('#color-' + i ).attr('style', ' ');
      //       $('#color-' + i ).attr('ng-click', "pkColorsCtrl.checkForWinner('" + randomColors[i].name + "')");
      // }


      //// end playing aronud



      //TODO: deactivate buttons after inital answer
      vm.checkForWinner = function(color) {
        $('#pk-board h2').text('');
        if (color == targetColor.name) {
          $('#pk-directions h1').text("Great Job! You did it!");
        }
        else {
          $('#pk-directions h1').text("Woops, not quite right");
          $('#pk-board h2').text('That was ' + targetColor.name);
        };
        $('#pk-answer-btns').attr('style', 'visibility:hidden');
          for (var i = 0; i < 4; i++) {
            $('#color-' + i ).attr('style', 'height:0px');
          }
        $('#pk-many-colors').attr('style', 'visibility:hidden');
        $('.action').text('Next');
        $('.one-color').remove();
      };




    } // End of controller TODO: remove before production
