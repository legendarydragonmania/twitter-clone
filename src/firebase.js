import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDjBZ_fyNhGm7CoMZKHdDQovKaJ6Ti_ol4',
  authDomain: 'twitter-clone-32737.firebaseapp.com',
  projectId: 'twitter-clone-32737',
  storageBucket: 'twitter-clone-32737.appspot.com',
  messagingSenderId: '534043779912',
  appId: '1:534043779912:web:bbe0c25af8a3a6b080c97d',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
