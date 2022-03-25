/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { db } from "../firebase";
import {
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
export async function postMeme(data) {
  try {
    const docRef = await addDoc(collection(db, "post"), {
      img: data.img,
      title: data.title,
      description: data.description,
      likes: data.likes,
      dislikes: data.dislikes,
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
export async function trendingMeme() {
  // const postRef = await collection(db, "post");
  const postRef = collection(db, "post");
  const docRef = query(postRef, orderBy("likes", "desc"));
  const docSnapshot = await getDocs(docRef);
  return docSnapshot;
}
export async function freshMemes(){
  const postRef = collection(db, "post");
  const docRef = query(postRef, orderBy("createdOn", "desc"));
  const docSnapshot = await getDocs(docRef);

  return docSnapshot;
}
