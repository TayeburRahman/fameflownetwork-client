import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import Aos from "aos";
import images from "../../public/images.json";
import "aos/dist/aos.css";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const handlePreviousImage = () => {
    setSelectedImage((prevIndex) => {
      if (prevIndex > 0) return prevIndex - 1;
      return images.length - 1;
    });
  };

  const handleNextImage = () => {
    setSelectedImage((prevIndex) => {
      if (prevIndex < images.length - 1) return prevIndex + 1;
      return 0;
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="gallery" className="bg-gray-100 padding">
      {/* title */}
      <h3
        className="text-4xl font-bold text-center mb-10 text-black"
        data-aos="fade-right"
      >
        For Sale: Dream Home Plot, Hawkes Mill Lane, Coventry
      </h3>

      {/* images */}
      <div
        className="w-[90%] lg:w-[70%] h-[50%]  mx-auto grid grid-cols-2 gap-10 align-center justify-center cursor-pointer my-0"
        data-aos="fade-up"
      >
        {images.slice(0, 6).map((item, index) => (
          <div
            key={index}
            style={{ background: `url(${item}) center no-repeat`, height: '15rem', backgroundSize: 'cover' }}
            onClick={() => handleImageClick(index)}
            className="rounded object-cover hover:scale-110 duration-700 h-[50%] w-[100%]"
          />
        ))}
        <p
          onClick={() => handleImageClick(6)}
          className="bg-purple-700 px-2 py-1 rounded text-white absolute bottom-0 right-0 mb-[-7%]"
        >
          See More
        </p>
      </div>

      {/* zoom image */}
      {selectedImage !== null && (
        <div
          onClick={closeImage}
          className="fixed top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center z-10 backdrop-brightness-50 backdrop-blur-sm"
        >
          <div
            className="h-[80%] md:w-[70%] rounded relative"
            onClick={(e) => e.stopPropagation()}
          >
            <AiOutlineClose
              className="absolute top-0 right-0 bg-purple-700 text-white text-4xl font-bold cursor-pointer rounded p-2 z-10"
              onClick={closeImage}
            />
            <div className="flex justify-between items-center h-full w-full gap-5 relative">
              <BsFillArrowLeftCircleFill
                className="text-purple-700 bg-white rounded-full text-3xl cursor-pointer absolute left-0 top-1/2"
                onClick={handlePreviousImage}
              />
              <img
                src={images[selectedImage]}
                alt={`Image ${selectedImage + 1}`}
                className="h-full w-full object-cover border-white rounded border-2"
              />
              <BsFillArrowRightCircleFill
                className="text-purple-700 bg-white rounded-full text-3xl cursor-pointer absolute right-0 top-1/2"
                onClick={handleNextImage}
              />
              <p className="bg-white flex items-center gap-2 rounded absolute bottom-0 right-0 px-2 py-1 font-semibold text-base">
                <AiOutlineCamera /> {selectedImage + 1}/{images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
