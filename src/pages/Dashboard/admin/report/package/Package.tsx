import { useState } from 'react';
import { useParams } from 'react-router-dom';

import DefaultLayout from '../../../../../layout/DefaultLayout';
import Table from '../Table';

interface User {
  _id: string;
  name: string;
  email: string;
  publish_site: number;
  sales: string;
}

const Package = () => {
  const { name } = useParams();

  const [userData, setUserData] = useState({
    _id: 'sampolreports',
    name: 'Sampol Reports',
    email: 'SampolReports@gmail.com',
  });

  console.log('name', name);

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark pt-5">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <Table userData={userData} mType="admin" name={name} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Package;
