import AbstractView from "./AbstractView";
import $ from "jquery";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/features/firebase";
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("7GAG - User Info");
        this.id = localStorage.getItem("token");
    }

    async getHtml(){
        if(!this.id){
            location.hash = "#home";
        }
        else {
            console.log(this.id);
            $("#content").empty();
            $("#content").html(/*html*/`
                <h1>Your Posts</h1>
            `);
            try{
                const querySnapshot = await getDocs(collection(db, "post"));
                let postMap = [];
                querySnapshot.forEach((post) => postMap.push(post));
                const userPosts = postMap.filter((post) => post.data().createdByUser.uid == this.id);
                userPosts.forEach((item) => this.loadPosts(item));
            }catch(error){
                console.log("Something went wrong getting user's post:", error);
            }

        }
    }
}