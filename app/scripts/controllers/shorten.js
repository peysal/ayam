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
	    	 $scope.originalName.replace(/[aeiou]/ig,'').replace(/ /g,'').toUpperCase();
	    	$scope.transformedNameCount = $scope.transformedName.length;
    	} else {
            $scope.userMessage = {
                cssClass: 'alert alert-success',
                strong: 'Ok Kawan!',
                detail: 'Looks like ur characteristic less than 30. I don\'t need to work'
            };    
        }

    	if ($scope.transformedNameCount <= 30 && $scope.originalNameCount > 30) {
            $scope.userMessage.cssClass = 'alert alert-success';
            $scope.userMessage.strong = 'hooyahh!';
            $scope.userMessage.detail = 'I removed all the vowels character. Now its less than 30';
    	} else if ($scope.transformedNameCount > 30) {
            $scope.userMessage.cssClass = 'alert alert-danger';
            $scope.userMessage.strong = 'Alamak!!';
            $scope.userMessage.detail = 'I guess I failed to shorten ur characterisc to less than 30';
        }
    };
  });
