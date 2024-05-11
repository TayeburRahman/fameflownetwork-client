import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import PackageReport from '../../components/PackageReport';
import { SITES } from '../../types/brand';
import Sample from '../Sample';
import Banner from './Banner';
import NavBar from './NavBar';

const LandingPage = () => {
  const { name } = useParams();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [publication, setPublication] = useState<SITES[]>();

  useEffect(() => {
    const publicationDataApi = async () => {
      try {
        const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/package/get`;
        const apiUrl2 = `https://fameflownetwork-server.vercel.app/api/v1/package/get/r/${name}`;

        const response = await axios.get(name === 'sample' ? apiUrl : apiUrl2);
        const { sites, status } = response.data;

        if (status === 'success') {
          setPublication(sites);
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
    <main className="mx-auto overflow-x-hidden max-md:mx-2">
      <NavBar />
      <Banner name={name} />
      <div>
        <PackageReport report={publication} isLoading={isLoading} />
      </div>
      <Sample name={name} isLoading={isLoading} publication={publication} />
      <Footer />
    </main>
  );
};

export default LandingPage;
