/* eslint-disable no-undef */
$(document).ready(function () {
  const signIn = $("#signIn");
  const signUp = $("#signUp");
  const burger = $(".burger");
  const drawer = $(".drawer-wrapper");
  $(signIn).on("click", function () {
    $("#exampleModalCenter").modal("show");
  });
  $(signUp).on("click", function () {
    $("#signupModal").modal("show");
  });

  $(burger).on("click", function () {
    if ($(drawer).hasClass("drawer-active")) {
      $(drawer).removeClass("drawer-active");
    } else {
      $(drawer).addClass("drawer-active");
    }
  });
});
