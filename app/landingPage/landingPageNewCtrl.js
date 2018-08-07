app.controller("landingPageNewCtrl", function ($scope , $location ,user) {

    // $scope.SignUp = function () {
       
    //     $location.path("/signUp" );
        
    // }


    $scope.email = "arielaleco@gmail.com";
    $scope.password = "123";
    $scope.invalidLogin = false;


    $scope.SignIn = function () {       
        $scope.invalidLogin = false;
        user.login($scope.email, $scope.password).then(function(activeUser){
            $location.path("/dashBoard");
        }, function() {
            $scope.invalidLogin = true;
        })


       
        
    }

});