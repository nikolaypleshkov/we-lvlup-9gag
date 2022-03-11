import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

$(document).ready(function () {
  const form = $("#signupForm");
  const fullName = $("#fullName");
  const email = $("#username");
  const password = $("#password");
  var dangerAlert = $("#danger-email");
  $(dangerAlert).hide();

  $(fullName).on("blur", () => {
    console.log($(fullName).val());
  });

  $(email).on("change", () => {
    validateEmail();
  });

  $(password).on("input", () => {
    validatePassword();
  });

  function validatePassword() {
    let userInput = $(password).val();
    //TODO: Check if password is valid
    console.log(userInput);
  }
  function validateEmail() {
    let userInput = $(email).val();
    let regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!userInput.match(regex)) {
      $(dangerAlert).show();
    } else {
      $(dangerAlert).hide();
    }
    //TODO:
    //Check if Email is valid => if its not valid show danger alert
    console.log(userInput);
  }
  $(form).on("submit", (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, $(email), $(password)).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user);

        localStorage.setItem(user);
      }
    ).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
    alert("Sign up form submited");
  });
});
