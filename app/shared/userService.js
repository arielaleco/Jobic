
app.factory('user', function ($http, $q) {

    var activeUser = null;
    //var activeUser = new User({ fname: "Ariela", lname: "Leiba Cohen", id: "1", email: "arielaleco@gmail.com", password: "123" , password: "123"});//null;


    function User(plainUser) {
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.password = plainUser.password;
        this.birthDate= plainUser.birthDate;
        this.phone= plainUser.phone;
        this.id = plainUser.id;
    }


    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function login(email, password) {
        var async = $q.defer();

        var loginURL = "https://my-json-server.typicode.com/arielaleco/Jobic/users?email=" + email + "&password=" + password;
        $http.get(loginURL).then(function (response) {
            if (response.data.length > 0) {
                activeUser = new User(response.data[0]);
                async.resolve(activeUser);
            } else {
                async.reject("invalid credentials");
            }
        }, function (err) {
            async.reject(err);
        });

        return async.promise;
    }

    function getActiveUser() {
        return activeUser;
    }

    function registerUser(signUpUser) {
        if (activeUser == undefined) {
            activeUser = new User(signUpUser);//null; 
        }
        else {
            activeUser.fname = signUpUser.fname;
            activeUser.lname = signUpUser.lname;
            activeUser.email = signUpUser.email;
            activeUser.password = signUpUser.password;
            activeUser.birthDate= signUpUser.birthDate;
            activeUser.phone= signUpUser.phone;
        }
        // activeUser = new User(signUpUser);//null;
        //this.id = plainUser.id;

    }

    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
        getActiveUser: getActiveUser,
        registerUser: registerUser
    }


})