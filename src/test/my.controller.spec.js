
/*global describe, it, beforeEach, inject, expect, angular*/
(function () {
  'use strict';

  beforeEach(angular.mock.module('wallaby-test'));

  describe('myController', function () {
    var scope, myController;

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      console.log($controller);
      myController = $controller('MyController', {$scope: scope});
    }));

    it('should have left a message on the scope', function () {
      expect(scope).toBeDefined();
      expect(myController).toBeDefined();
      expect(scope.message).toBe('Hello from controller! I also got a MessageThing saying: message from thing');
    });
  });
}());