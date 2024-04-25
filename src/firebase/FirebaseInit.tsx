import { initializeApp } from 'firebase/app';
import firebaseConfig from './FirebaseConfic';

const initializeFirebase = (): void => {
  initializeApp(firebaseConfig);
};

export default initializeFirebase;
