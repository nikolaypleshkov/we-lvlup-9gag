/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { db } from "../features/firebase";
import { addDoc, collection } from "firebase/firestore";
import { postMeme } from "../features/api/app-service"
$(document).ready(async function () {
  let base64Image;
  $("#fileInput").on("change", function () {
    const file = $("#fileInput").prop("files")[0];
    const image = URL.createObjectURL(file);
    // console.log(image);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      base64Image = reader.result;
      $("#fileInput").hide();
      $(".files").addClass("remove-after");
      $("#uploadForm").append(/*html*/ `
               <div id="postGroup"> 
                <div class="form-group"> 
                    <img height="200px" width="100%" style="object-fit: cover;" src="${base64Image}" />
                </div>
                <div class="form-group"> 
                    <label for="postTitle">Give your post a title</label>
                    <input class="form-control" name="postTitle" id="postTitle" />
                </div>
                <div class="form-group"> 
                    <label for="postDescription">Describe your post</label>
                    <input class="form-control" name="postDescription" id="postDescription" />
                </div>
               
               </div>
            `);
    };
    reader.onerror = function () {
      alert("Something went wrong");
    };
  });

  $("#submitPost").on("click", async function () {
    const postTitle = $("#postTitle").val();
    const postDescription = $("#postDescription").val();
    const data = {
        img: base64Image,
        title: postTitle,
        description: postDescription,
        likes: 0,
        comments: [],
        createdByUser: localStorage.getItem("token"),
        createdOn: Date().now
    };

    try {
      const docRef = await addDoc(collection(db, "post"), {
        img: base64Image,
        title: postTitle,
        description: postDescription,
        likes: 0,
        comments: [],
        createdOn: new Date().toLocaleDateString(),
        createdByUser: localStorage.getItem("token")
      });
      setTimeout(() => {
        $("#uploadModal").modal("hide");
      }, 500);
    } catch (e) {
      alert("Something went wrong: ", e);
    }
  });
});
