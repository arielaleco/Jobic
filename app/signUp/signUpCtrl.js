app.controller("signUpCtrl", function ($scope , $location , user) {

    $scope.registerUser = function () {
   
        // add use to list 
        user.registerUser($scope.signUpUser)

        $location.path("/profile" );
        
    }
    $scope.signUpUser={};
    // $scope.signUpUser.fName="";    
    // $scope.signUpUser.lname="";
    // $scope.signUpUser.email="";
    // $scope.signUpUser.password="";

    // $scope.fName="";
    // $scope.lName="";
    // $scope.email="";
    // $scope.password="";
   
});