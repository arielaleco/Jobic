app.controller("jobProcessCtrl", function ($scope , $location , $window, sharedService) {

    $scope.cvSentArr = [];
    sharedService.fillcvSentsFile().then(function (cvSentArr) {
        $scope.cvSentArr = cvSentArr;
    }, function (error) {

        $log.error(error)
    });


$scope.newCV={};  
var d = new Date();
$scope.newCV.date = d;
$scope.newCV.email="arielaleco@gmail.com";
// $scope.newCV.date = d.toDateString();

$scope.SendAndSaveCV = function(){
    // validation check - confirmation 
    
    // send the email
    // get the content of the cover letter

    var mail = 'mailto:{{$scope.newCV.email}}?subject=' + $scope.newCV.description +
               '&body=' + $scope.newCV.description;
    //  $window.open(mail);
//--------------------------------------------------
// $.ajax({
//     type: "POST",
//     url: "https://mandrillapp.com/api/1.0/messages/send.json",
//     data: {
//             'key': 'k-WxFhe95AY56u6uRo4EHw',
//             'message': {
//                          'from_email': 'arielaleco@gmail.com',
//                          'to': [{
//                                  'email': 'arielaleco@gmail.com',
//                                  'name': 'Deepak',
//                                  'type': 'to'
//                                }],
//                           'autotext': 'true',
//                           'subject': 'Hacked Email',
//                          'html': 'This is test Email'
//                        }
//            }
// }).done(function(response) {
//       console.log("mail sent :" + response); // if you're into that sorta thing
// });	


    //--------------------------------------------------
    // <script src="https://smtpjs.com/v2/smtp.js">
    // </script>
    // https://www.smtpjs.com/
    //  Email.send("arielaleco@gmail.com",
    //  "arielaleco@gmail.com",
    //  "This is a subject",
    //  "this is the body",
    //  "smtp.yourisp.com",
    //  "username",
    //  "password");
    
    // send 

    // save

    sharedService.addNewSentCV($scope.newCV);
  
    // notify the user

    // move to card View
    $('[ data-target="#cardView"]').tab('show');

// clen the fields from the last sent !

    



    // 


}


});