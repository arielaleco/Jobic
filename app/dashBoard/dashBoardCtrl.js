app.controller("dashBoardCtrl", function ($scope , $location, chatService,user, sharedService) {
 // Checking if the user is logged in, if not navigating back to home page
//    if (!user.isLoggedIn()) {
//     $location.path("/");
//     return;
//    }

    $scope.chatArr = [];
    chatService.fillChatFile().then(function (chatArr) {
        $scope.chatArr = chatArr;
    }, function (error) {

        $log.error(error)
    });

    $scope.labels = ['1-7 Jul 2018', '8-14 Jul 2018', '15-21 Jul 2018', '22-28 Jul 2018', '2010', '2011', '2012'];
    $scope.series = ['Sent', 'Desired'];
    $scope.data = [
        [1, 4, 8, 5, 7, 10, 5],
        [2, 7, 6, 2, 8, 2, 3]
      ];
      $scope.colors =['#4D5360', '#FDB45C'];


      $scope.LoggedInInUser = function() {
        return user.getActiveUser();
     }

     // suply a data set sorted by date read the Job Process array - prepare the structure

     $scope.jobProcesssArr = [];
     sharedService.filljobProcesssFile().then(function (jobProcesssArr) {
         $scope.jobProcesssArr = jobProcesssArr;

         // prepare the strcut
         



         console.log($scope.jobProcesssArr);
         //alert($scope.jobProcesssArr.length)
     }, function (error) {
  
         $log.error(error)
     });



});