//buttons- https://www.w3schools.com/howto/howto_css_more_button.asp

app.factory('sharedService', function ($log, $q, $http) {

    resumeIdIndex = 0;
    resumeArr = [];
    function Resume(anObj) {
        this.type = "resume";
        this.title = anObj.title;
        this.file = anObj.file;
        this.date = anObj.date;
        this.id = anObj.id;
        // this.id = "R" + resumeIdIndex;
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
        this.id = anObj.id;
        // this.id = "CL" + coverLetterIdIndex;
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
                    asyncAction.resolve(coverLetterArr);
                }
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
    function addNewResumeRecord(resumeName, resumeDescription, resumeFile) {
        //var anObj ;
        resumeIdIndex++;

        var anObj = new Object();
        anObj.type = "resume";
        anObj.title = resumeName;
        anObj.file = resumeFile;
        //var x =Date.now();
        var d = new Date();
        anObj.date = d.toDateString();
        anObj.description = resumeDescription;
        anObj.isOpen = true;
        var newId = "R" + resumeIdIndex;
        anObj.id = newId;
        resumeArr.push(anObj);
        return (newId);
        //resumeArr.push(new Resume(anObj))
    }

    function deleteCoverLetterRecord(coverLetter) {
        var id = findCoverLetterById(coverLetter.id);
        if (id > -1) { coverLetterArr.splice(id, 1); }
    }



    function addNewCoverLetterRecord(coverLetterName, coverLetterDescription, coverLetterContent) {
        //var anObj ;
        coverLetterIdIndex++;

        var anObj = new Object();
        anObj.type = "coverLetter";
        anObj.title = coverLetterName;
        anObj.content = coverLetterContent;
        anObj.description = coverLetterDescription;

        var d = new Date();
        anObj.date = d.toDateString();
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
        this.resumeVersionId = anObj.resumeVersionId;
        this.coverLetterVersionId = anObj.coverLetterVersionId;
        this.protfolioVersionId = anObj.protfolioVersionId;

        this.date = anObj.date;
        this.id = "cvSent" + cvSentIdIndex;
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

    // ================= Job Process Structure ================= 
    JobProcessIdIndex = 0;
    JobProcessArr = [];
    function JobProcess(anObj) {

        this.company = anObj.company;
        this.JobTitle = anObj.JobTitle;
        this.description = anObj.description;
        this.resumeVersionId = anObj.resumeVersionId;
        this.coverLetterVersionId = anObj.coverLetterVersionId;
        this.protfolioVersionId = anObj.protfolioVersionId;
        this.interviewsList = [];

        if (anObj.interviewsList != undefined) {
            for (var i = 0; i < anObj.interviewsList.length; i++) {
                JobProcessStepIdIndex++;
                this.interviewsList.push(new JobProcessStep(anObj.interviewsList[i]));
            }
        }
        this.date = anObj.date;
        this.id = "JobProcess" + JobProcessIdIndex;

    }

    JobProcessStepIdIndex = 0;
    function JobProcessStep(anObj) {
        this.type = anObj.type;
        this.meetWith = anObj.meetWith;
        this.contactPeron = anObj.contactPeron;
        this.JobTitle = anObj.JobTitle;
        this.location = anObj.location;
        this.date = anObj.date;
        this.purpose = anObj.purpose;
        this.description = anObj.description;
        this.summary = anObj.summary;
        this.id = "JobProcessStep" + JobProcessStepIdIndex;
    }




    function filljobProcesssFile() {
        var asyncAction = $q.defer();
        if (JobProcessArr.length > 0) // I read from server once)
        {
            asyncAction.resolve(JobProcessArr);
        }
        else {

            $http.get("https://my-json-server.typicode.com/arielaleco/Jobic/jobProcesss").then(function Succsess(response) {
                if (JobProcessArr.length == 0) { 
                response.data.forEach(function AddcvSent(anObj) {
                    JobProcessIdIndex++;
                    JobProcessArr.push(new JobProcess(anObj))

                });
            }
                
                
                asyncAction.resolve(JobProcessArr);
            },

                function Error() {
                    $log.Error;
                });
        };

        return asyncAction.promise;
    }

    function findJobProcessById(jobProcessId) {
        for (var i = 0; i < JobProcessArr.length; i++) {
            if (JobProcessArr[i].id == jobProcessId)
                return i;
        }
        return -1;

    }
    function addStageToJobProcess(jobProcess, JobProcessStage) {
        for (var i = 0; i < JobProcessArr.length; i++) {
            if (JobProcessArr[i].id == jobProcess.id) {
                // var anObj = new Object();
                // anObj.type = "HR";
                // anObj.JobTitle = JobProcessArr[i].JobTitle;

                // anObj.meetWith = "";
                // anObj.contactPeron = "";            
                // anObj.location = "";
                // anObj.description = "";
                // anObj.purpose = "";
                // anObj.summary = "";                        

                // var d = new Date();
                // anObj.date = d.toDateString();

                // anObj.isOpen = true;

                JobProcessStepIdIndex++;
                JobProcessStage.id = "JobProcessStep" + JobProcessStepIdIndex;
                JobProcessArr[i].interviewsList.push(new JobProcessStep(JobProcessStage));

                return JobProcessArr[i].interviewsList[JobProcessArr[i].interviewsList.length];

            }

        }
        return false;
    }
    function addNewJobProcess(obj) {
        JobProcessIdIndex++;
        JobProcessArr.push(new JobProcess(obj));

        // send the email


    }

    return {
        fillResumeFile: fillResumeFile,
        fillCoverLetterFile: fillCoverLetterFile,
        fillcvSentsFile: fillcvSentsFile,
        filljobProcesssFile: filljobProcesssFile,
        findResumeById: findResumeById,
        findJobProcessById: findJobProcessById,
        addStageToJobProcess: addStageToJobProcess,
        deleteResumeRecord: deleteResumeRecord,
        addNewResumeRecord: addNewResumeRecord,
        deleteCoverLetterRecord: deleteCoverLetterRecord,
        addNewCoverLetterRecord: addNewCoverLetterRecord,
        addNewSentCV: addNewSentCV,
        addNewJobProcess: addNewJobProcess
    }

});