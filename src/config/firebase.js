
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDMmVOutfWKjX5Meoikta34YmVhlrP-RLs",
  authDomain: "expensive-tracker-2918e.firebaseapp.com",
  projectId: "expensive-tracker-2918e",
  storageBucket: "expensive-tracker-2918e.appspot.com",
  messagingSenderId: "191141844254",
  appId: "1:191141844254:web:d17d7c142301379e1f250f",
  measurementId: "G-L14ERR11WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseConfig);
export {auth}