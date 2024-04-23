import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import Aos from "aos";
import images from "../../public/images.json";
import image from "../assets/img1.jpeg";
import "aos/dist/aos.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="border-t-4 border-black/80 bg-gray-100 section-padding flex flex-col md:flex-row gap-10"
      id="floor-plans"
    >
      <div className="md:w-[50%] cursor-pointer" data-aos="fade-left">
        <LightGallery plugins={[lgZoom]}>
          <img src={image} alt="Floor Plan" className="w-full md:h-[85vh]" />
        </LightGallery>
      </div>

      <div className="relative md:w-[50%]" data-aos="fade-right">
        {/* long slider */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt={index}
                className="w-full object-cover h-[85vh] cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* short slider */}
        <div className="border-white border-t-[5px] border-x-[5px] absolute bottom-0 z-10 right-10 left-10 bg-white">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={5}
            slidesPerView={3}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
            }}
            watchSlidesProgress={true}
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item}
                  alt={index}
                  className="w-full object-cover h-[20vh] cursor-pointer border-white"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
