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


    $scope.inReadOnlyMode = false;
    $scope.toggleEditMode = function () {
        // look for the resume

        if ($scope.inReadOnlyMode == true){
             $scope.inReadOnlyMode = false }
        else { 
            $scope.inReadOnlyMode = true }
    
    }

    $scope.inReadOnlyModeCL = false;
    $scope.toggleEditModeCL = function () {
        // look for the resume

        if ($scope.inReadOnlyModeCL == true){
             $scope.inReadOnlyModeCL = false }
        else { 
            $scope.inReadOnlyModeCL = true }
    
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


    
    $scope.NewObj = new Object();

    $scope.AddNewObj = function (funcType) {

         
        $scope.NewObj.type = funcType;
        $scope.NewObj.title = "";
        $scope.NewObj.description= "";
        $scope.NewObj.content= "";
        $scope.NewObj.file= "Drag & Drop File";
        

        switch (funcType) {
            case 'resume':
               
                  $scope.NewObj.AddNewFunc=$scope.addNewResume;
                  $scope.NewObj.panelTitle="Resume";        
             break;
             case 'coverLetter':
               
                 $scope.NewObj.AddNewFunc=$scope.addNewCoverLetter;
                 $scope.NewObj.panelTitle="Cover Letter";        
             break; 
        }
    }

    
    // $scope.NewObj={
    //     "title":"",
    //     "description":"",
    //     "file":"Drag & Drop File"
    // }

   
    
   

    $scope.addNewResume = function () {   
         //alert('add new resume' + $scope.NewObj.file);
        
        
        $(".accordion-line").collapse('hide');
        // $(".collapse").collapse('hide');
        var addedIndex = sharedService.addNewResumeRecord($scope.NewObj.title, $scope.NewObj.description, $scope.NewObj.file);
        
        
        setTimeout(function() {
            
            $("#"+addedIndex).collapse('show');
        }, 0);
        $scope.NewObj.title="";
        //toggleEditMode();
        $scope.SelectedObj = $scope.resumeArr[$scope.resumeArr.length-1] ;

        // $("#"+addedIndex).collapse('show');
      
       
    }
    $scope.fileWasSelected = function (obj) {         
        $scope.NewObj.file = obj.files[0].name;        
        $scope.$apply();
        
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
        var addedIndex = sharedService.addNewCoverLetterRecord($scope.NewObj.title,$scope.NewObj.description,$scope.NewObj.content );        
        setTimeout(function() {
            
            $("#"+addedIndex).collapse('show');
        }, 0);
        $scope.NewObj.title="";        
        $scope.SelectedObj = $scope.coverLetterArr[$scope.coverLetterArr.length-1] ;
        

    }

    $scope.myValue="check";

});