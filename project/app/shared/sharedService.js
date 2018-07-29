//buttons- https://www.w3schools.com/howto/howto_css_more_button.asp

app.factory('sharedService', function ($log, $q, $http) {

    resumeIdIndex = 0;
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

    // ================= cover Letter Structure ================= 
    coverIdIndex = 0;
    coverLetterArr = [];
    function CoverLetter(anObj ) {
        this.title = anObj.title;
        this.content  = anObj.content;
        this.date  = anObj.date;
        this.id  = anObj.id;        
        this.description = anObj.description;  
        this.isOpen = false;              
    }

    function findCoverLetterById(coverLetterId)
    {
        for(var i=0;i<coverLetterArr.length;i++)
        {
            if (coverLetterArr[i].id== coverLetterId)
            return i;
        }
        return -1;

    }


    // ================= Read the Resume files ================= 
    // readResumeFile();
    // function readResumeFile() {
    //     // read json file
    //     $http.get("app/shared/resume.json").then(function Succsess(response) {
    //         response.data.forEach(function AddResume(anObj) {
    //             maxId++;
    //             resumeArr.push(new Resume(anObj))
                 
    //         });
    //     },

    //         function Error() {
    //             $log.Error;
    //         });

    // }
    readDatabaseFile();
    function readDatabaseFile() {
        $http.get("app/shared/database.json").then(function Succsess(response) {            
            
            response.data.resume.forEach(function AddResume(anObj) {
                resumeIdIndex++;
                resumeArr.push(new Resume(anObj))
                 
            });
            response.data.coverLetters.forEach(function AddCover(anObj) {
                coverIdIndex++;
                coverLetterArr.push(new CoverLetter(anObj))
                 
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

    function fillCoverLetterFile() {
        // define asynchronous object
        var asyncAction = $q.defer();       
        asyncAction.resolve(coverLetterArr);
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
        anObj.id  = resumeIdIndex;        
        anObj.description = "file Description";
        resumeIdIndex++;
        anObj.isOpen= true;
        resumeArr.push(anObj);
        //resumeArr.push(new Resume(anObj))
    }

    function deleteCoverLetterRecord(coverLetter){
        var id = findCoverLetterById(coverLetter.id);
       if (id>-1)
       { coverLetterArr.splice(id+1, 1);}                      
   }
    
   function addNewCoverLetterRecord(){
    //var anObj ;
    var anObj = new Object();
    anObj.title ="Title";
    anObj.content  = "Content";    
    var d = new Date();    
    anObj.date  = d.toDateString();
    anObj.description = "Description...";    
    anObj.id  = coverLetterIdIndex;            
    coverLetterIdIndex++;
    anObj.isOpen= true;
    coverLetterArr.push(anObj);
    //resumeArr.push(new Resume(anObj))
}


    return {
        fillResumeFile : fillResumeFile,
        fillCoverLetterFile:fillCoverLetterFile,
        findResumeById : findResumeById,
        deleteResumeRecord: deleteResumeRecord,
        addNewResumeRecord:addNewResumeRecord,
        deleteCoverLetterRecord: deleteCoverLetterRecord,
        addNewCoverLetterRecord:addNewCoverLetterRecord
        
    }

});