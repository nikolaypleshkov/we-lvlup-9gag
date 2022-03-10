import "regenerator-runtime/runtime";
import "./components/Components";
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
          view: () => console.log("View Home"),
        },
        {
          path: "#fresh",
          view: () =>  console.log("View Fresh"),
        }, 
        {
          path: "#trending",
          view: () =>  console.log("View Post")
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
    console.log(match.route.view());

  };

  $(document).on("click",  function(e){
     if(e.target.matches("[data-link]")){
       e.preventDefault();
       navigateTo(e.target.href);
     }
  });

  router();
});

 

