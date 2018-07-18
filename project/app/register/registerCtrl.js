app.controller("registerCtrl", function ($scope , $location) {

    $scope.SignUp = function () {
       
        $location.path("/register" );
        alert("here");
    }

});