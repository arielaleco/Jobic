app.controller("confirmationController", function ($scope, $location, sharedService ) {

    $scope.confirmationDialogConfig = {};
  
    $scope.confirmationDialog = function(resume) {
      //  alert(resume.id);
      $scope.confirmationDialogConfig = {
        title: "Caution!!!",
        message: "Are you sure you want to delete " +resume.title+"?",
        buttons: [{
          label: "Delete",
          action: "delete"
        }]
      };
      $scope.showDialog(true);
    };
  
    $scope.multiConfirmationDialog = function() {
      $scope.confirmationDialogConfig = {
        title: "Select Operation...",
        message: "Please select which operation you would like to perform.",
        buttons: [{
          label: "Reset",
          action: "reset"
        }, {
          label: "Delete",
          action: "delete"
        }, {
          label: "Save",
          action: "save"
        }]
      };
      $scope.showDialog(true);
    };
  
    $scope.executeDialogAction = function(action,obj) {
      //  alert(obj.id);
      if(typeof $scope[action] === "function") {
                $scope[action](obj);
          }
    };
  
    $scope.reset = function() {
      console.log("Resetting...");
      $scope.showDialog();
    };
    
    $scope.delete = function(obj) {
        sharedService.deleteResumeRecord(obj);
      console.log("Deleting...");
        
      
      
      
      $scope.showDialog();
    };
    
    $scope.save = function() {
      console.log("Saving...");
      $scope.showDialog();
    };
    
    $scope.showDialog = function(flag) {
      jQuery("#confirmation-dialog .modal").modal(flag ? 'show' : 'hide');
    };


});