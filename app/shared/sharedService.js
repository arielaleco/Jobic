//buttons- https://www.w3schools.com/howto/howto_css_more_button.asp

app.factory('sharedService', function ($log, $q, $http) {

    resumeIdIndex = 0;
    resumeArr = [];
    function Resume(anObj) {
        this.type = "resume";
        this.title = anObj.title;
        this.file = anObj.file;
        this.date = anObj.date;
        this.id = "Resume" + resumeIdIndex;
        //this.editableNow="true";
        this.description = anObj.description;
        this.isOpen = false;

    }

    function findResumeById(resumeId) {
        for (var i = 0; i < resumeArr.length; i++) {
            if (resumeArr[i].id == resumeId)
                return i;
        }
        return -1;

    }

    // ================= cover Letter Structure ================= 
    coverLetterIdIndex = 0;
    coverLetterArr = [];
    function CoverLetter(anObj) {
        this.type = "coverLetter";
        this.title = anObj.title;
        this.content = anObj.content;
        this.date = anObj.date;
        this.id = "CoverLetter" + coverLetterIdIndex;
        this.description = anObj.description;
        this.isOpen = false;
    }

    function findCoverLetterById(coverLetterId) {
        for (var i = 0; i < coverLetterArr.length; i++) {
            if (coverLetterArr[i].id == coverLetterId)
                return i;
        }
        return -1;

    }
   

    function fillResumeFile() {
        var asyncAction = $q.defer();
        if (resumeArr.length > 0) // I read from server once)
        {
            asyncAction.resolve(resumeArr);
        }
        else {

            $http.get("https://my-json-server.typicode.com/arielaleco/Jobic/resumes").then(function Succsess(response) {
                // I may get here several time because its called eagc time I use ResumeCtrl
                // so I will check the length again here 
                if (resumeArr.length > 0) // I read from server once)
                {
                    asyncAction.resolve(resumeArr);
                }
                else {

                    response.data.forEach(function AddResume(anObj) {
                        resumeIdIndex++;
                        resumeArr.push(new Resume(anObj))

                    });
                    asyncAction.resolve(resumeArr);
                }
            },

                function Error() {
                    $log.Error;
                });

        };
        return asyncAction.promise;
    }


    function fillCoverLetterFile() {
        // define asynchronous object
        var asyncAction = $q.defer();
        if (coverLetterArr.length > 0) // I read from server once)
        {
            asyncAction.resolve(coverLetterArr);
        }
        else {

            $http.get("https://my-json-server.typicode.com/arielaleco/Jobic/coverLetters").then(function Succsess(response) {
                // I may get here several time because its called eagc time I use ResumeCtrl
                // so I will check the length again here 
                if (coverLetterArr.length > 0) // I read from server once)
                {
                    asyncAction.resolve(coverLetterArr);
                }
                else {


                response.data.forEach(function AddCover(anObj) {
                    coverLetterIdIndex++;
                    coverLetterArr.push(new CoverLetter(anObj))

                });
                asyncAction.resolve(coverLetterArr); }
            },

                function Error() {
                    $log.Error;
                });
        };

        return asyncAction.promise;
    }

    


    function deleteResumeRecord(resume) {
        var id = findResumeById(resume.id);
        if (id > -1) { resumeArr.splice(id, 1); }
        //alert("done");


    }
    function addNewResumeRecord(resumeName) {
        //var anObj ;
        resumeIdIndex++;

        var anObj = new Object();
        anObj.type = "resume";
        anObj.title = resumeName;
        anObj.file = "File";
        //var x =Date.now();
        var d = new Date();
        anObj.date = d.toDateString();
        anObj.description = "file Description";
        anObj.isOpen = true;
        var newId = "Resume" + resumeIdIndex;
        anObj.id = newId;
        resumeArr.push(anObj);
        return (newId);
        //resumeArr.push(new Resume(anObj))
    }

    function deleteCoverLetterRecord(coverLetter) {
        var id = findCoverLetterById(coverLetter.id);
        if (id > -1) { coverLetterArr.splice(id, 1); }
    }

    

    function addNewCoverLetterRecord(coverLetterName) {
        //var anObj ;
        coverLetterIdIndex++;

        var anObj = new Object();
        anObj.type = "coverLetter";
        anObj.title = coverLetterName;
        anObj.content = "Content";
        var d = new Date();
        anObj.date = d.toDateString();
        anObj.description = "Description...";
        anObj.isOpen = true;

        var newId = "CL" + coverLetterIdIndex;
        anObj.id = newId;        
        coverLetterArr.push(anObj);
        return (newId);
        //resumeArr.push(new Resume(anObj))
    }

    // ================= CV Sent ================= 
    cvSentIdIndex = 0;
    cvSentArr = [];
    function cvSent(anObj) {
        this.company = anObj.company;
        this.JobTitle = anObj.JobTitle;
        this.contactPeron = anObj.contactPeron;
        this.email = anObj.email;
        this.linkToAdSource = anObj.linkToAdSource;
        this.description = anObj.description;
        this.resumeVersion = anObj.resumeVersion;
        this.coverLetterVersion = anObj.coverLetterVersion;
        this.protfolioVersion = anObj.protfolioVersion;

        this.date = anObj.date;
        this.id = "cvSent" + coverLetterIdIndex;
        this.isOpen = false;
    }

    function fillcvSentsFile() {
        var asyncAction = $q.defer();
        if (cvSentArr.length > 0) // I read from server once)
        {
            asyncAction.resolve(cvSentArr);
        }
        else {

            $http.get("https://my-json-server.typicode.com/arielaleco/Jobic/cvSents").then(function Succsess(response) {
                response.data.forEach(function AddcvSent(anObj) {
                    cvSentIdIndex++;
                    cvSentArr.push(new cvSent(anObj))

                });
                asyncAction.resolve(cvSentArr);
            },

                function Error() {
                    $log.Error;
                });
        };

        return asyncAction.promise;
    }
    function addNewSentCV(obj) {
        cvSentIdIndex++;
        cvSentArr.push(new cvSent(obj));

        // send the email
        
       
    }


    return {
        fillResumeFile: fillResumeFile,
        fillCoverLetterFile: fillCoverLetterFile,
        fillcvSentsFile: fillcvSentsFile,
        findResumeById: findResumeById,
        deleteResumeRecord: deleteResumeRecord,
        addNewResumeRecord: addNewResumeRecord,
        deleteCoverLetterRecord: deleteCoverLetterRecord,
        addNewCoverLetterRecord: addNewCoverLetterRecord,
        addNewSentCV: addNewSentCV
    }

});