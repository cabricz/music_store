function validateForm() {
    "use strict";
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    if ((email.value === "admin@titanmusicstore.com" && password.value === "LogMeIn") || (email.value === "cabricz@gmail.com" && password.value === "paSSword")) {
        return true;
    } else {
        alert("Incorrect email or password");
        return false;
    }
    
    
}

function init() {
    "use strict";
    
    if (document && document.getElementById("loginForm")) {
        var loginForm = document.getElementById("loginForm");
        
        loginForm.onsubmit = validateForm;
    }
}

window.onload = init;