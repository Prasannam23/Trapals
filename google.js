import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2g4Zf_-JCdWSBSJu5zZyiysdtZE2AEqY",
  authDomain: "trailblaze-3d5e3.firebaseapp.com",
  databaseURL: "https://trailblaze-3d5e3-default-rtdb.firebaseio.com",
  projectId: "trailblaze-3d5e3",
  storageBucket: "trailblaze-3d5e3.appspot.com",
  messagingSenderId: "126589395899",
  appId: "1:126589395899:web:0f159978e20f64c3ee5a9e",
  measurementId: "G-3M2FLH3N3R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
auth.languageCode = 'en';



const google = document.getElementById("google")
google.addEventListener("click", function () {

 signInWithPopup(auth, provider)
  .then((result) => {
   // This gives you a Google Access Token. You can use it to access the Google API.
   const credential = GoogleAuthProvider.credentialFromResult(result);
   const token = credential.accessToken;
   // The signed-in user info.
   const user = result.user;
   window.location.href = "index1.html";
  }).catch((error) => {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.customData.email;
   // The AuthCredential type that was used.
   const credential = GoogleAuthProvider.credentialFromError(error);
   // ...
   alert(errorMessage);
  });

})



