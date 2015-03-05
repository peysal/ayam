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
    $scope.transformedPrefix = 'Prefix (3 characters)';

    $scope.henshin = function() {
    	$scope.transformedName = $scope.originalName;
    };

  });
