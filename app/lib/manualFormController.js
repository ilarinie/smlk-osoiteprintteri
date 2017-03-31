app.controller('manualFormController', ['$scope', function($scope) {

    $scope.frontPage = function() {
        startFrontPage();
    }

    $scope.print = function(){
      chrome.app.window.create("lib/print.html?bankname=" + $scope.line1 + "&office=" + $scope.line2 + "&address=" + $scope.address + "&city=" + $scope.city + "&message=" + $scope.message + "&orignumber=", {
          'outerBounds': {
              'width': 900,
              'height': 900
          }
      });
    }

    $scope.filled = function() {
      return !(($scope.line1 || $scope.line2) && $scope.address && $scope.city && $scope.message);
    }

}]);
