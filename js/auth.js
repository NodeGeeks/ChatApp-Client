(function(){

    var Auth = function(user, token) {
        this.user = user;
        this.token = token;
    };

    Auth.prototype.logout = function() {

    };

    window.Auth = Auth;

}());