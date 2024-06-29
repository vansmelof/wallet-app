// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/getFirestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSweUpw2vOEzm7UvJEC-0zha_FARYpU7I",
  authDomain: "wallet-app-b9e4c.firebaseapp.com",
  projectId: "wallet-app-b9e4c",
  storageBucket: "wallet-app-b9e4c.appspot.com",
  messagingSenderId: "154056840676",
  appId: "1:154056840676:web:ba5266f13cb82af331a3f1",
  measurementId: "G-5X2KNVBL7T"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactnativeAsyncStorage)
});
export const db = getFirestore(app);
