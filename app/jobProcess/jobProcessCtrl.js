app.controller("jobProcessCtrl", function ($scope , $location , $window, sharedService) {

    $scope.cvSentArr = [];
    sharedService.fillcvSentsFile().then(function (cvSentArr) {
        $scope.cvSentArr = cvSentArr;
    }, function (error) {

        $log.error(error)
    });


$scope.newCV={};  
var d = new Date();
$scope.newCV.date = d;
$scope.newCV.email="arielaleco@gmail.com";
// $scope.newCV.date = d.toDateString();

$scope.SendAndSaveCV = function(){
    // validation check - confirmation 
    
    // send the email
    // get the content of the cover letter

    var mail = 'mailto:$scope.newCV.email?subject=' + $scope.newCV.description +
               '&body=' + $scope.newCV.description;
     $window.open(mail);
 
    
    // send 

    // save

    sharedService.addNewSentCV($scope.newCV);
  
    // notify the user

    // move to card View
    $('[ data-target="#cardView"]').tab('show');

// clen the fields from the last sent !

    



    // 


}


});