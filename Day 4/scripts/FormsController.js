hrApp.controller('FormsController', ['$scope', function($scope) {
    $scope.submit = function(myForm){
        if(myForm.input.$valid == true)
            alert('Valid data!');
        else
            alert('Invalid data');
    };
}]);