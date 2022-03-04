/* eslint-disable no-undef */
import { Router, Routes } from "./libs/router.js";
import "./components/Navbar.js";
import "./components/Drawer.js";
import "./components/Modal.js";
import "./assets/scripts/app";

$(document).ready(function(){
    if(window.location.hash === "") window.location.hash = "home";
    $("a").on("click", function(){
        let hash = $(this).attr("href").split("#")[1];
        window.location.hash = hash;
    });
    const singInBtn = $("#singInBtn");

    $(singInBtn).on("click", function(){
        $("#exampleModalCenter").modal("show");
    });
});

(() => {
  const routeConfig = [
    new Routes({
      path: "fresh",
      url: "./fresh.html",
    }),
    new Routes({
        path: "trending",
        url: "./trending.html"
    }),
    new Routes({
        path: "home", 
        url: "./home.html"
    })
  ];
  new Router(routeConfig, "app");
})();
