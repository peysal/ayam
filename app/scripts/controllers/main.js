'use strict';

/**
 * @ngdoc function
 * @name ayamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ayamApp
 */
angular.module('ayamApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
