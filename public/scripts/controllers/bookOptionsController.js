console.log('bookOptionsController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('bookOptionsController', bookOptionsController);

    bookOptionsController.$inject = ['$http'];
    function bookOptionsController ($http) {
      var vm = this;


    } // End of controller TODO: remove before production
