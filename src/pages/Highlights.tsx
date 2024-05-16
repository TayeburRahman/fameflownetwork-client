import { FaHeart } from 'react-icons/fa';
import { RiArrowUpDoubleFill } from 'react-icons/ri';

const Highlights = () => {
  return (
    <>
      <section className="grid grid-cols-2 right gap-16 mx-16 px-24 my-24 max-md:my-10 max-md:mb-24 max-md:block max-md:px-3 max-md:mx-5">
        <div className="space-y-10 py-24">
          <h1 className="text-6xl text-black font-bold heading max-md:text-3xl">
            {' '}
            <FaHeart /> Get Qualified Buyers
          </h1>
          <p className="w-[95%] text-gray-500 text-[17px] py-7 font-[500] leading-8 max-md:text-[15px]">
            Drive qualified buyers to your website by publishing on high-traffic
            news sites. Each publication acts as a landing page to warm buyers
            to your brand and offer before clicking through to your site.
          </p>
        </div>
        <div>
          <img
            src="https://www.brandpush.co/assets/img/Brand-Push-News-Card-10.jpg"
            alt=""
            width={370}
            height={470}
            className="rounded-2xl max-md:-mt-24"
            style={{ transform: 'rotate(-5deg)' }}
          />
        </div>
      </section>
      <section className="grid grid-cols-2 right gap-16 mx-16 px-24 my-24 max-md:my-5 max-md:block max-md:px-3 max-md:mx-5">
        <div>
          <img
            src="https://www.brandpush.co/assets/img/Brand-Push-News-Card-10.jpg"
            alt=""
            width={370}
            height={470}
            className="rounded-2xl "
            style={{ transform: 'rotate(5deg)' }}
          />
        </div>
        <div className="space-y-10 py-24">
          <h1 className="text-6xl text-black font-bold heading h2 max-md:text-3xl">
            {' '}
            <RiArrowUpDoubleFill /> Rank Higher on Google
          </h1>
          <p className="w-[95%] text-gray-500 text-[17px] py-7 font-[500] leading-8 max-md:text-[15px]">
            Our news stories often rank on the first page of Google for your
            keywords, driving more traffic to your site. Search engines consider
            links from these news sites as high authority recommendations,
            helping to push your search position higher.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 right gap-16 mx-16 px-24 my-24 max-md:my-5 max-md:mb-24  max-md:block max-md:px-3 max-md:mx-5">
        <div className="space-y-10 py-24">
          <h1 className="text-6xl text-black font-bold heading max-md:text-3xl">
            {' '}
            <FaHeart /> Get Verified on Social
          </h1>
          <p className="w-[95%] text-gray-500 text-[17px] py-7 font-[500] leading-8 max-md:text-[15px]">
            Our articles prove that you and your brand are public figures of
            interest that need verification. Many of our clients use our stories
            to get verified on Instagram, Facebook, Twitter, and other social
            media platforms.
          </p>
        </div>
        <div>
          <img
            src="https://www.brandpush.co/assets/img/Brand-Push-News-Card-10.jpg"
            alt=""
            width={370}
            height={470}
            className="rounded-2xl max-md:-mt-24"
            style={{ transform: 'rotate(-5deg)' }}
          />
        </div>
      </section>
      <section className="grid grid-cols-2 right gap-16 mx-16 px-24 my-24 max-md:my-5 max-md:block max-md:px-3 max-md:mx-5">
        <div>
          <img
            src="https://www.brandpush.co/assets/img/theme/Brand-Push-Promote-Website-With-Press-Release.jpeg"
            alt=""
            width={370}
            height={470}
            className="rounded-2xl"
          />
        </div>
        <div className="space-y-10 py-24">
          <h1 className="text-6xl text-black font-bold heading max-md:text-3xl">
            {' '}
            <FaHeart /> Increase Sales
          </h1>
          <p className="w-[95%] text-gray-500 text-[17px] py-7 font-[500] leading-8 max-md:text-[15px]">
            Generate more sales by installing our customizable "As Seen On"
            trust badge on your website. This badge improves conversion rates by
            up to 48% by building trust and legitimacy with your visitors.
          </p>
        </div>
      </section>
    </>
  );
};

export default Highlights;
