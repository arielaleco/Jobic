app.controller("resumeCtrl", function ($scope, $location, sharedService) {

    $scope.confirmationDialogConfig = {};
    $scope.confirmationDialog = function () {
        $scope.confirmationDialogConfig = {
            title: "Caution!!!",
            message: "Are you sure you want to delete?",
            buttons: [{
                label: "Delete",
                action: "delete"
            }]
        };
        $scope.showDialog(true);
    };
    $scope.showDialog = function (flag) {
        jQuery("#confirmation-dialog .modal").modal(flag ? 'show' : 'hide');
    };
    $scope.executeDialogAction = function (action) {
        if (typeof $scope[action] === "function") {
            $scope[action]();
        }
    };

    $scope.reset = function () {
        console.log("Resetting...");
        $scope.showDialog();
    };

    $scope.delete = function () {
        console.log("Deleting...");
        $scope.showDialog();
    };

    $scope.save = function () {
        console.log("Saving...");
        $scope.showDialog();
    };







    $scope.resumeArr = [];
    sharedService.fillResumeFile().then(function (resumeArr) {
        $scope.resumeArr = resumeArr;
    }, function (error) {

        $log.error(error)
    });


    $scope.inReadOnlyMode = "true"
    $scope.toggleEditMode = function () {
        // look for the resume

        if ($scope.inReadOnlyMode == "true"){
             $scope.inReadOnlyMode = "" }
        else { 
            $scope.inReadOnlyMode = "true" }

        // var id = sharedService.findResumeById(resume.id);
        // if ($scope.resumeArr[id].editableNow == "true") { $scope.resumeArr[id].editableNow = "" }
        // else { $scope.resumeArr[id].editableNow = "true" }

        //alert("here");
        // make every things editable

    }
    $scope.accordionWasClicked = function () {
        $scope.inReadOnlyMode = "true";
    }

    $scope.DeleteResume = function (resume) {
        sharedService.deleteResumeRecord(resume);
        // if (confirm("Delete This resume " + resume.title + "?")) {
           
        // }

        // mscConfirm("Delete?",function(){
        //     alert("Post deleted");
        //   });

    }
    $scope.addNewResume = function () {
        $(".collapse").collapse('hide');
        var addedIndex = sharedService.addNewResumeRecord();
        alert(addedIndex);

        
        $("#"+addedIndex).collapse('show');
      
       // $(".collapse").collapse('toggle');
    }

    $scope.collapseAllResume = function () {
      //  $(".collapse").collapse('toggle');
        $("#Resume4").collapse('toggle');
    }

    //=============================================================
    $scope.coverLetterArr = [];
    sharedService.fillCoverLetterFile().then(function (coverLetterArr) {
        $scope.coverLetterArr = coverLetterArr;
    }, function (error) {

        $log.error(error)
    });

    
    $scope.DeleteCoverLetter = function (coverLetter) {
        if (confirm("Delete This cover Letter " + coverLetter.title + "?")) {
            sharedService.deleteCoverLetterRecord(coverLetter);
        }

        // mscConfirm("Delete?",function(){
        //     alert("Post deleted");
        //   });

    }
    $scope.addNewCoverLetter = function () {
        $(".collapse").collapse('hide');
        sharedService.addNewCoverLetterRecord();       
    }

});