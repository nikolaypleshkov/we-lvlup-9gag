import $ from "jquery";
import { commentMeme } from "../features/api/app-service";
$(document).ready(function () {
  const postId = localStorage.getItem("postId");
  $(document).on("click", "#postButton", async function () {
      if(localStorage.getItem("Authenticated")){
        const userComment = $("#userComment").val();
        const user = JSON.parse(localStorage.getItem("user"));
        appendComment(user, userComment);
        await commentMeme(postId, userComment, user)
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      }
      else {
          alert("You need to be logged in first");
      }
  });

  $(document).on("click", "#clearComment", function(){
    $("#userComment").val("");
  });

  function appendComment(user, comment) {
    $("#commentsContainer").append(/*html*/ `
        <div class="comment-card-wrapper mt-2"> 
          <div class="user-profile-avatar d-flex mt-2"> 
            <img src="${user.photoURL}" height="25px" width="25px" />
              <p class="owner-info text-muted"> 
                ${user.displayName}
              </p>
          </div>
          <div class="comment-list-item"> 
            <div class="comment-list-item__text">${comment}</div>
            <footer class="comment-list-item__footer"> 
              
          <div class="button-container d-flex mt-2"> 
          <button class="btn post-btn d-flex align-items-center" id="upVote" >
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#999" viewBox="0 0 24 24"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/></svg>
                <div class="upvotes-info"> 
                  <span class="text-muted" id="likesNumber">0</span>
                </div>
                </button>
              <button class="btn post-btn d-flex align-items-center" id="downVote">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#999" viewBox="0 0 24 24"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"/></svg>
                <div class="downvotes-info"> 
                  <span class="text-muted">0</span>
                </div>
                </button>
          </div>
            </footer>
          </div>
        </div>
        `);
  }
});
