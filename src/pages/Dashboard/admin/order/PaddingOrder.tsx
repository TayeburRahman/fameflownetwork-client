import axios from 'axios';
import { useEffect, useState } from 'react';
import DefaultLayout from '../../../../layout/DefaultLayout';
import TableOrder from './component/Table';

const PaddingOrder = () => {
  const localAuth = localStorage?.getItem('auth');
  const { token } = JSON.parse(localAuth || '{}');

  const [orders, setOrders] = useState();
  const [isLoading, setLoading] = useState(true);

  console.log('orders', orders);

  useEffect(() => {
    const publicationDataApi = async () => {
      try {
        const apiUrl = `http://localhost:6060/api/v1/payment/oder`;
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
      }
    };
    publicationDataApi();
  }, []);

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <TableOrder isLoading={isLoading} orders={orders} />
      </div>
    </DefaultLayout>
  );
};

export default PaddingOrder;
