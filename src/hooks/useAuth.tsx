import { useEffect, useState } from 'react';

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const localAuth = localStorage?.getItem('auth');
      if (localAuth) {
        const { user, token } = JSON.parse(localAuth);
        if (token && user) {
          setIsLoggedIn(true);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error retrieving user from local storage:', error);
      setIsLoading(false);
    }
  }, []);

  return { isLoggedIn, isLoading };
}
