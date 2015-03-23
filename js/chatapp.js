var User = function(firstName, lastName, username, email, birthday, gender, isLoggedIn) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.gender = gender;
    this.isLoggedIn = isLoggedIn;
};

getMessages();

getUsers();

function getMessages() {
    $.get('http://localhost/message').done(function (response) {
        console.log(response);
    });
}
function getUsers() {
    $.get('http://localhost/user').done(function (response) {
        console.log(response);
    });
}

function sendMessage() {
    var messageText = document.getElementById('messageText').value;
    var userObject = JSON.parse(localStorage.getItem('user'));
    debugger
    var messageObject = {
        message: messageText,
        userId: userObject.id
    };
    $.post('http://localhost/message/send', messageObject).done(function (response) {
        console.log(response);
    });
}