
  angular
    .module('academy')
    .controller('pkShapesController', pkShapesController);

    pkShapesController.$inject = ['$http'];
    function pkShapesController ($http) {
      var vm = this;
      var targetShape;
      var activeGame = 1;

      var shapes = [{name:'square', img:'../images/pkShapes/square.png'}, {name:'circle', img:'../images/pkShapes/circle.png'}, {name:'triangle', img:'../images/pkShapes/triangle.png'}, {name:'rectangle', img:'../images/pkShapes/rectangle.png'}];

      vm.alternateGameStyle = function() {
        activeGame === 1 ? vm.displayOneShape() : vm.displayManyShapes();
        $('#pk-board h2').text(' ');
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

      vm.displayOneShape = function() {
        targetShape = shapes[Math.floor(Math.random() * shapes.length)];
        $('#pk-directions h1').text('What shape is this?');
        $('#pk-board').prepend('<img class="one-shape" src="' + targetShape.img + '" />');
        $('#pk-answer-btns').attr('style', 'visibility:visible');
        activeGame = 0;
        $('.action').attr('style', 'visibility:hidden');
      }

      vm.displayManyShapes = function() {
        $('#pk-board h2').text(' ')
        $('#pk-many-shapes').attr('style', 'visibility:visible');
        var randomShapes = vm.randomize(shapes);
        targetShape = randomShapes[Math.floor(Math.random() * randomShapes.length)];
        $('#pk-directions h1').text('Can you find the ' + targetShape.name + '?')
        for (var i = 0; i < randomShapes.length; i++) {
            $('#shape-' + i ).attr('style', ' ');
        }
        activeGame = 1
        $('.action').attr('style', 'visibility:hidden');

      }

      vm.checkForWinner = function(shape) {
        $('#pk-board h2').text(' ');
        if (shape == targetShape.name) {
          $('#pk-directions h1').text("Great Job! You did it!");
        }
        else {
          $('#pk-directions h1').text("Woops, not quite right");
          $('#pk-board h2').text('That was a ' + targetShape.name);
        };
        $('#pk-answer-btns').attr('style', 'visibility:hidden');
          for (var i = 0; i < 4; i++) {
            $('#shape-' + i ).attr('style', 'height:0px');
          }
        $('#pk-many-shapes').attr('style', 'visibility:hidden');
        $('.action').text('Next').attr('style', 'visibility:visible');
        $('.one-shape').remove();
      };

    } 
