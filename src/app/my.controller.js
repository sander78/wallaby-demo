import MessageThing from './messagething.js';

class MyController {
  constructor($scope) {
    $scope.message = "Hello from controller! I also got a MessageThing saying: " + new MessageThing().getMessage();
  }
}

angular.module('wallaby-test').controller('MyController', MyController);
