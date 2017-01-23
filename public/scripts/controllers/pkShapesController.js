console.log('pkShapesController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('pkShapesController', pkShapesController);

    pkShapesController.$inject = ['$http'];
    function pkShapesController ($http) {
      var vm = this;
      var targetShape;
      var activeGame = 1; //global to identify present game type

      var shapes = [{name:'square', img:'../images/pkShapes/square.png'}, {name:'circle', img:'../images/pkShapes/circle.png'}, {name:'triangle', img:'../images/pkShapes/triangle.png'}, {name:'rectangle', img:'../images/pkShapes/rectangle.png'}];

      vm.alternateGameStyle = function() {
        activeGame === 1 ? vm.displayOneShape() : vm.displayManyShapes();
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

      //button display: for loop that loops through the randomized array and outputs a button. 4 times. name and iswinner arg will be created using index number. consider using .append()

      vm.displayOneShape = function() {
        targetShape = shapes[Math.floor(Math.random() * shapes.length)];
        // var randomShapes = vm.randomize(shapes); //not needed unless i can figure out how to get the buttons to appear dinamically
        $('#pk-directions h1').text('What shape is this?');
        $('#pk-board').prepend('<img class="one-shape" src="' + targetShape.img + '" />');
        $('#pk-answer-btns').attr('style', 'visibility:visible');
        activeGame = 0;
      }


      // vm.displayManyShapes = function() {
      //   $('#pk-board h2').text(' ')
      //   var randomShapes = vm.randomize(shapes);
      //   targetShape = randomShapes[Math.floor(Math.random() * randomShapes.length)];
      //   $('#pk-directions h1').text('Can you find the ' + targetShape.name + '?')
      //   $('#pk-board').prepend('<img src="' + randomShapes[0].img + '" />' + ' ' + '<img src="' + randomShapes[1].img + '" />' + ' ' + '<img src="' + randomShapes[2].img + '" />' + ' ' + '<img src="' + randomShapes[3].img + '" />');
      //   activeGame = 1
      // }

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
      }


      //TODO: deactivate buttons after inital answer
      vm.checkForWinner = function(shape) {
        $('#pk-board h2').text('');
        if (shape == targetShape.name) {
          $('#pk-directions h1').text("Great Job! You did it!");
        }
        else {
          $('#pk-directions h1').text("Woops, not quite right");
          $('#pk-board h2').text('That was a ' + targetShape.name);
        };
        $('#pk-answer-btns').attr('style', 'visibility:hidden');
          for (var i = 0; i < 4; i++) {
            $('#cshape-' + i ).attr('style', 'height:0px');
          }
        $('#pk-many-shapes').attr('style', 'visibility:hidden');
        $('.action').text('Next');
        $('.one-shape').remove();
      };




    } // End of controller TODO: remove before production
