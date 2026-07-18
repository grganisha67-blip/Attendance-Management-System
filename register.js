document.getElementById("registerForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let faculty = document.getElementById("faculty").value;
    let semester = document.getElementById("semester").value;
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if(name==="" || email==="" || faculty==="" || semester==="" || username==="" || password==="" || confirmPassword===""){
        message.style.color="red";
        message.innerHTML="Please fill in all fields.";
        return;
    }

    if(password !== confirmPassword){
        message.style.color="red";
        message.innerHTML="Passwords do not match.";
        return;
    }

    message.style.color="green";
    message.innerHTML="Registration Successful!";

    // Redirect to login page after 2 seconds
    setTimeout(function(){
        window.location.href="login.html";
    },2000);

});