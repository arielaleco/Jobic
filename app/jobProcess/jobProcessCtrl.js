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
    AddNewStageToJobProcess(jobProcess)

    

    // console.log($scope.newStageJobProcess);

    // $scope.newStageJobProcess = sharedService.addStageToJobProcessById(jobProcess.id);
    // $scope.$apply();
    
  }
  function AddNewStageToJobProcess(jobProcess)
  {
    $scope.newStageJobProcess={};  
    $scope.selectedJobProcess = jobProcess;        
    var d = new Date();
    $scope.newStageJobProcess.date = d.toDateString();
    $scope.newStageJobProcess.JobTitle = jobProcess.JobTitle;
  }


  $scope.ApplyNewStage = function (){
  
    $scope.newStageJobProcess = sharedService.addStageToJobProcess($scope.selectedJobProcess,$scope.newStageJobProcess);
   // $scope.$apply();
    
  }
  $scope.AddNewJobProcess = function(){

    if ($scope.newJobProcess.resumeVersion != undefined) { 
        $scope.newJobProcess.resumeVersionId = $scope.newJobProcess.resumeVersion.id; 
    }
    if ($scope.newJobProcess.coverLetterVersion != undefined) {
         $scope.newJobProcess.coverLetterVersionId = $scope.newJobProcess.coverLetterVersion.id;
         }
    if ($scope.newJobProcess.protfolioVersion != undefined) {
         $scope.newJobProcess.protfolioVersionId = $scope.newJobProcess.protfolioVersion.id;
         }


    sharedService.addNewJobProcess($scope.newJobProcess);
     // move to card View
     $('[ data-target="#cardView"]').tab('show');

    // open the modal window
     $('#ModalStageInput').modal({
        show: true
    });     
     // and click the add stage
     AddNewStageToJobProcess($scope.jobProcesssArr[$scope.jobProcesssArr.length-1]);


   $scope.newJobProcess={};
     
  }





});