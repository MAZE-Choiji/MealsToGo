import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCLFHysAfVFttxwCsBaWio3fXhaiZc0fOk",
  authDomain: "mealstogo-c1f28.firebaseapp.com",
  projectId: "mealstogo-c1f28",
  storageBucket: "mealstogo-c1f28.appspot.com",
  messagingSenderId: "701248697970",
  appId: "1:701248697970:web:0b28c4136c2adf4a38b4eb"
}

const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
export const loginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);