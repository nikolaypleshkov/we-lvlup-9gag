/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
export async function postMeme(data) {
  try {
    const docRef = await addDoc(collection(db, "post"), {
      img: data.img,
      title: data.title,
      description: data.description,
      likes: data.likes,
      comments: data.comment,
      createdByUser: data.createdByUser,
      createdOn: data.createdOn,
    });
    setTimeout(() => {
      $("#uploadModal").modal("hide");
    }, 500);
  } catch (e) {
    alert("Something went wrong: ", e);
  }
}
async function viewMeme(id) {}
async function upvoteMeme(id) {}
async function downvoteMeme(id) {}
async function commentMeme(id, comment) {}
