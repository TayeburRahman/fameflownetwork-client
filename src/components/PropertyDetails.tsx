import { useEffect, useState } from "react";
import clsx from "clsx";
import Aos from "aos";
import Accordion from "./Accordion";
import "aos/dist/aos.css";

const PropertyDetails = () => {
  const [isOpenText, setIsOpenText] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="section-padding grid grid-cols-1 md:grid-cols-5 gap-10"
      id="about"
    >
      {/* property description */}
      <div className="md:col-span-3" data-aos="fade-up">
        <div className="space-y-5">
          <h3 className="text-3xl font-bold">Property Description</h3>
          <div
            className={clsx(
              "text-justify space-y-2",
              isOpenText ? null : "line-clamp-[18]"
            )}
          >
            <p className="font-bold text-lg"></p>
            <p className="desc1">
              Discover the last available plot in the picturesque Hawkes Mill Lane, a serene and sought-after location in Coventry's beautiful countryside. This is more than just a piece of land; it's a gateway to your dream home.<br/><br/>

🏡 Build Your Dream Home in Tranquility
Offering a substantial plot size of 1850 sq/ft with the potential to extend up to 2400 sq/ft, this land is a blank canvas for your architectural aspirations. Whether you dream of a modern, spacious family home or a cozy, bespoke cottage, the approved detailed planning allows you to bring your vision to life with ease.<br/><br/>

🌳 A Unique Blend of Countryside Charm and City Convenience
Nestled on a private road and overlooking the lush countryside, this plot promises a peaceful living environment, away from the hustle and bustle. Yet, its proximity to Coventry city ensures that all urban conveniences are just a short drive away. Enjoy the best of both worlds - the tranquility of rural life and the accessibility of city amenities.<br/><br/>

🔍 Approved Plans & Ready Services
The property comes with detailed planning permission (Ref: RM/2021/3791 viewable on Coventry Council Planning Portal), ensuring a smooth start to your building journey. Additionally, all essential services are already on site, further simplifying the development process.<br/><br/>

💷 An Investment in Your Future
Priced at £295,000, this final plot in Hawkes Mill Lane represents not just an investment in land, but in a lifestyle of peace, privacy, and prestige. It's a rare opportunity to create a home that's perfectly tailored to your needs and desires.<br/><br/>

📅 Arrange Your Viewing Today
We invite you to experience the potential of this beautiful plot firsthand. For arrangements and more information, please get in touch with us. Don't miss this chance to own a piece of Coventry's finest countryside.<br/><br/>

Hawkes Mill Lane, Coventry, Warks, CV5<br/>
Offers in the Region of £295,000<br/><br/>

📞 Contact us now to explore this exclusive land opportunity and take the first step towards building your dream home!<br/>
            </p>
            {/* <p className="font-bold text-lg">Specification</p>
            <p>
              <span className="font-bold">General - -Oak porch</span>
              <br />
              -Oak veneer doors with polished chrome <br /> -Zoned heating to
              upper floors <br /> -Fibre broadband to premises for home working{" "}
              <br /> -CAT 5 cabling for secure networks to lounge and bedrooms{" "}
              <br /> -10 year warranty <br /> -Large storage area in loft space
            </p>
            <p>
              <span className="font-bold">
                Kitchen - -Designer magnet kitchens
              </span>{" "}
              <br />
              -Quartz worktops and under mounted sink <br /> -Integrated
              appliances <br /> -Wine rack <br /> -Hansgrohe tap <br /> -Under
              unit and LED lighting
            </p>
            <p>
              <span className="font-bold">Bathrooms - -Porcelain tiling</span>{" "}
              <br />
              -LED feature lighting <br /> -Hansgrohe tops <br /> -Wall hung
              sanitary wear
            </p>

            <p>
              <span className="font-bold">Externals - -Outside tap</span> <br />
              -Security alarm system <br /> -3kw charging point with provisions
              for 7kw <br /> -Rear outside lights <br /> -Porch lantern <br />{" "}
              -Dusk to dawn lantern
            </p> */}
          </div>

          <button
            onClick={() => setIsOpenText(!isOpenText)}
            className="text-yellow-400 font-bold ital"
          >
            {isOpenText ? "Read Less..." : "Read More..."}
          </button>
        </div>
      </div>

      {/* contact info */}
      <div className="md:col-span-2" data-aos="fade-down">
        <div className="boxShadow rounded-xl brightness-100 bg-gray property-contact border-slate-50 my-border" >
          <img
            src="https://i.ibb.co/xjsPLfG/hero-img.jpg"
            alt="Property Image"
            className="h-[200px] lg:h-[250px] w-full object-cover object-center rounded-t-xl"
          />

          <div className="text-purple-700 py-2 px-5 space-y-2 bg-purple-100 ">
            <p className="font-bold text-lg">£295,000</p>
            <p>Offers in Region of</p>
          </div>

          <div className="p-5">
            <div className="space-y-2">
              <p className="font-bold text-lg">5 bedroom | 4 Bathroom</p>
              <p>Hawkes Mill Lane, Coventry, Warks, CV5</p>
            </div>

            <hr className="w-[50%] mx-auto border-[1px] border-gray-500 my-5" />

            <div className="space-y-2">
              <h4 className="text-xl font-bold truncate">
              Lee Clarke, Estate Agent, Coventry
              </h4>
              {/* <p className="truncate">
                111 New Union Street, Coventry, CV5 7DS
              </p> */}
            </div>

            <div className="bg-purple-100 px-5 py-3 rounded-2xl my-4 space-y-2">
              <p className="text-lg font-bold text-black">
                <span className="text-purple-700">Call:</span> 07940794030
              </p>
            </div>

            {/* <Dropdown /> */}
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
