(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.foodList = "";
  $scope.lunchMsg = "";

  $scope.tooMuchFood = function() {
    var tmpStr = $scope.foodList;
    var elements;

    if (tmpStr.length == 0) {
      $scope.lunchMsg = "Please enter data first";
    }
    else {
      elements = tmpStr.split(',');
      console.log(elements.length);
      if (elements.length < 4) {
        $scope.lunchMsg = "Enjoy!";
      }
      else {
        $scope.lunchMsg = "Too much!"
      }
    }
  };
console.log(LunchCheckController.toString());
}

})();