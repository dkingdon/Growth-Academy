console.log('activityController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('activityController', activityController);

    activityController.$inject = ['$http'];
    function activityController ($http) {
      var vm = this;

      /* - - - temp - - - */
      var shapes = ['square', 'circle', 'triangle', 'rectangle'];

      var randomShape = shapes[Math.floor(Math.random() * shapes.length)];

      vm.displayShape = function() {
        randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        $('#pk-directions h1').text('What shape is this?');
        $('#pk-board h2').text(randomShape);
      }




    } // End of controller TODO: remove before production
