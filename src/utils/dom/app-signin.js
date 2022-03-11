import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../features/firebase";
$(document).ready(function () {
  const form = $("#signinForm");
  const email = $("#signEmail");
  const password = $("#signPassword");
  const dangerAlert = $("#error-email");
  $(dangerAlert).hide();
  $(email).on("change", function(){
    //   valdiateEmail();
  });

  $(password).on("blur", function(){
    //   validatePassword();
  });
  $(form).on("submit", async function (e) {
    e.preventDefault();
    const auth = getAuth(app);
    console.log($(email).val());
    console.log($(password).val());
    signInWithEmailAndPassword(auth, $(email).val(), $(password).val())
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  });
});
