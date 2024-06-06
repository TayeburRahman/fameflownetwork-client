import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../../../layout/DefaultLayout';
import TableOrder from './component/Table';

const AllOrders = () => {
  const localAuth = localStorage?.getItem('auth');
  const { token } = JSON.parse(localAuth || '{}');

  const [orders, setOrders] = useState();
  const [isLoading, setLoading] = useState(true);
  const [ispayment, setChangePayment] = useState('Paid');
  const [isstatus, setChangeState] = useState('Processing');

  const navigate = useNavigate();

  useEffect(() => {
    const publicationDataApi = async () => {
      try {
        const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/payment/oder/${isstatus}/${ispayment}`;
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
  }, [isstatus, ispayment]);

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <div className="d-flex-c mb-5">
          <form className="max-w-sm mx-auto w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Filter by Status
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setChangeState(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Processing" selected>
                Processing
              </option>
              <option value="Compted">Compted</option>
            </select>
          </form>

          <form className="max-w-sm mx-auto w-full">
            <label className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white">
              Filter by Payment
            </label>
            <select
              id="countries"
              onChange={(e) => setChangePayment(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="UnPaid">Un Paid</option>
              <option value="Paid" selected>
                Paid
              </option>
            </select>
          </form>
        </div>
        <TableOrder isLoading={isLoading} orders={orders} />
      </div>
    </DefaultLayout>
  );
};

export default AllOrders;
