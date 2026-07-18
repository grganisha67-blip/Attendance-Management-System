document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if(username === "" || password === ""){

        message.style.color = "red";
        message.innerHTML = "Please fill in all fields.";

    }
    else{

        message.style.color = "green";
        message.innerHTML = "Login Successful!";

        // Redirect after 1 second
        setTimeout(function(){
            window.location.href = "dashboard.html";
        },1000);

    }

});