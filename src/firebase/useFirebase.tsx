import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from './FirebaseInit';

// Initialize Firebase app
initializeFirebase();

interface UserData {
  email: string;
  displayName: string;
  addres?: string;
  phone?: string;
}

const useFirebase = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState('');

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signImWithGoogle = (location: any) => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // User data save or update
        const userData = result.user;
        saveUser(userData?.email, userData?.displayName, '', '', 'PUT');
        const destination = location?.state?.from || '/';
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      // Loading
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      // Loading
      .finally(() => setIsLoading(false));
  };

  // Save User to the database
  const saveUser = (
    email: string,
    displayName: string,
    phone?: string,
    addres?: string,
    method?: string,
  ) => {
    const userData: UserData = {
      email,
      displayName,
      addres: addres || '',
      phone: phone || '',
    };
    fetch('https://pacific-escarpment-27904.herokuapp.com/users', {
      method: method || 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    }).then();
  };

  return {
    user,
    logOut,
    isLoading,
    authError,
    signImWithGoogle,
    admin,
  };
};

export default useFirebase;
