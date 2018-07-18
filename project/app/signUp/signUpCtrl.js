app.controller("signUpCtrl", function ($scope , $location) {

    $scope.registerUser() = function () {
       
        $location.path("/register" );
        alert("here");
    }

});