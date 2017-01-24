console.log('kMathController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('kMathController', kMathController);

    kMathController.$inject = ['$http'];
    function kMathController ($http) {
      var vm = this;



  } // End of controller TODO: remove before production
