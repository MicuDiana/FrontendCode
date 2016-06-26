/**
 * Created by Diana Maria on 27.06.2016.
 */
hrApp.controller('MathController',['$scope', function ($scope) {
    $scope.result = 0;
    $scope.adding = function () {
        $scope.result=parseInt($scope.a1) + parseInt($scope.a2);
    };

    $scope.subtraction =function () {
        $scope.result=parseInt($scope.a1)- parseInt($scope.a2);
    };

    $scope.multiplication=function () {
      $scope.result=parseInt($scope.a1)* parseInt($scope.a2);
    };

    $scope.division=function () {
        $scope.result=parseInt($scope.a1) / parseInt($scope.a2);
    };
}]);