
  angular
    .module('academy', ['ngRoute'])
    .config(config);
//Great use of angular routing.
    config.$inject = ['$routeProvider', '$locationProvider']
    function config ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/',{
          templateUrl: './views/templates/homePage.html'
        })
        .when('/select', {
          templateUrl: '/views/templates/gradeSelect.html',
          controllerAs: 'gradeSelectCtrl',
          controller: 'gradeSelectController'
        })
        .when('/pkShapes', {
          templateUrl: '/views/templates/pkShapes.html',
          controllerAs: 'pkShapesCtrl',
          controller: 'pkShapesController'
        })
        .when('/pkColors', {
          templateUrl: '/views/templates/pkColors.html',
          controllerAs: 'pkColorsCtrl',
          controller: 'pkColorsController'
        })
        .when('/pkCounting', {
          templateUrl: '/views/templates/pkCounting.html',
          controllerAs: 'pkCountingCtrl',
          controller: 'pkCountingController'
        })
        .when('/kPatterns', {
          templateUrl: '/views/templates/kPatterns.html',
          controllerAs: 'kPatternsCtrl',
          controller: 'kPatternsController'
        })
        .when('/kAssociations', {
          templateUrl: '/views/templates/kAssociations.html',
          controllerAs: 'kAssociationsCtrl',
          controller: 'kAssociationsController'
        })
        .when('/kMath', {
          templateUrl: '/views/templates/kMath.html',
          controllerAs: 'kMathCtrl',
          controller: 'kMathController'
        })
        .when('/booklist', {
          templateUrl: '/views/templates/bookOptions.html',
          controllerAs: 'bookOptionsCtrl',
          controller: 'bookOptionsController'
        })
        .when('/stinky', {
          templateUrl: '/views/templates/stinky.html',
          controllerAs: 'stinkyCtrl',
          controller: 'stinkyController'
        })



      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

    }
