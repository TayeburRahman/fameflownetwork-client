import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Sample from '../Sample';
import Banner from './Banner';
import NavBar from './NavBar';

const LandingPage = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <main className="mx-auto overflow-x-hidden max-md:mx-2">
      <NavBar />
      <Banner name={name} />
      <Sample name={name} />
      <Footer />
    </main>
  );
};

export default LandingPage;
