app.controller("landingPageNewCtrl", function ($scope , $location) {

    // $scope.SignUp = function () {
       
    //     $location.path("/signUp" );
        
    // }

    $scope.SignIn = function () {
       
        $location.path("/dashBoard" );
        
    }

});