app.controller("profileCtrl", function ($scope , $location) {

    $scope.showResume = function () {
       
        $location.path("/resume" );
        
    }

});