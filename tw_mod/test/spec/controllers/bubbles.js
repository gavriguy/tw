'use strict';

describe('Controller: BubblesCtrl', function() {

  // load the controller's module
  beforeEach(module('twModApp'));

  var BubblesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    BubblesCtrl = $controller('BubblesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
