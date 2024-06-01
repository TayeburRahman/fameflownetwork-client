import { useState } from 'react';
import DefaultLayout from '../../../../layout/DefaultLayout';
import TableOrder from './component/Table';

const ActiveOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState();

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <TableOrder orders={orders} isLoading={isLoading} />
      </div>
    </DefaultLayout>
  );
};

export default ActiveOrders;
