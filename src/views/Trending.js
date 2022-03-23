import AbstractView from "./AbstractView";
import { trendingMeme } from "../utils/features/api/app-service";
import $ from "jquery";
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("7GAG - Trending Meme");
    }

    async getHtml(){
        setTimeout(() => {
            try{
                this.getTrendingPosts();
            }
            catch(error){
                console.log("Error getting most liked memes:", error);
            }
        }, 1000);
        return /*html*/`
            <div id="trendingMemeContainer"> </div>
        `;
    }

    async getTrendingPosts(){
        trendingMeme().then((res) => {
            res.forEach((post) => {
                this.loadPosts(post);
            });
        });
    }
    loadPosts(data){
        $("#trendingMemeContainer").append(/*html*/ `
      <div class="memeCard mt-5" data-eid="${data.id}"> 
          <div class="user-info d-flex"> 
            <img src="${data.data().createdByUser.photoURL}" height="25px" width="25px" />
            <p class="owner-info text-muted"> 
              <a href="#user" class="text-muted ml-2">${data.data().createdByUser.displayName}</a>
              <span>· ${this.calculateTimeDiff(data.data().createdOn)} min</span>
            </p>
          </div> 
            <a class="post-header" href="#postid">${data.data().title}</a>
          <div class="memeContent">
            <a class="img-link" href="#postid"> 
            <img class="giftplayer" data-src src="${
              data.data().img
            }" alt="meme" />
            </a> 
          </div>
          <div class="button-container d-flex mt-2"> 
              <button class="btn post-btn d-flex align-items-center" id="upVote">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="${this.getColor(data.data().likesID)}" viewBox="0 0 24 24"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/></svg>
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

    calculateTimeDiff(date) {
        const today = new Date();
        var diff = date - today;
        return Math.round(((diff % 86400000) % 3600000) / 60000);
    }
    
         
}