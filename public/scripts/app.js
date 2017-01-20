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
        .when('/pkShapes', {
          templateUrl: '/views/templates/pkShapes.html',
          controllerAs: 'pkShapesCtrl',
          controller: 'pkShapesController'
        })
        .when('/booklist', {
          templateUrl: '/views/templates/bookOptions.html',
          controllerAs: 'bookOptionsCtrl',
          controller: 'bookOptionsController'
        })
        .when('/book', {
          templateUrl: '/views/templates/book.html',
          controllerAs: 'bookCrtl',
          controller: 'bookController'
        })



      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

    } //END of config function TODO: romove before production
