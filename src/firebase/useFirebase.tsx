import axios from 'axios';
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import useToast from '../hooks/useToast';
import initializeFirebase from './FirebaseInit';

// Initialize Firebase app
initializeFirebase();

interface UserData {
  email: string;
  displayName: string;
  addres?: string;
  phone?: string;
  avatars: string;
}

const useFirebase = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState('');

  const [cookies, setCookie, removeCookie] = useCookies(['auth']);

  const { displayToast } = useToast();
  // const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signImWithGoogle = (location: any, navigate: any) => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // User data save or update
        const userData = result.user;

        saveUser(
          userData?.email,
          userData?.displayName,
          userData.photoURL,
          'PUT',
        );
        const destination = location?.state?.from || '/';
        navigate(destination);
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
  const saveUser = async (
    email: string,
    displayName: string,
    photoURL?: string,
    method?: string,
  ) => {
    const userData: UserData = {
      email,
      displayName,
      avatars: photoURL || '',
    };

    const apiUrl =
      'https://fameflownetwork-server.vercel.app/api/v1/user/google-auth';
    const response = await axios.post(apiUrl, userData);
    const { token, user } = response.data;

    console.log(response, token, user);

    if (user?.email) {
      setCookie('auth', {
        token: token,
        user: user,
        id: user._id,
      });

      localStorage.setItem(
        'auth',
        JSON.stringify({
          token: token,
          user: user,
          id: user._id,
        }),
      );

      displayToast({
        status: 'success',
        message: 'Login successfully!',
      });

      // navigate('/');
    } else {
    }
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
