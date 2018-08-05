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
    
    }

    $scope.inReadOnlyModeCL = "true"
    $scope.toggleEditModeCL = function () {
        // look for the resume

        if ($scope.inReadOnlyModeCL == "true"){
             $scope.inReadOnlyModeCL = "" }
        else { 
            $scope.inReadOnlyModeCL = "true" }
    
    }


    $scope.SelectedObj={};

    $scope.accordionWasClicked = function (obj) {
        $scope.inReadOnlyMode = "true";
        $scope.SelectedObj = obj ;
  
    }

    $scope.DeleteObj = function (obj) {
        switch (obj.type) {
            case "coverLetter":
                 sharedService.deleteCoverLetterRecord(obj);
             break;
             case "resume":
                  sharedService.deleteResumeRecord(obj);
             break; 
        }
       
    }


    $scope.AddNewFunc=$scope.addNewResume;

    $scope.AddNewObj = function (funcType) {
        switch (funcType) {
            case 1:
                  $scope.AddNewFunc=$scope.addNewResume;
             break;
             case 2:
                 $scope.AddNewFunc=$scope.addNewCoverLetter;
             break; 
        }
    }

    $scope.addNew="";
    $scope.addNewResume = function () {      
        $(".accordion-line").collapse('hide');
        // $(".collapse").collapse('hide');
        var addedIndex = sharedService.addNewResumeRecord($scope.addNew);
        
        setTimeout(function() {
            
            $("#"+addedIndex).collapse('show');
        }, 200);
        $scope.addNew="";
        //toggleEditMode();
        $scope.SelectedObj = $scope.resumeArr[$scope.resumeArr.length-1] ;

        // $("#"+addedIndex).collapse('show');
      
       
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
        // $(".collapse").collapse('hide');
        // sharedService.addNewCoverLetterRecord();  
        
        $(".accordion-line").collapse('hide');
        
        var addedIndex = sharedService.addNewCoverLetterRecord($scope.addNew);
        
        setTimeout(function() {
            
            $("#"+addedIndex).collapse('show');
        }, 200);
        $scope.addNew="";        
        $scope.SelectedObj = $scope.coverLetterArr[$scope.coverLetterArr.length-1] ;
        

    }

    $scope.myValue="check";

});