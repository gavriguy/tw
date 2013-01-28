'use strict';

describe('Controller: Vod-CategoryCtrl', function() {

  // load the controller's module
  beforeEach(module('twModApp'));

  var Vod-CategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Vod-CategoryCtrl = $controller('Vod-CategoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
