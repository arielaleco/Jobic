app.controller("jobProcessCtrl", function ($scope , $location , sharedService) {

    $scope.cvSentArr = [];
    sharedService.fillcvSentsFile().then(function (cvSentArr) {
        $scope.cvSentArr = cvSentArr;
    }, function (error) {

        $log.error(error)
    });


$scope.newCV={};  
$scope.SendAndSaveCV = function(){
    // send 

    // save

    sharedService.addNewSentCV($scope.newCV);
  

    // this.company = anObj.company;
    // this.JobTitle = anObj.JobTitle;
    // this.email = anObj.email;
    // this.linkToAdSource = anObj.linkToAdSource;
    // this.description = anObj.description;
    // this.resumeVersion = anObj.resumeVersion;
    // this.coverLetterVersion = anObj.coverLetterVersion;
    // this.protfolioVersion = anObj.protfolioVersion;

    // this.date = anObj.date;



    // 


}


});