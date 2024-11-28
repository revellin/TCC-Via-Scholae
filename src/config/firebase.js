import { initializeApp, getApps } from 'firebase/app'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'
import { getFirestore, collection} from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCWf0FdtrbdcKQ5qPpDzwRyXB_j4r8tWHY',
  authDomain: 'via-scholae-chat.firebaseapp.com',
  projectId: 'via-scholae-chat',
  storageBucket: 'via-scholae-chat.firebasestorage.app',
  messagingSenderId: '613957655865',
  appId: '1:613957655865:web:8236aa098b70f60e175ce8',
  measurementId: 'G-D015QEDVVW',
}

if (!getApps().length) {
  console.log('Conectando ao Firebase...')
  app = initializeApp(firebaseConfig)
  console.log('Conectado ao Firebase.')
} else {
  app = getApps()[0]
}

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

// Inicializa o Firestore
export const database = getFirestore(app);

export const usersRef = collection(database, 'users')
export const roomRef = collection(database, 'room')

export default app
