app.controller("sendCVCtrl", function ($scope , $location , $window, sharedService) {

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

    // open an account in here and use it
    // http://www.emailjs.com/

    // var templateParams = {
    //     to_name: $scope.newCV.email,
    //     from_name: 'jobicProj@gmail.com', // fill user email here
    //     message_subject: 'Check this out!',
    //     message_content: 'Check this out!',
    //     message_signature: 'Check this out!'
    // };

    // emailjs.send("gmail", "jobic", templateParams, "jobicProj")
    // .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //    console.log('FAILED...', error);
    // });
    
    var template_params = {
        email_to: $scope.newCV.email,        
        email_from: "from_name_value",        
        
        message_subject:"this is the subject of the email",
        message_content:"this is the content of the email"
        
     }
     
    //  var service_id = "default_service";
    //  var template_id = "random";
    //  emailjs.send(service_id,template_id,template_params);

    
     
     var service_id = "default_service";
     var template_id = "jobic";
     emailjs.send(service_id,template_id,template_params);



    // var mail = 'mailto:{{$scope.newCV.email}}?subject=' + $scope.newCV.description +
    //            '&body=' + $scope.newCV.description;
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