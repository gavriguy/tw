'use strict';

describe('Controller: TickerCtrl', function() {

  // load the controller's module
  beforeEach(module('twModApp'));

  var TickerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    TickerCtrl = $controller('TickerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
