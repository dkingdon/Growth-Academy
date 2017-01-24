console.log('kinderOptionsController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('kinderOptionsController', kinderOptionsController);

    kinderOptionsController.$inject = ['$http'];
    function kinderOptionsController ($http) {
      var vm = this;



  } // End of controller TODO: remove before production
