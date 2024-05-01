import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';

interface User {
  _id: string;
  name: string;
  email: string;
  publish_site: number;
  sales: string;
  status: string;
}

const ManageUsers = () => {
  const [users, setUsers] = useState<User[]>();
  const localAuth = localStorage?.getItem('auth');
  const { token } = JSON.parse(localAuth || '{}');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/auth/signin');
    }
    const userDataApi = async () => {
      try {
        const apiUrl =
          'https://fameflownetwork-server.vercel.app/api/v1/user/getByAllAuthor';

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = response;
        setUsers(data);
      } catch (error: any) {
        console.log('error', error.response);
        if (error.response.status === 400) {
          navigate('/auth/signin');
        }
      }
    };
    userDataApi();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Manage Users" />

      {/* <!-- ====== ManageUsers Section Start ====== --> */}
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          User List
        </h4>

        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Name
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Email
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Package
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Invoice date
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users?.map((data, key) => (
                  <tr
                    key={key}
                    onClick={() =>
                      navigate(`/dashboard/admin/user/${data._id}`)
                    }
                    style={{ cursor: 'pointer' }}
                  >
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {data.name}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">{data.email}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        Standard Package
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">Jan 13,2023</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          data.status === 'Paid'
                            ? 'bg-success text-success'
                            : data.status === 'Unpaid'
                              ? 'bg-danger text-danger'
                              : 'bg-warning text-warning'
                        }`}
                      >
                        Pending
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Email
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Publish site
              </h5>
            </div>

            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Status
              </h5>
            </div>
          </div>

          {users &&
            users?.map((data, key) => (
              <Link to={`/dashboard/admin/user/${data._id}`}>
                <div
                  className={`grid grid-cols-3 sm:grid-cols-5 ${
                    key ? '' : 'border-b border-stroke dark:border-strokedark'
                  }`}
                  key={key}
                >
                  <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <div className="flex-shrink-0"> 
                    </div>
                    <p className="hidden text-black dark:text-white sm:block">
                      {data.name}
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">
                      {data.email}
                      \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">0</p>
                  </div>

                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-meta-5">${data.publish_site} Un paid</p>
                  </div>
                </div>
              </Link>
            ))}
        </div> */}
      {/* <!-- ====== ManageUsers Section End ====== --> */}
    </DefaultLayout>
  );
};

export default ManageUsers;
