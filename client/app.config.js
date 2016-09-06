console.log('hello from app.config.js AND composite.all.min.js');

var app = angular.module('comicApp_v2', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/shopping', {
      templateUrl: 'views/partials/shopping.html',
      controller: 'ShoppingController',
      controllerAs: 'shopping'
    })
    .when('/backlog', {
      templateUrl: 'views/partials/backlog.html',
      controller: 'BacklogController',
      controllerAs: 'backlog'
    })
    .when('/history', {
      templateUrl: 'views/partials/history.html',
      controller: 'HistoryController',
      controllerAs: 'history'
    })

  $locationProvider.html5Mode(true);

}]);//closes app.config
