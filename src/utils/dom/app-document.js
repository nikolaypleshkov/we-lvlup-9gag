import $ from "jquery";
// import axios from "axios";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../features/firebase";
$(document).ready(async function () {
  $(window).scroll(async function () {
    if ($(this).scrollTop() == $(document).height() - $(window).height()) {
      //TODO: Make call to giphy to fetch memes
      if(location.hash !== "#post"){
        try {
          const querySnapshot = await getDocs(collection(db, "post"));
          querySnapshot.forEach((doc) => {
            appendToHtml(doc);
          });
        } catch (error) {
          console.log("Error getting cached document: ", error);
        }
      }
    }
  });
  $(document).on("click", ".nav-btn", function(){
    $(".nav-btn").removeClass("selected");
    $(this).addClass("selected");
  });
  $(document).on("click", "#upVote", async function () {
    const isAuth = localStorage.getItem("Authenticated");
    if (isAuth) {
      const button = $(this);
      const elementId = $(this).parent().parent().attr("data-eid");
      const btnSVG = $(this).children("svg");
      let btnValue = $(this).children(".upvotes-info").children("#likesNumber");
      const likeRef = doc(db, "post", elementId);
      const docRef = await getDoc(likeRef);
      let likesID = docRef.get("likesID");
      let isLiked = false;
      const currentUserId = localStorage.getItem("token");
      if(likesID.length > 0){
        likesID.forEach((id) => {
           if(id == currentUserId) isLiked = true;
        });
      }

      if(isLiked){
        likesID = likesID.filter((id) => {
          return id != currentUserId;
        });
        await setDoc(likeRef, {likes: likesID.length,  likesID: likesID }, { merge: true });
        $(button).css("background", "#fff");
        $(btnSVG).attr("fill", "#999");
        $(btnValue).text(likesID.length);
      }
      else{
        likesID.push(currentUserId);
        await setDoc(likeRef, { likes: likesID.length, likesID: likesID }, { merge: true });
        $(button).css("background", "rgba(222, 222, 254, 0.72)");
        $(btnSVG).attr("fill", "blue");
        $(btnValue).text(likesID.length);
      }
    }
    else {
      alert("You need to be logged in first.");
    }
  });

  $(document).on("click", "#downVote", async function(){
    const isAuth = localStorage.getItem("Authenticated");
    if(isAuth){    
      const elementId = $(this).parent().parent().attr("data-eid");
      const upVoteButton = $(this).parent().children("#upVote");
      console.log(elementId);
      const likeRef = doc(db, "post", elementId);
      const docRef = await getDoc(likeRef);
      let likesID = docRef.get("likesID");
      let isLiked = false;
      const currentUserId = localStorage.getItem("token");
      if(likesID.length > 0){
        likesID.forEach((id) => {
           if(id == currentUserId) isLiked = true;
        });
      }
      if(isLiked){
        likesID = likesID.filter((id) => {
          return id != currentUserId;
        });
        await setDoc(likeRef, {likes: likesID.length,  likesID: likesID }, { merge: true });
        $(upVoteButton).css("background", "#fff");
        $(upVoteButton).children("svg").attr("fill", "#999");
        $(upVoteButton).children(".upvotes-info").children("#likesNumber").text(likesID.length);
      }
    }
    else {
      alert("you need to logged in firs.");
    }
  });

  function appendToHtml(data) {
    $("#content").append(/*html*/ `
  <div class="memeCard mt-5" data-eid="${data.id}"> 
          <div class="user-info d-flex"> 
            <img src="${data.data().createdByUser.photoURL}" height="25px" width="25px" />
            <p class="owner-info text-muted"> 
              <a href="#user">${data.data().createdByUser.displayName}</a>
              <span>· ${calculateTimeDiff(data.data().createdOn)} min</span>
            </p>
          </div> 
        <a class="post-header" data-link href="/#post" id="getId">${data.data().title}</a>
      <div class="memeContent"> 
      <a class="img-link" data-link href="/#post" id="getIdImg"> 
      <img class="giftplayer" data-src src="${
        data.data().img
      }" alt="meme" />
      </a> 
      </div>
      <div class="button-container d-flex mt-2"> 
      <button class="btn post-btn d-flex align-items-center" id="upVote" style="${data.data().likesID.includes(localStorage.getItem("token")) ? "background: rgba(222, 222, 254, 0.72);" : "background: #fff}"}">
      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="${data.data().likesID.includes(localStorage.getItem("token")) ? "blue" : "#999"}" viewBox="0 0 24 24"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/></svg>
            <div class="upvotes-info"> 
              <span class="text-muted" id="likesNumber">${
                data.data().likes
              }</span>
            </div>
            </button>
          <button class="btn post-btn d-flex align-items-center" id="downVote">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#999" viewBox="0 0 24 24"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"/></svg>
            <div class="downvotes-info"> 
              <span class="text-muted">${data.data().dislikes}</span>
            </div>
            </button>
            <button class="btn post-btn d-flex align-items-center" id="commentsBtn"> 
                <i class="bi bi-chat-right-fill"></i>
                <span class="text-muted">${data.data().comments.length}</span>
            </button>
      </div>
  </div>
  <hr class="mt-2 mb-3"/>
`);
  }

  function calculateTimeDiff(date) {
    const today = new Date();
    var diff = Math.abs(date - today) / (60*60*1000);
    return Math.floor((diff/1000)/60);
  }
});
