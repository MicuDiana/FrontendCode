/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('DescriptionController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.descriptionShow = true;

    $scope.resetFirstVariable = function(){
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val){
        $scope.firstVariable = val;
    };
    $scope.toggleDescriptionShow = function(){
        $scope.descriptionShow = !$scope.descriptionShow;
    };

}]);
