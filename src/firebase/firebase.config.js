// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj3m1wjF2nUCRTP67pH9vH7TRAQXQ3EzA",
  authDomain: "abdul-aziz-news.firebaseapp.com",
  projectId: "abdul-aziz-news",
  storageBucket: "abdul-aziz-news.appspot.com",
  messagingSenderId: "778490369666",
  appId: "1:778490369666:web:1afa0e5fc0a4af939f469b",
  measurementId: "G-J9WTSZ7DNR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
