/* eslint-disable no-unused-vars */
import { signInWithEmail, signInWithGoogle, signInWithFacebook } from "../features/api/auth-service";
import $ from "jquery";
$(document).ready(function () {
  const form = $("#signinForm");
  const googleSign = $("#googleSignIn");
  const facebookSign = $("#facebookSignIn");
  const email = $("#signEmail");
  const password = $("#signPassword");
  const dangerAlert = $("#error-email");
  $(dangerAlert).hide();
  $(email).on("change", function () {
    //   valdiateEmail();
  });

  $(password).on("blur", function () {
    //   validatePassword();
  });
  $(facebookSign).on("click", function(){
    signInWithFacebook();
  });
  $(googleSign).on("click", function () {
    signInWithGoogle();
  });
  $(form).on("submit", async function (e) {
    e.preventDefault();
    signInWithEmail($(email).val(), $(password).val());
  });
});
