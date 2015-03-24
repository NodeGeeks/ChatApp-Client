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
    $.get('http://50.255.225.218/message').done(function (response) {
        console.log(response);
    });
}
function getUsers() {
    $.get('http://50.255.225.218/user').done(function (response) {
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
    $.post('http://50.255.225.218/message/send', messageObject).done(function (response) {
        console.log(response);
    });
}