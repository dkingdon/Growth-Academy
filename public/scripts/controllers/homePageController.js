console.log('homePageController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('homePageController', homePageController);

    homePageController.$inject = ['$http'];
    function homePageController ($http) {
      var vm = this;


    } // End of controller TODO: remove before production
