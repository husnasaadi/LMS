import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB7Z7b8A_A_3en_W2A_wgS10_N0V92j1iM",
  authDomain: "lms-project-4eefd.firebaseapp.com",
  projectId: "lms-project-4eefd",
  storageBucket: "lms-project-4eefd.appspot.com",
  messagingSenderId: "576425199902",
  appId: "1:576425199902:web:7d31a9e77c54f4ea16610f"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
