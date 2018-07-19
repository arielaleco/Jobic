app.factory('sharedService', function ($log, $q, $http) {

    resumeArr = [];
    function Resume(anObj ) {
        this.title = anObj.title;
        this.file  = anObj.file;
        this.date  = anObj.date;
        this.description = anObj.description;
        
    }



    // ================= Read the Resume files ================= 
    readResumeFile();
    function readResumeFile() {
        // read json file
        $http.get("app/shared/resume.json").then(function Succsess(response) {
            response.data.forEach(function AddCar(anObj) {
                resumeArr.push(new Resume(anObj))
                 
            });
        },

            function Error() {
                $log.Error;
            });

    }

    function fillResumeFile() {
        // define asynchronous object
        var asyncAction = $q.defer();       
        asyncAction.resolve(resumeArr);
        return asyncAction.promise;
    }

    return {
        fillResumeFile: fillResumeFile
        
    }

});