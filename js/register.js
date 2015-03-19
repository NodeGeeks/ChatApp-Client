(function () {

    var registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(e){
        e.preventDefault();
        var username = registerForm.username.value,
            firstName = registerForm.firstName.value,
            lastName = registerForm.lastName.value,
            email = registerForm.email.value,
            //birthday = registerForm.birthday.value,
            password = registerForm.password.value;

        register(firstName, lastName, username, email, password);
    });

    function register(firstName, lastName, username, email, password) {
        var registerData = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password
        };
        $.post( 'http://localhost:1337/user/register', registerData).done(function( data ) {
            console.log( "Data Loaded: " + data );
        });
    }

}());