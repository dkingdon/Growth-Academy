console.log('activityOptionsController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('activityOptionsController', activityOptionsController);

    activityOptionsController.$inject = ['$http'];
    function activityOptionsController ($http) {
      var vm = this;


    } // End of controller TODO: remove before production
