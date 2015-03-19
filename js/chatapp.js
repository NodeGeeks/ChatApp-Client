(function () {

    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e){
        e.preventDefault();
        var email = loginForm.email.value,
            password = loginForm.password.value;

        login(email, password)
    });

    function login(email, password) {
        var loginData = {
            email: email,
            password: password
        };
        $.post( 'http://localhost:1337/user/login', loginData).done(function( data ) {
            console.log( 'Data Loaded: ' + data );
            var user = new User(data[0].firstName, data[0].lastName, data[0].username, data[0].email, true);

            localStorage.setItem('user', JSON.stringify(user))
        });
    }

}());