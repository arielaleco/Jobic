app.controller("jobProcessCtrl", function ($scope , $location , $window, sharedService,user) {

 // Checking if the user is logged in, if not navigating back to home page
//  if (!user.isLoggedIn()) {
//     $location.path("/");
//     return;
// }

    $scope.jobProcesssArr = [];
    sharedService.filljobProcesssFile().then(function (jobProcesssArr) {
        $scope.jobProcesssArr = jobProcesssArr;
        console.log($scope.jobProcesssArr);
        //alert($scope.jobProcesssArr.length)
    }, function (error) {
 
        $log.error(error)
    });


$scope.newJobProcess={};  
var d = new Date();
$scope.newJobProcess.date = d;


$scope.selectedJobProcess={};  
$scope.newStageJobProcess={};  


$scope.AddNewStage = function (jobProcess){
    $scope.newStageJobProcess={};  
    $scope.selectedJobProcess = jobProcess;        
    var d = new Date();
    $scope.newStageJobProcess.date = d.toDateString();
    $scope.newStageJobProcess.JobTitle = jobProcess.JobTitle;

    // console.log($scope.newStageJobProcess);

    // $scope.newStageJobProcess = sharedService.addStageToJobProcessById(jobProcess.id);
    // $scope.$apply();
    
  }
  $scope.ApplyNewStage = function (){
  
    $scope.newStageJobProcess = sharedService.addStageToJobProcess($scope.selectedJobProcess,$scope.newStageJobProcess);
   // $scope.$apply();
    
  }
  $scope.AddNewJobProcess = function(){
    sharedService.addNewJobProcess($scope.newJobProcess);
     // move to card View
     $('[ data-target="#cardView"]').tab('show');
     // and click the add stage
   // AddNewStage($scope.jobProcesssArr[$scope.jobProcesssArr.length]);
   $scope.newJobProcess={};
     
  }





});