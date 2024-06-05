import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="section-padding grid grid-cols-5 gap-4 place-items-center py-10 md:py-0 p-10 pt-24 mt-[17vh] max-md:mt-14 max-md:pt-2 max-md:block max-md:space-y-10"
      id="hero"
    >
      {/* title description */}
      <div
        className="heading-text space-y-7 max-md:space-y-3 col-span-3 pe-14 max-md:pe-2"
        data-aos="fade-right"
      >
        <h3 className="font-bold text-4xl text-gray-500 max-md:text-2xl">
          Get Featured On
        </h3>
        <h1 className="font-bold text-6xl text-black max-md:text-4xl">
          205+ NEWS SITES
        </h1>
        <h2 className="font-bold text-3xl text-gray-700 max-md:text-[13px]">
          Go Viral With Massive Exposure
        </h2>
        <p className="text-[17px] max-md:text-[13px]">
          {/* FINAL PLOT FOR SALE. UNIQUE LOCATION ON PRIVATE ROAD OVERLOOKING COUNTRYSIDE. DETAILED PLANNING CURRENTLY APPROVED FOR EXCLUSIVE 1850 SQ/FT DWELLING. THE SITE HAS ITS PERMITTED DEVELOPMENT IN TACT ALLOWING FOR INITIAL AUTOMATIC EXTENSION UP TO 2400 SQ/FT. ALL SERVICES ON SITE. */}
          Step into the spotlight with your story featured across our network of
          200 influential news sites, reaching an impressive audience of 100
          million visitors each month. Elevate your visibility and search
          rankings with a powerful exposure boost by showcasing your content..
        </p>

        <div className="space-x-3 mt-[100px] btns max-md:flex">
          <Link
            className="inline-block button-head1 max-md:text-[10px] max-md:p-2 max-md:px-4 max-md:py-2 max-md:h-full"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Get Started
          </Link>
          <NavLink
            to="/sample-reports"
            className="inline-block button-head max-md:text-[10px] max-md:p-2 max-md:px-4 max-md:py-2 max-md:h-full"
          >
            SEE NEWS SITES
          </NavLink>
        </div>
      </div>

      {/* video */}
      {/* video */}
      <div className="video col-span-2 max-md:w-[100%]">
        <img
          className="aspect-video max-md:aspect-auto brightness-90 rounded-[10%] max-md:w-full max-md:w-full"
          data-aos="fade-left"
          src="https://img001.prntscr.com/file/img001/9SO1QOlsQpW87SgVW1kXfQ.png"
        />
      </div>
    </section>
  );
};

export default Hero;
