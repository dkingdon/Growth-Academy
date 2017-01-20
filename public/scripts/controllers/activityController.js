console.log('activityController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('activityController', activityController);

    activityController.$inject = ['$http'];
    function activityController ($http) {
      var vm = this;


    } // End of controller TODO: remove before production
