app.factory('chatService', function ($log, $q, $http) {
    
    chatArr = [];
    function Chat(anObj ) {
        this.userName = anObj.userName;
        this.imageUrl  = anObj.imageUrl;
        this.date  = anObj.date;
        this.title  = anObj.title;        
        this.likes = anObj.likes;
        this.status = anObj.status;
        
    }
    
      // ================= Read the Chat files ================= 
      readChatFile();
      function readChatFile() {
          // read json file
          $http.get("app/shared/chat.json").then(function Succsess(response) {
              response.data.forEach(function AddChat(anObj) {

                chatArr.push(new Chat(anObj))
                   
              });
          },
  
              function Error() {
                  $log.Error;
              });
  
      }

      function fillChatFile() {
        // define asynchronous object
        var asyncAction = $q.defer();       
        asyncAction.resolve(chatArr);
        return asyncAction.promise;
    }



    return {
        fillChatFile : fillChatFile
        
    }

});