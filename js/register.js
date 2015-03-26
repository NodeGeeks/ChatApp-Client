var registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    var genderRadios = document.getElementsByName('gender'),
        gender;

    for(var i = 0; i < genderRadios.length; i++){
        if(genderRadios[i].checked){
            gender = genderRadios[i].value;
        }
    }
    var username = registerForm.username.value,
        firstName = registerForm.firstName.value,
        lastName = registerForm.lastName.value,
        email = registerForm.email.value,
        password = registerForm.password.value;

    register(firstName, lastName, username, email, password, gender);
});

function register(firstName, lastName, username, email, password, gender) {
    var registerData = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        gender: gender
    };
    debugger
    $.post( 'http://50.255.225.218/user/register', registerData).done(function( data ) {
        var user = new User(data.id, data.firstName, data.lastName, data.username, data.email, true);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);

        window.location = 'messageboard.html';
    });
}
