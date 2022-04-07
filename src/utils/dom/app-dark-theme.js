import $ from "jquery";

$(document).ready(function(){
    $("#darkModeBtn").on("click", function(){
        let currentTheme = $("html").attr("data-theme");
        if(currentTheme == "dark"){
            $("html").attr("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
        else if(currentTheme == "light"){
            $("html").attr("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });
});