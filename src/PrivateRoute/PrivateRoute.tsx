import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const navigate = useNavigate();
  const { isLoggedIn, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      navigate('/auth/signin');
    }
  }, [isLoggedIn, isLoading, navigate]);

  if (isLoading) {
    return null; // Render nothing while authentication data is loading
  }

  return isLoggedIn ? (children as JSX.Element) : null; // Render children if user is authenticated
}
