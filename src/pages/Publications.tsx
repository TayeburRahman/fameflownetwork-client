const Publications = () => {
  return (
    <section className="mx-40 grid place-items-center max-md:mx-2">
      <h1 className="text-3xl text-center font-bold">
        Add Extra Publications for Even More Traffic
      </h1>
      <p className="text-gray-500 text-[23px] py-7 font-[400] leading-8 text-center">
        Add premium outlets to any package for a massive boost in exposure and
        credibility.
      </p>
      <div className="grid grid-cols-12 gap-6 my-10 max-md:block max-md:space-y-5">
        <div className="space-y-10 place-items-center bg-white border-gray-600 p-5 py-6 rounded-2xl border-2 col-span-6">
          <div className="flex items-center justify-between gap-40">
            <img
              src="https://www.brandpush.co/assets/img/news-logos/Publish_on_MSN_with_BrandPush.svg"
              className="w-[20%]"
              alt=""
            />
            <span className="bg-black text-white rounded px-5 py-1">
              $550.00
            </span>
          </div>
          <div className="flex justify-between gap-40 items-center mx-5 col-span-5">
            <div>
              <p className="text-orange-600">689.1m</p>
              <p>visitors</p>
            </div>
            <div>
              <p className="text-orange-600">689.1m</p>
              <p>visitors</p>
            </div>
          </div>
        </div>
        <div className="space-y-10 place-items-center bg-white border-gray-600 p-5 py-6 rounded-2xl border-2 col-span-6">
          <div className="flex items-center justify-between gap-40">
            <img
              src="https://www.brandpush.co/assets/img/news-logos/Publish_on_Yahoo_Finance_with_BrandPush.svg"
              className="w-[20%]"
              alt=""
            />
            <span className="bg-black text-white rounded px-5 py-1">
              $550.00
            </span>
          </div>
          <div className="flex justify-between gap-40 items-center mx-5 col-span-5">
            <div>
              <p className="text-orange-600">689.1m</p>
              <p>visitors</p>
            </div>
            <div>
              <p className="text-orange-600">689.1m</p>
              <p>visitors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
