const Overview = () => {
  return (
    <section className="text-center my-16">
      <h1 className="text-black text-5xl font-bold max-md:text-2xl">
        Marketing that gets Results!
      </h1>
      <p className="text-gray-500 py-10 text-[20.8px] max-md:text-[14px] max-md:py-5">
        Boost your online presence with higher search rankings and more buyers
        to your site!
      </p>
      <div className="grid grid-cols-2 gap-16 px-16 max-md:block max-md:px-5">
        <div>
          <div className="space-y-5 mt-12 max-md:mt-2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/-Q-LCWKYfxg"
                className="rounded-2xl w-full h-[333px] max-md:h-[190px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-left space-y-4 mt-10 w-[90%] max-md:text-center max-md:w-full">
          <h2 className="text-3xl font-bold max-md:text-xl max-md:text-center">
            {' '}
            <i className="fa-solid fa-heart"></i>Get featured on influential
            <br /> news sites in just 7 days!
          </h2>
          <p className="w-[95%] text-gray-500 text-[17px] max-md:text-center max-md:text-[12px] py-7 font-[500] leading-8 max-md:w-full">
            Need more exposure? We've got you covered. Our team of experienced
            writers can craft the perfect news story to generate interest in
            your brand. We then publish the story on influential news sites to
            bring you massive exposure and even sales! Start today and get
            published in just 7 days.
          </p>
          <a href="#packages">
            <button className="py-[20px] px-16 max-md:px-2 rounded-[50px] text-center text-1xl w-[100%] bg-black text-white max-md:w-[60%] max-md:text-[10px] max-md:p-2 ">
              See Our Packages
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overview;
