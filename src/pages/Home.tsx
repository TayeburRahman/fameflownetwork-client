import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Case from './Case';
import Faq from './Faq';
import Featured from './Featured';
import Highlights from './Highlights';
import HowItWorks from './HowItWorks';
import MoneyBack from './MoneyBack';
import OneReview from './OneReview';
import Overview from './Overview';
import Packages from './Packages';
import Part from './Part';
import Pricing from './Pricing';
import Publications from './Publications';
import Ready from './Ready';
import Recommend from './Recommend';
import Whyuse from './Whyuse';

const Home = () => {
  return (
    <main className="px-auto mx-auto overflow-x-hidden max-md:mx-2">
      <Navbar />
      <Hero />
      <Featured />
      <Overview />
      <Highlights />
      <OneReview />
      <HowItWorks />
      <Recommend />
      <Case />
      <Packages />
      <Publications />
      {/* <Trusted /> */}
      <Pricing />
      <Part />
      <MoneyBack />
      <Whyuse />
      <Faq />
      <Ready />
    </main>
  );
};

export default Home;
