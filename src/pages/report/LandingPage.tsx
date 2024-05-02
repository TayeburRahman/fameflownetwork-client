import Footer from '../../components/Footer';
import Sample from '../Sample';
import Banner from './Banner';
import NavBar from './NavBar';

const LandingPage = () => {
  return (
    <main className="mx-auto overflow-x-hidden max-md:mx-2">
      <NavBar />
      <Banner />
      <Sample />
      <Footer />
    </main>
  );
};

export default LandingPage;
