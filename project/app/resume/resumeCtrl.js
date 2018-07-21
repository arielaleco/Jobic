app.controller("resumeCtrl", function ($scope, $location, sharedService ) {

    $scope.confirmationDialogConfig = {};
    $scope.confirmationDialog = function() {
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
      $scope.showDialog = function(flag) {
        jQuery("#confirmation-dialog .modal").modal(flag ? 'show' : 'hide');
      };
      $scope.executeDialogAction = function(action) {
        if(typeof $scope[action] === "function") {
                  $scope[action]();
            }
      };
    
      $scope.reset = function() {
        console.log("Resetting...");
        $scope.showDialog();
      };
      
      $scope.delete = function() {
        console.log("Deleting...");
        $scope.showDialog();
      };
      
      $scope.save = function() {
        console.log("Saving...");
        $scope.showDialog();
      };







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
    $scope.accordionWasClicked = function (){
        $scope.inReadOnlyMode="true";
    }

    $scope.DeleteResume = function(resume){
        mscConfirm("Delete?",function(){
            alert("Post deleted");
          });

    }

    
      
  

});