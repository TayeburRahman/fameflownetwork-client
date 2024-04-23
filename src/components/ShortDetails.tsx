import { useEffect } from "react";
import { BiHomeAlt2, BiBed } from "react-icons/bi";
import { MdOutlineBathroom } from "react-icons/md";
import { SlSizeActual } from "react-icons/sl";
import Aos from "aos";
import "aos/dist/aos.css";

const ShortDetails = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="border-t-4 border-white/80" data-aos="fade-up">
      <div className="wrapper flex justify-between flex-wrap py-5 gap-y-5">
        <div>
          <p className="uppercase">Property Type</p>
          <div className="flex gap-2 items-center font-bold text-lg">
            <BiHomeAlt2 />
            <p>Land</p>
          </div>
        </div>

        <div>
          <p className="uppercase">Bedrooms</p>
          <div className="flex gap-2 items-center font-bold text-lg">
            <BiBed />
            <p>x5</p>
          </div>
        </div>

        <div>
          <p className="uppercase">Bathrooms</p>
          <div className="flex gap-2 items-center font-bold text-lg">
            <MdOutlineBathroom />
            <p>x4</p>
          </div>
        </div>

        <div>
          <p className="uppercase">Size</p>
          <div className="flex gap-2 items-center font-bold text-lg">
            <SlSizeActual />
            <p>1850 SQ/FT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortDetails;
