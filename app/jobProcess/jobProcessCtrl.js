app.controller("jobProcessCtrl", function ($scope , $location , $window, sharedService) {

    $scope.jobProcesssArr = [];
    sharedService.filljobProcesssFile().then(function (jobProcesssArr) {
        $scope.jobProcesssArr = jobProcesssArr;
        //alert($scope.jobProcesssArr.length)
    }, function (error) {

        $log.error(error)
    });


$scope.newJobProcess={};  
var d = new Date();
$scope.newJobProcess.date = d;




});