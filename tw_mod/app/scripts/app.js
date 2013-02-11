'use strict';

var twModApp = angular.module('twModApp', ['ui'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/bubbles', {
        templateUrl: 'views/bubbles.html',
        controller: 'BubblesCtrl'
      })
      .when('/item', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })
      .when('/ticker', {
        templateUrl: 'views/ticker.html',
        controller: 'TickerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
