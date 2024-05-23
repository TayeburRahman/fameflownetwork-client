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
export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUser, setUsers] = useState<USER>();

  useEffect(() => {
    try {
      const localAuth = localStorage?.getItem('auth');
      if (localAuth) {
        const { user, token } = JSON.parse(localAuth);
        if (token && user) {
          setIsLoggedIn(true);
          setUsers(user);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error retrieving user from local storage:', error);
      setIsLoading(false);
    }
  }, []);

  return { isLoggedIn, isLoading, isUser };
}
