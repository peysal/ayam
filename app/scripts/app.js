'use strict';

/**
 * @ngdoc overview
 * @name ayamApp
 * @description
 * # ayamApp
 *
 * Main module of the application.
 */
angular
  .module('ayamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/shorten', {
        templateUrl: 'views/shorten.html',
        controller: 'ShortenCtrl'
      })
      .when('/screen', {
        templateUrl: 'views/screen.html',
        controller: 'ScreenCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
