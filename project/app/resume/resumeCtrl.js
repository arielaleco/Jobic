app.controller("resumeCtrl", function ($scope , $location,sharedService) {
    $scope.resumeArr = [];
    sharedService.fillResumeFile().then(function (resumeArr)  {
        $scope.resumeArr = resumeArr;
    }, function (error) {

        $log.error(error)
    });

});