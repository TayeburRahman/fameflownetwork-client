import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductOne from '../../../../images/product/product-01.png';
import ProductTwo from '../../../../images/product/product-02.png';
import ProductThree from '../../../../images/product/product-03.png';
import ProductFour from '../../../../images/product/product-04.png';
import DefaultLayout from '../../../../layout/DefaultLayout';
import { Product } from '../../../../types/product';
import Table from './Table';

interface User {
  _id: string;
  name: string;
  email: string;
  publish_site: number;
  sales: string;
}

const productData: Product[] = [
  {
    image: ProductOne,
    name: 'Apple Watch Series 7',
    category: 'Electronics',
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: ProductTwo,
    name: 'Macbook Pro M1',
    category: 'Electronics',
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: ProductThree,
    name: 'Dell Inspiron 15',
    category: 'Electronics',
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: ProductFour,
    name: 'HP Probook 450',
    category: 'Electronics',
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const SampolReports = () => {
  const [userData, setUserData] = useState({
    _id: 'sampolreports',
    name: 'Sampol Reports',
    email: 'SampolReports@gmail.com',
  });
  const localAuth = localStorage?.getItem('auth');
  const { token } = JSON.parse(localAuth || '{}');
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark pt-5">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <Table userData={userData} mType="admin" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SampolReports;
