app.controller("dashBoardCtrl", function ($scope , $location, chatService) {


    $scope.chatArr = [];
    chatService.fillChatFile().then(function (chatArr) {
        $scope.chatArr = chatArr;
    }, function (error) {

        $log.error(error)
    });


   

});