console.log('kPatternsController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('kPatternsController', kPatternsController);

    kPatternsController.$inject = ['$http'];
    function kPatternsController ($http) {
      var vm = this;



  } // End of controller TODO: remove before production
