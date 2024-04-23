import { useEffect } from "react";
import Aos from "aos";
import places from "../../public/places.json";
import "aos/dist/aos.css";

const NearPlaces = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 section-padding">
      <div className="wrapper">
        {/* section title */}
        <div className="space-y-5 text-center mb-10" data-aos="fade-down">
          <h2 className="text-4xl font-bold">Nearby Places</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
            illum.
          </p>
        </div>

        {/* property details */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          data-aos="fade-up"
        >
          {places.map((item, index) => (
            <div key={index} className="space-y-2 flex flex-col items-center">
              <img
                src={item?.image_url}
                alt={item?.name}
                className="w-[50px]"
              />
              <h4 className="text-base font-semibold text-center truncate">
                {item?.name}
              </h4>
              <p>{item?.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearPlaces;
