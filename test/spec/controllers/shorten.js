'use strict';

describe('Controller: ShortenCtrl', function () {

  // load the controller's module
  beforeEach(module('ayamApp'));

  var ShortenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShortenCtrl = $controller('ShortenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
