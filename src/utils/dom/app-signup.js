$(document).ready(function(){
    const form = $("#signupForm");
    const fullName = $("#fullName");
    const email = $("#username");
    const password = $("#password");

    $(email).on("blur", function(){
        let userInput = $(email).val();
        //TODO: 
        //Check if Email is valid => if its not valid show danger alert
        console.log(userInput);
    });
    $(password).on("input", function(){
        validatePassword();
    });

    function validatePassword(){
        let userInput = $(password).val();
        //TODO: Check if password is valid
        console.log(userInput);
    }
    $(form).on("submit", function(){
        alert("Sign up form submited");
    });
});