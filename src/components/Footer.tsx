import { FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <section className="bg-black brightness-90">
      <div className="wrapper py-10 text-white/90 flex justify-around flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-5">About Us</h1>
          <p>
          Seize this rare opportunity to own a prime piece of land in Coventry's serene countryside. Located on Hawkes Mill Lane, this final plot offers a unique chance to build your dream home. With detailed planning already approved for an 1850 sq/ft luxury dwelling and potential to extend up to 2400 sq/ft, your vision for a perfect home can become a reality. Embrace the tranquility of rural living while enjoying the convenience of city proximity. Don't miss out on this exclusive offer!
          </p>
        </div>

        <div className="flex-1">
          <h4 className="text-xl font-bold mb-5">Contact Us</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaLocationArrow />
              <address>Hawkes Mill Lane, Coventry, Warks, CV5</address>
            </div>

            <div className="flex gap-2 items-center">
              <BsFillTelephoneOutboundFill />
              <p>07940794030</p>
            </div>

            <div className="flex items-center gap-2">
              <MdMarkEmailRead />
              <p>leeclarkeltd@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-xl font-bold mb-5">Follow Us</h4>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
            >
              <img
                src="https://i.ibb.co/mCS1J3J/facebook.png"
                alt="Facebook Log"
                className="w-[40px]"
              />
            </a>
            <img
              src="https://i.ibb.co/6HsjpCk/youtube.png"
              alt="Youtube  Logo"
              className="w-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
