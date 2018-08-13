app.controller("sendCVCtrl", function ($scope, $location, $window, sharedService, user) {

 // Checking if the user is logged in, if not navigating back to home page
//  if (!user.isLoggedIn()) {
//     $location.path("/");
//     return;
// }

    $scope.cvSentArr = [];
    sharedService.fillcvSentsFile().then(function (cvSentArr) {
        $scope.cvSentArr = cvSentArr;
    }, function (error) {

        $log.error(error)
    });


    $scope.newCV = {};
    var d = new Date();
    $scope.newCV.date = d;
    $scope.newCV.email = "arielaleco@gmail.com";
    // $scope.newCV.date = d.toDateString();


    $scope.SaveCV = function () {
        if ($scope.newCV.resumeVersion != undefined) { 
            $scope.newCV.resumeVersionId = $scope.newCV.resumeVersion.id; 
        }
        if ($scope.newCV.coverLetterVersion != undefined) {
             $scope.newCV.coverLetterVersionId = $scope.newCV.coverLetterVersion.id;
             }
        if ($scope.newCV.protfolioVersion != undefined) {
             $scope.newCV.protfolioVersionId = $scope.newCV.protfolioVersion.id;
             }


        sharedService.addNewSentCV($scope.newCV);

        // notify the user

        // move to card View
        $('[ data-target="#cardView"]').tab('show');

        // clen the fields from the last sent !
    }

    $scope.SendAndSaveCV = function () {
        // validation check - confirmation 

        var template_params = {
            email_to: $scope.newCV.email,
            email_from: user.getActiveUser().email,

            message_subject: $scope.newCV.JobTitle + " position at " + $scope.newCV.company,
            message_content: $scope.newCV.coverLetterVersion.content

        }
        // take the cover letter content and place it    
        var service_id = "default_service";
        var template_id = "jobic";
        emailjs.send(service_id, template_id, template_params);
        SaveCV();


        // var mail = 'mailto:{{$scope.newCV.email}}?subject=' + $scope.newCV.description +
        //            '&body=' + $scope.newCV.description;
        //  $window.open(mail);    







        // 


    }


});