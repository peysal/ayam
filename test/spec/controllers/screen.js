'use strict';

describe('Controller: ScreenCtrl', function () {

  // load the controller's module
  beforeEach(module('ayamApp'));

  var ScreenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreenCtrl = $controller('ScreenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
