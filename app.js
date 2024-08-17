import { initializeApp } from "firebase/app";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIIh1I-pDFnkb-qZiJWlL0PwDVyupoa0o",
  authDomain: "stripe-login-75699.firebaseapp.com",
  projectId: "stripe-login-75699",
  storageBucket: "stripe-login-75699.appspot.com",
  messagingSenderId: "155000861081",
  appId: "1:155000861081:web:536fe4c5febc67b20d2308"
};

const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

// Registration
document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Registration Successful!');
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Login
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Login Successful!');
    })
    .catch((error) => {
      alert(error.message);
    });
});
