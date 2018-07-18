app.controller("landingPageCtrl", function ($scope , $location) {

    $scope.SignUp = function () {
       
        $location.path("/register" );
        
    }

});