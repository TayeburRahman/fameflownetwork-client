import { useNavigate } from 'react-router-dom';
import TableLoader from '../../../components/TableLoader';

type PropsS = {
  isLoading: any;
  orders: any;
};

const TableOrder = ({ orders, isLoading }: PropsS) => {
  const navigate = useNavigate();

  return (
    <div>
      {isLoading ? (
        <TableLoader />
      ) : (
        <div className="">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Email
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Package
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Invoice Date
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Price
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Payment Status
                </th>
              </tr>
            </thead>

            <tbody>
              {orders?.length ? (
                orders.map((order, key) => (
                  <tr
                    onClick={(e) =>
                      navigate(`/user-dashboard/orders/${order?._id}`)
                    }
                    key={key}
                    style={{ cursor: 'pointer' }}
                  >
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {order.email}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {order.publishPackage?.title}
                      </p>
                      <p className="text-black dark:text-white">
                        {order.writingPackage?.title}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {order?.updatedAt.slice(0, 10)}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {order.price}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <button
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          order.payment === 'Paid'
                            ? 'bg-success text-success'
                            : order.payment === 'Pending' &&
                              'bg-warning text-warning'
                        }`}
                      >
                        {order.payment === 'Paid' ? 'Paid' : 'Pending'}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h6 className="w-full mt-5 mb-5 flex justify-center">
                  Data Not Found!
                </h6>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableOrder;
