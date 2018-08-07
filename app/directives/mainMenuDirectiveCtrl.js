app.controller("mainMenuDirectiveCtrl", function ($scope, $location, sharedService,user) {


    $scope.isActive = function (viewLocation) {
        
        var active = (viewLocation === $location.path());
        // alert(active);
        return active;
   };
   $scope.isUserLoggedIn = function() {
    return user.isLoggedIn();
}
$scope.logout = function() {
    user.logout();
    $location.path("/");
}

});