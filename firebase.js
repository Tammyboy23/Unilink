 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
  import { getFirestore, doc, setDoc    } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCVCUHGTl2qwCwAU1ZO0hTw-rxRxSRyHPs",
    authDomain: "unilink-8ceca.firebaseapp.com",
    projectId: "unilink-8ceca",
    storageBucket: "unilink-8ceca.firebasestorage.app",
    messagingSenderId: "112159685389",
    appId: "1:112159685389:web:2ef2e1b450adf3ab834e44"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const signupBtn = document.getElementById("signupBtn");
  signupBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("User signed up successfully!");
        window.location.href = "login.html";
        isLoggedIn = true;
       

      });
      
  });
