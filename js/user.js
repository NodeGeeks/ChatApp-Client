(function(){

    var User = function(firstName, lastName, username, email, birthday, gender, isLoggedIn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
        this.isLoggedIn = isLoggedIn || false;
    };

    User.prototype.add = function(){

    };

    User.prototype.remove = function() {

    };

    User.prototype.message = function() {

    }

    window.User = User;
}());