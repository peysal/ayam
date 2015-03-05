'use strict';

/**
 * @ngdoc function
 * @name ayamApp.controller:ShortenCtrl
 * @description
 * # ShortenCtrl
 * Controller of the ayamApp
 */
angular.module('ayamApp')
  .controller('ShortenCtrl', function ($scope) {
    $scope.originalNameCount = 0;
    $scope.transformedNameCount = 0;

    $scope.henshin = function() {
    	$scope.originalNameCount = $scope.originalName.length;
    	$scope.transformedName = $scope.originalName;
    	$scope.transformedNameCount = $scope.transformedName.length;
    };

  });
