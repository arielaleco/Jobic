app.controller("mainMenuDirectiveCtrl", function ($scope, $location, sharedService) {

{{5+5}}
    $scope.isActive = function (viewLocation) {
        
        var active = (viewLocation === $location.path());
        // alert(active);
        return active;
   };



});