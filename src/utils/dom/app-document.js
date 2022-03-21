import $ from "jquery";
// import axios from "axios";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../features/firebase";
$(document).ready(async function () {
  try {
    const querySnapshot = await getDocs(collection(db, "post"));
    querySnapshot.forEach((doc) => {
      appendToHtml(doc);
    });
  } catch (error) {
    console.log("Error getting cached document: ", error);
  }

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

  function appendToHtml(data) {
    $("#memeContainer").append(/*html*/ `
  <div class="memeCard mt-5" data-eid="${data.id}"> 
      <div class="user-info d-flex align-items-center"> 
        <img src="" height="25px" width="25px" />
        <p class="owner-info text-muted"> 
          <a href="#user">Username</a>
          <span>· 1hr</span>
        </p>
      </div> 
      <header>${data.data().title}</header>
      <div class="memeContent"> 
          <img class="giftplayer" data-src src="${
            data.data().img
          }" alt="meme" />
      </div>
      <div class="button-container d-flex"> 
          <button class="btn d-flex align-items-center" id="upVote">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#999" viewBox="0 0 24 24"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/></svg>
            <div class="upvotes-info"> 
              <span class="text-muted" id="likesNumber">${
                data.data().likes
              }</span>
            </div>
            </button>
          <button class="btn d-flex align-items-center" id="downVote">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#999" viewBox="0 0 24 24"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"/></svg>
            <div class="downvotes-info"> 
              <span class="text-muted">${data.data().dislikes}</span>
            </div>
            </button>
      </div>
  </div>
  <hr class="mt-2 mb-3"/>
`);
  }
  $(document).on("click", "#upVote", async function () {
    const isAuth = localStorage.getItem("Authenticated");
    if (isAuth) {
      const elementId = $(this).parent().parent().attr("data-eid");
      const btnColor = $(this).children("svg");
      let btnValue = $(this).children(".upvotes-info").children("#likesNumber");
      if ($(btnColor).attr("fill") === "red") {
        let value = parseInt(
          $(this).children(".upvotes-info").children("#likesNumber").text()
        );
        value = value - 1;
        $(btnValue).text(value);
        $(btnColor).attr("fill", "#999");
        try {
          console.log(elementId);
          // const likeRef = db.collection("post").doc(elementId);
          const likeRef = doc(db, "post", elementId);
          const res = await setDoc(likeRef, { likes: value }, { merge: true });
          console.log("Reuslt: ", res);
        } catch (error) {
          console.log("Something went wrong when updating: ", error);
        }
      } else {
        let value = parseInt(
          $(this).children(".upvotes-info").children("#likesNumber").text()
        );
        value = value + 1;
        $(btnColor).attr("fill", "red");
        $(btnValue).text(value);
        try {
          console.log(elementId);
          const likeRef = doc(db, "post", elementId);
          const res = await setDoc(likeRef, { likes: value }, { merge: true });
          console.log("Reuslt: ", res);
        } catch (error) {
          console.log("Something went wrong when updating: ", error);
        }
      }
    }
    else {
      alert("You need to be logged in first.");
    }
  });
});
