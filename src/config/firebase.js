import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWf0FdtrbdcKQ5qPpDzwRyXB_j4r8tWHY",
  authDomain: "via-scholae-chat.firebaseapp.com",
  projectId: "via-scholae-chat",
  storageBucket: "via-scholae-chat.firebasestorage.app",
  messagingSenderId: "613957655865",
  appId: "1:613957655865:web:8236aa098b70f60e175ce8",
  measurementId: "G-D015QEDVVW"
};

let app;
if (!getApps().length) {
  console.log('Conectando ao Firebase...');
  app = initializeApp(firebaseConfig);
  console.log('Conectado ao Firebase.');
} else {
  app = getApps()[0];
}

// Inicializa o Firestore
export const database = getFirestore(app);
export default app;
