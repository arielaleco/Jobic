app.controller("profileCtrl", function ($scope , $location , user) {

    $scope.showResume = function () {
       
        $location.path("/resume" );
        
    }

    $scope.LoggedInInUser = function() {
        return user.getActiveUser();
     }


});