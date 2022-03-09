/* eslint-disable no-undef */
import { Router, Routes } from "./libs/router.js";
import "./components/Components";
import "./utils";

$(document).ready(function(){
    if(window.location.hash === "") window.location.hash = "home";
    $("a").on("click", function(){
        let hash = $(this).attr("href").split("#")[1];
        window.location.hash = hash;
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
