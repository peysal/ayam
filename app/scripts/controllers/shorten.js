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
    $scope.transformedPrefix = '';
    $scope.userMessage = {
        cssClass: 'alert alert-info',
        strong: 'Helloo Kawan!',
        detail: 'Put something into original name and prefix.'
    };

    $scope.henshin = function() {
    	$scope.originalNameCount = $scope.originalName.length;
    	if ($scope.originalNameCount > 30) {
	    	$scope.transformedName = $scope.transformedPrefix +
	    	 $scope.originalName.replace(/[aeiou]/ig,'');
	    	$scope.transformedNameCount = $scope.transformedName.length;
	    	//TODO make the original character count red
    	} else {
    		//TODO less than 30 then make the original character count green
    	}

    	if ($scope.transformedNameCount > 30) {
    		//TODO make the transformedName red
    	}
    };
  });
