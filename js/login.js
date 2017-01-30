"use strict";

function validateForm() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    
}

function init() {
    if (document && document.getElementById("loginForm") {
            var loginForm = document.getElementById("loginForm");
            
            loginForm.onsubmit = validateForm;
        }
    }

    window.onload = init;