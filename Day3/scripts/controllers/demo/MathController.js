hrApp.controller('MathController', ['$scope', 'MathService', function($scope, MathService){
    
    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
        $scope.op1 = MathService.add($scope.add1, $scope.add2);
        $scope.op2 = MathService.substract($scope.add1, $scope.add2);
        $scope.op3 = MathService.mult($scope.add1, $scope.add2);
        $scope.op4 = MathService.division($scope.add1, $scope.add2);

//        TODO #13 refactor your calculations using MathService
    }

}]);
