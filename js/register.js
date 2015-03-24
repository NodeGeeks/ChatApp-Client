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

function register(id, firstName, lastName, username, email, password) {
    var registerData = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
    };

    $.post( 'http://50.255.225.218/user/register', registerData).done(function( response ) {
        var user = new User(data[0].id, data[0].firstName, data[0].lastName, data[0].username, data[0].email, true);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);

        window.location = 'messageboard.html';
    });
}
