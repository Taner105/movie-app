import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDi_gOr8QPwJQmyDAo4bfvgF-AK-uvaP_g",
  authDomain: "movie-app-1-dbcd7.firebaseapp.com",
  projectId: "movie-app-1-dbcd7",
  storageBucket: "movie-app-1-dbcd7.appspot.com",
  messagingSenderId: "448942341235",
  appId: "1:448942341235:web:f2b4562fc4b01929777e06"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);