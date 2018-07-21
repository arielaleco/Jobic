app.controller("resumeCtrl", function ($scope, $location, sharedService) {
    $scope.resumeArr = [];
    sharedService.fillResumeFile().then(function (resumeArr) {
        $scope.resumeArr = resumeArr;
    }, function (error) {

        $log.error(error)
    });

    $scope.inReadOnlyMode="true"
    $scope.toggleEditMode = function (resume) {
        // look for the resume
        
        if ($scope.inReadOnlyMode == "true")
         { $scope.inReadOnlyMode = "" }
         else
         { $scope.inReadOnlyMode = "true" }

        // var id = sharedService.findResumeById(resume.id);
        // if ($scope.resumeArr[id].editableNow == "true") { $scope.resumeArr[id].editableNow = "" }
        // else { $scope.resumeArr[id].editableNow = "true" }

        //alert("here");
        // make every things editable

    }

});