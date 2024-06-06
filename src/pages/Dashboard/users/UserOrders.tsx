import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserLayout from '../../../layout/UserLayout';
import TableOrder from './Table';

interface User {
  _id: string;
  name: string;
  email: string;
  publish_site: number;
  sales: string;
}

const UserOrders = () => {
  const [userData, setUserData] = useState({
    _id: '',
    name: '',
    email: 'string',
  });
  const localAuth = localStorage?.getItem('auth');
  const { token, user } = JSON.parse(localAuth || '{}');
  const navigate = useNavigate();
  const { id } = useParams();

  const [orders, setOrders] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const publicationDataApi = async () => {
      try {
        const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/payment/order/user/${user?.email}`;
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { order, status } = response.data;
        if (status === 'success') {
          setOrders(order);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error: any) {
        console.log('error', error.response);
        setLoading(false);
        if (error.response.status === 400) {
          navigate('/auth/signin');
        }
      }
    };
    publicationDataApi();
  }, []);

  return (
    <UserLayout>
      <div className="mx-auto max-w-270">
        <TableOrder isLoading={isLoading} orders={orders} />
      </div>
    </UserLayout>
  );
};

export default UserOrders;
