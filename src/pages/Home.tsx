import Navbar from '../components/Navbar'
import Hero from "../components/Hero";
import Featured from './Featured';
import Overview from './Overview';
import Highlights from './Highlights';
import OneReview from './OneReview';
import HowItWorks from './HowItWorks';
import Recommend from './Recommend';
import Case from './Case';
import Ready from './Ready';
import Whyuse from './Whyuse';
import MoneyBack from './MoneyBack';
import Publications from './Publications';
import Trusted from './Trusted';
import Pricing from './Pricing';
import Part from './Part';
import Faq from './Faq';
import { useState } from 'react';
import Packages from './Packages';
import Tabs from '../components/Tabs';

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
      {/* <Recommend /> */}
      {/* <Case /> */}
      <Packages/>
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
