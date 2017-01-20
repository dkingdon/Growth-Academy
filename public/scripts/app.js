console.log('app.js is connected') // TODO: remove before production

  angular
    .module('academy', ['ngRoute'])
    .config(config);

    config.$inject = ['$routeProvider', '$locationProvider']
    function config ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/',{
          templateUrl: './views/templates/homePage.html',
          controllerAs: 'homePageCtrl',
          controller: 'homePageController'
        })
        .when('/select', {
          templateUrl: '/views/templates/gradeSelect.html',
          controllerAs: 'gradeSelectCtrl',
          controller: 'gradeSelectController'
        })
        .when('/options', {
          templateUrl: '/views/templates/activityOptions.html',
          controllerAs: 'activityOptionsCtrl',
          controller: 'activityOptionsController'
        })
        .when('/activity', {
          templateUrl: '/views/templates/activity.html',
          controllerAs: 'activityCtrl',
          controller: 'activityController'
        })



      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

    } //END of config function TODO: romove before production
