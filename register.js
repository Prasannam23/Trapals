import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Get email and password values after clicking the submit button
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
        alert("Email and password cannot be empty");
        return;
    }

    // Check if the email is in the correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
    }

    // Check if the password is at least 6 characters long
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Creating Account.....");
            window.location.href = "";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
});
