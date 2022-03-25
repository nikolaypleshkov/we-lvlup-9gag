/* eslint-disable no-unused-vars */
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase";
import $ from "jquery";
const auth = getAuth(app);
export async function signInWithEmail(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      const token = user.accessToken;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("Authenticated", true);
      localStorage.setItem("token", user.uid);
      console.log(user);
    })
    .then(async () => {
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("Authenticated", true);
      localStorage.setItem("token", user.uid);
    })
    .then(async () => {
      location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(error);
      console.log(errorMessage);
    });
}
export async function signUpWithEmail(email, password, displayName) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: displayName,
        photoURL:
          "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
      });
    }).then(() => location.reload())
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      $(/*html*/ `
        <div class="alert alert-danger mt-2">
          <span>${errorMessage}</span>
        </div>`).insertBefore("#signupForm");
    });
}
