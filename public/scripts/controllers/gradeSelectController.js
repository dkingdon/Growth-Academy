console.log('gradeSelectController.js is connected') //TODO: Revome before production

  angular
    .module('academy')
    .controller('gradeSelectController', gradeSelectController);

    gradeSelectController.$inject = ['$http'];
    function gradeSelectController ($http) {
      var vm = this;


    } // End of controller TODO: remove before production
