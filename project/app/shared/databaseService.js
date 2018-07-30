app.factory('databaseService', function ($log, $q, $http) {

    // var ResumeData;
    // var CoverLetterData;
    // var CVSentData;        
    // readDatabaseFile();
    // function readDatabaseFile() {
    //     $http.get("app/shared/database.json").then(function Succsess(response) {
    //         ResumeData =  response.data.resume;            
    //         CoverLetterData = response.data.coverLetters;           
    //         CVSentData = response.data.cvSent;           
    //     },

    //         function Error() {
    //             $log.Error;
    //         });

    // }

    // function readDataFromDatabase() {
    //     // define asynchronous object
    //     var asyncAction = $q.defer();
    //     asyncAction.resolve(resumeArr);
    //     return asyncAction.promise;
    // }


    // function getResumeData()
    // {
    //   return ResumeData;
    // }
    // function getCoverLetterData()
    // {
    //   return CoverLetterData;
    // }
    // function getCVSentData()
    // {
    //   return CVSentData;
    // }

return {
        // getResumeData: getResumeData,
        // getCoverLetterData: getCoverLetterData,
        // getCVSentData: getCVSentData
    }

});