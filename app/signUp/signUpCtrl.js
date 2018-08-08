app.controller("signUpCtrl", function ($scope , $location) {

    $scope.registerUser = function () {
   
        
        
        $location.path("/profile" );
        
    }
    $scope.fName="";
    $scope.lName="";
    $scope.email="";
    $scope.password="";
   
});