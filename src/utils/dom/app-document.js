import $ from "jquery";
import axios from "axios";
$(document).ready(async function () {
  var toBottom = false;
  for (let i = 0, len = 10; i < len; i++) {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/random?api_key=9WxUe78LhG4RRx9bFH03LT0rLknSmy5h&tag=&rating=g"
      )
      .then((res) => {
        console.log(res.data);

        $("#memeContainer").append(/*html*/ `
            <div class="memeCard"> 
                <header>${res.data.data.title}</header>
                <div class="memeContent"> 
                    <img src="${res.data.data.images.downsized_large.url}" alt="meme" />
                </div>
                <div class="button-container"> 
                    <button class="btn" id="upVote"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#999" viewBox="0 0 24 24"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/></svg></button>
                    <button class="btn" id="downVote"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#999" viewBox="0 0 24 24"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"/></svg> </button>
                </div>
            </div>
          `);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() + 1 >= $("body").height() - $(window).height()) {
      if (toBottom) {
        toBottom = true;
        //TODO: Make call to giphy to fetch memes
      }
    }
  });
});
