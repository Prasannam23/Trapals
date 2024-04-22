import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

onAuthStateChanged(auth, function (user) {
    if (user) {
        const currentUser = auth.currentUser;
        document.getElementById("email").value = currentUser.email;
        document.getElementById("username").value = currentUser.displayName;
    } else {
        window.location.href = "index.html";
    }
});

const logout = document.getElementById("logout");
logout.addEventListener("click", function (event) {
    event.preventDefault();
    signOut(auth).then(
        function () {
            alert("Logging out...");
            window.location.href = "index.html";
        }
    ).catch(function () {
        alert("Error, can't logout...");
    });
});

const confirmReset = document.getElementById("confirmReset");
confirmReset.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    sendPasswordResetEmail(auth, email)
        .then(function () {
            alert("Password reset email sent!");
            location.reload();
        })
        .catch(function (error) {
            alert(error.message);
        });


    });




    document.addEventListener("DOMContentLoaded", function () {
        const authButton = document.getElementById("authButton");

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                authButton.innerText = "Logout";
            } else {
                authButton.innerText = "Login";
            }
        });

        authButton.addEventListener("click", function () {
            const user = firebase.auth().currentUser;

            if (user) {
                firebase.auth().signOut().then(function () {
                    console.log("User signed out");
                }).catch(function (error) {
                    console.error("Error signing out:", error);
                });
            } else {
                console.log("User not signed in, implement login logic");
                // Implement your login logic here
            }
        });
    });
