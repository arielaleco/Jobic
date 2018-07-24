//buttons- https://www.w3schools.com/howto/howto_css_more_button.asp

app.factory('sharedService', function ($log, $q, $http) {

    maxId = 0;
    resumeArr = [];
    function Resume(anObj ) {
        this.title = anObj.title;
        this.file  = anObj.file;
        this.date  = anObj.date;
        this.id  = anObj.id;
        //this.editableNow="true";
        this.description = anObj.description;
        this.isOpen = false;
        
    }

    function findResumeById(resumeId)
    {
        for(var i=0;i<resumeArr.length;i++)
        {
            if (resumeArr[i].id== resumeId)
            return i;
        }
        return -1;

    }

    // ================= Read the Resume files ================= 
    readResumeFile();
    function readResumeFile() {
        // read json file
        $http.get("app/shared/resume.json").then(function Succsess(response) {
            response.data.forEach(function AddResume(anObj) {
                maxId++;
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

    function deleteResumeRecord(resume){
         var id = findResumeById(resume.id);
        if (id>-1)
        { resumeArr.splice(id+1, 1);}
         //alert("done");
        
        
    }
    function addNewResumeRecord(){
        //var anObj ;
        var anObj = new Object();
        anObj.title ="Title";
        anObj.file  = "File";
        //var x =Date.now();
        var d = new Date();
        
        anObj.date  = d.toDateString();
        anObj.id  = maxId;        
        anObj.description = "file Description";
        maxId++;
        anObj.isOpen= true;
        resumeArr.push(anObj);
        //resumeArr.push(new Resume(anObj))
    }

    return {
        fillResumeFile : fillResumeFile,
        findResumeById : findResumeById,
        deleteResumeRecord: deleteResumeRecord,
        addNewResumeRecord:addNewResumeRecord
    }

});