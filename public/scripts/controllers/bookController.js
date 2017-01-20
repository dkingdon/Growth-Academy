console.log('bookController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('bookController', bookController);

    bookController.$inject = ['$http'];
    function bookController ($http) {
      var vm = this;


    } // End of controller TODO: remove before production
