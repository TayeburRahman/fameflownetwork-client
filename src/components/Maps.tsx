import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Maps = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="section-padding">
      <h2 className="text-4xl font-bold text-center mb-10">Location</h2>
      <div className="flex flex-col md:flex-row gap-10">
        {/* map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.0712540166!2d-1.5621613999999997!3d52.441624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774ca67966bb7f%3A0x299cfc54b0eb3b36!2sHawkes%20Mill%20Ln%2C%20Allesley%2C%20Coventry%2C%20UK!5e0!3m2!1sen!2sbd!4v1703621878197!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="flex-1 h-[400px] w-full rounded-xl"
          data-aos="fade-right"
        ></iframe>


        {/* near places */}
        <div
          className="flex-1 flex justify-center flex-col"
          data-aos="fade-left"
        >
          <p className="text-xl font-bold mb-12">
          NEAREST STATIONS
          </p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Canley Station</p>
              <p>3.0 miles</p>
            </div>

            <div className="flex justify-between">
              <p>Coventry Arena Station</p>
              <p>3.0 miles</p>
            </div>

            <div className="flex justify-between">
              <p>Tile Hill Station</p>
              <p>3.5 miles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;
