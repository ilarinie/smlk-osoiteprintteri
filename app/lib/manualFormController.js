app.controller('manualFormController', ['$scope', function($scope) {

    $scope.frontPage = function() {
        window.location = "index.html";
    }

       $scope.print = function() {
        window.open("lib/print.html?bankname=" + $scope.line1 + "&office="+ $scope.line2 +"&address=" + $scope.address  + "&city=" + $scope.city + "&orignumber=&message=" + $scope.message);

    }


}]);