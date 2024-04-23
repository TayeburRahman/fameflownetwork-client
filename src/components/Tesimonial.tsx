import testimonials from "../../public/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Tesimonial = () => {
  return (
    <section className="bg-gray-100 section-padding" id="testimonials" >
      <div className="wrapper overflow-hidden">
        {/* section title */}
        <div className="space-y-5 text-center mb-10">
          <h2 className="text-4xl font-bold">Our Client Reviews</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
            illum.
          </p>
        </div>

        {/* Testimonials */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="p-5 rounded-lg shadow-md bg-white/70 my-2 flex items-center justify-center flex-col space-y-4"
            >
              <img
                src={item?.image_url}
                alt={item?.name}
                className="rounded-full h-[100px] w-[100px] object-cover"
              />
              <div className="flex justify-center flex-col items-center">
                <h3 className="text-xl font-semibold">{item?.name}</h3>
                <p className="text-gray-600">{item?.position}</p>
              </div>
              <p className="line-clamp-5 text-center">{item?.testimonial}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tesimonial;
