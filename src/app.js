import "regenerator-runtime/runtime";
import "./components/Components";
import Home from "./views/Home";
import Post from "./views/Post";
import Fresh from "./views/Fresh";
import "./utils";
import $ from "jquery"; 

$(document).ready(function(){
    const navigateTo = (url) => {
      history.pushState(null, null, url);
      router();
    };
    const router = async () => {
      const routes = [
        {
          path: "/",
          view: Home,
        },
        {
          path: "#fresh",
          view: Fresh,
        }, 
        {
          path: "#trending",
          view: Post
        }
    ];

    const routeMatches = routes.map((route) => {
      return {
        route: route,
        isMatch: location.hash === route.path
      };
    });

    let match = routeMatches.find((routeMatch) => routeMatch.isMatch);
    
    if(!match){
      match = {
        route: routes[0],
        isMatch: true
      };
    }

    const view = new match.route.view();

    $("#app").html(await view.getHtml());

  };

  $(window).bind("popstate", router);

  $(document).on("click",  function(e){
     if(e.target.matches("[data-link]")){
       e.preventDefault();
       navigateTo(e.target.href);
     }
  });

  router();
});

 

