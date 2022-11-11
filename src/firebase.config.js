import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYuNT25wL7kiM-ARwBL445nQxHqZBgftc",
  authDomain: "maltimart-1b165.firebaseapp.com",
  projectId: "maltimart-1b165",
  storageBucket: "maltimart-1b165.appspot.com",
  messagingSenderId: "946123392753",
  appId: "1:946123392753:web:377308259264fbcff10b50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
