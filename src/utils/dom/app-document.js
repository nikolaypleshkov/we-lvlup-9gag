import $ from "jquery";
// import axios from "axios";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../features/firebase";
$(document).ready(async function () {
  $(window).scroll(async function () {
    if ($(this).scrollTop() == $(document).height() - $(window).height()) {
      //TODO: Make call to giphy to fetch memes
      try {
        const querySnapshot = await getDocs(collection(db, "post"));
        querySnapshot.forEach((doc) => {
          appendToHtml(doc);
        });
      } catch (error) {
        console.log("Error getting cached document: ", error);
      }
    }
  });
  $(document).on("click", "#upVote", async function () {
    const isAuth = localStorage.getItem("Authenticated");
    if (isAuth) {
      const elementId = $(this).parent().parent().attr("data-eid");
      const btnColor = $(this).children("svg");
      let btnValue = $(this).children(".upvotes-info").children("#likesNumber");
      const likeRef = doc(db, "post", elementId);
      const docRef = await getDoc(likeRef);
      let likesID = docRef.get("likesID");
      let isLiked = false;
      const currentUserId = localStorage.getItem("token");
      likesID.forEach((id) => {
         if(id == currentUserId) isLiked = true;
      });

      if(isLiked){
        likesID = likesID.filter((id) => {
          return id != currentUserId;
        });
        await setDoc(likeRef, {likes: likesID.length,  likesID: likesID }, { merge: true });
        $(btnColor).attr("fill", "#999");
        $(btnValue).text(likesID.length);
      }
      else{
        likesID.push(currentUserId);
        await setDoc(likeRef, { likes: likesID.length, likesID: likesID }, { merge: true });
        $(btnColor).attr("fill", "red");
        $(btnValue).text(likesID.length);
      }

      // if ($(btnColor).attr("fill") === "red") {
      //   let value = parseInt(
      //     $(this).children(".upvotes-info").children("#likesNumber").text()
      //   );
      //   value = value - 1;
      //   $(btnValue).text(value);
      //   $(btnColor).attr("fill", "#999");
      //   try {
      //     console.log(elementId);
      //     // const likeRef = db.collection("post").doc(elementId);
      //     const likeRef = doc(db, "post", elementId);
      //     const res = await setDoc(likeRef, { likes: value }, { merge: true });
      //     console.log("Reuslt: ", res);
      //   } catch (error) {
      //     console.log("Something went wrong when updating: ", error);
      //   }
      // } else {
      //   let value = parseInt(
      //     $(this).children(".upvotes-info").children("#likesNumber").text()
      //   );
      //   value = value + 1;
      //   $(btnColor).attr("fill", "red");
      //   $(btnValue).text(value);
      //   try {
      //     console.log(elementId);
      //     likesID.push(localStorage.getItem("token"));
      //     console.log(likesID);
      //     await setDoc(likeRef, { likes: value, likesID: likesID }, { merge: true });
      //   } catch (error) {
      //     console.log("Something went wrong when updating: ", error);
      //   }
      // }
    }
    else {
      alert("You need to be logged in first.");
    }
  });

  function appendToHtml(data) {
    $("#memeContainer").append(/*html*/ `
  <div class="memeCard mt-5" data-eid="${data.id}"> 
          <div class="user-info d-flex"> 
            <img src="${data.data().createdByUser.photoURL}" height="25px" width="25px" />
            <p class="owner-info text-muted"> 
              <a href="#user">${data.data().createdByUser.displayName}</a>
              <span>· ${calculateTimeDiff(data.data().createdOn)} min</span>
            </p>
          </div> 
        <a class="post-header" href="#postid">${data.data().title}</a>
      <div class="memeContent"> 
          <img class="giftplayer" data-src src="${
            data.data().img
          }" alt="meme" />
      </div>
      <div class="button-container d-flex mt-2"> 
          <button class="btn post-btn d-flex align-items-center" id="upVote">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="${getColor(data.data().likesID)}" viewBox="0 0 24 24"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/></svg>
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

  function getColor(data) {
   const userId = localStorage.getItem("token");
   const isLiked = data.includes(userId);
   if(isLiked) return "red";
   return "#999";
    
  }
});
