// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8qCNzJjDjzUUxOMfW-0T4rgZL71kSsCs",
  authDomain: "dev-trial-ef2d6.firebaseapp.com",
  projectId: "dev-trial-ef2d6",
  storageBucket: "dev-trial-ef2d6.appspot.com",
  messagingSenderId: "973166235192",
  appId: "1:973166235192:web:a79b0d41b24ac9f9f020cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth= getAuth();
export const provider= new GoogleAuthProvider()
export const gitHubProvider = new GithubAuthProvider()
export default app