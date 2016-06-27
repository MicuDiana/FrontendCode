/**
 * Created by Diana Maria on 26.06.2016.
 */
hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.demoActionList = [
        {
            label:"OtherScope",
            url: "views/childscope.html"
        },
        {
            label:"DemoMath",
            url:"views/demomath.html"
        }
    ];
}
]);

