import { useEffect, useState } from 'react';

type USER = {
  bio: string;
  createdAt: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  status: string;
  _id: string;
};

export default function useAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setAdmin] = useState<USER>();

  useEffect(() => {
    try {
      const localAuth = localStorage?.getItem('auth');
      if (localAuth) {
        const { user, token } = JSON.parse(localAuth);

        if (token && user?.email) {
          if (user.role === 'admin') {
            setAdmin(user);
            setIsLoggedIn(true);
          }
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error retrieving user from local storage:', error);
      setIsLoading(false);
    }
  }, []);

  return { isLoggedIn, isLoading, isAdmin };
}
