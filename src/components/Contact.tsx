import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import ThankYou from "../pages/thankYou/ThankYou";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [checkBox, setCheckBox] = useState({
    moreDetails: false,
    toViewProperty: false
  });

  let name, value, checked;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleCheckBox = (e) => {
    name = e.target.name;
    checked = e.target.checked;

    setCheckBox({
      ...checkBox,
      [name]: checked,
    });
  };

  const navigateTo = useNavigate();
  // ======navigate and connect firebase======
  const fireBaseURL =
    "https://plotlandsell-default-rtdb.asia-southeast1.firebasedatabase.app/userDataRecords.json";

  const handleSubmit = async (event) => {
    const { firstName, lastName, email, phone, message } = userData;

    const { moreDetails, toViewProperty } = checkBox;

    event.preventDefault();
    navigateTo("/submit");
    const res = fetch(fireBaseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        message,
        moreDetails,
        toViewProperty,
      }),
    });
    if (res) {
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
    if (res) {
      setCheckBox({
        moreDetails: "",
        toViewProperty: "",
      });
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 padding" id="contact">
      <div className="w-[90%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* contact form */}
        <div
          className="order-1 md:order-none boxShadow p-10 rounded-xl md:col-span-3 bg-black"
          data-aos="fade-right"
        >
          {/* titles */}
          <div className="space-y-5 mb-5">
            <h2 className="text-4xl font-bold">
            Contact Lee Clarke Estate Agent, Coventry
            </h2>
            <div className="flex gap-5">
              <p>Email about:</p>
              <p>Hawkes Mill Lane, Coventry, Warks, CV5</p>
            </div>
          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit}
            action="https://send.pageclip.co/pU7J1IRulMv0rVTGX9FzcqaCLGoABD2M"
            method="POST"
            className="pageclip-form lg:order-1"
          >
            <div className="flex gap-5 items-center mb-5">
              <label className="block text-white-700 font-semibold">
                I would like:
              </label>
              <label className="flex gap-5">
                <label
                  className="flex items-center"
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="checkbox"
                    name="moreDetails"
                    className="mr-2"
                    defaultChecked={checkBox.moreDetails === 1 ? true : false}
                    onChange={handleCheckBox}
                    // checked={userData.moreDetails}
                  />
                  <p>More details</p>
                </label>
                <label
                  className="flex items-center"
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="checkbox"
                    name="toViewProperty"
                    className="mr-2"
                    defaultChecked={
                      checkBox.toViewProperty === 1 ? true : false
                    }
                    onChange={handleCheckBox}
                  />
                  <p>To view land</p>
                </label>
              </label>
            </div>

            <div className="flex gap-5 justify-between flex-col md:flex-row mb-5">
              <div className="flex-1">
                <label className="block text-white-700 font-semibold mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="border bg-gray-100 border-gray-300 rounded-md p-2 w-full"
                  placeholder="John"
                  required
                  value={userData.firstName}
                  onChange={postUserData}
                />
              </div>

              <div className="flex-1">
                <label className="block text-white-700 font-semibold mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="border bg-gray-100 border-gray-300 rounded-md p-2 w-full"
                  placeholder="Doe"
                  required
                  value={userData.lastName}
                  onChange={postUserData}
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-white-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                className="border bg-gray-100 border-gray-300 rounded-md p-2 w-full"
                placeholder="johndoe@example.com"
                required
                value={userData.email}
                onChange={postUserData}
              />
            </div>

            <div className="mb-5">
              <label className="block text-white-700 font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="number"
                name="phone"
                className="border bg-gray-100 border-gray-300 rounded-md p-2 w-full"
                placeholder="123-456-7890"
                required
                value={userData.phone}
                onChange={postUserData}
              />
            </div>

            <div className="mb-5">
              <label className="block  text-white-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="border bg-gray-100 border-gray-300 rounded-md p-2 w-full"
                placeholder="Write your message here..."
                value={userData.message}
                onChange={postUserData}
              ></textarea>
            </div>

            <button
              type="submit"
              className="pageclip-form__submit bg-purple-700 py-2 px-5 w-full rounded-xl text-white"
            >
              Send
            </button>
          </form>
        </div>

        {/* pricing and short details */}
        <div className="md:col-span-2 " data-aos="fade-left">
          <div className="boxShadow bg-black rounded-xl">
            <img
              src="https://i.ibb.co/xjsPLfG/hero-img.jpg"
              alt="Property Image"
              className="h-[200px] lg:h-[250px] w-full object-cover rounded-t-xl"
            />
            <div className="text-purple-700 space-y-2 py-5 bg-purple-100 px-5">
              <p className="font-bold text-lg">£295,000</p>
              <p>Offers in Region of</p>
            </div>

            <div className="space-y-2 py-5 px-5">
              <p className="font-bold text-lg">5 bedroom | 4 Bathroom</p>
              <p>Hawkes Mill Lane, Coventry, Warks, CV5</p>
            </div>

            <hr className="w-[50%] mx-auto border-[1px] border-gray-500" />

            <div className="space-y-2 py-5 px-5">
              <p className="font-bold text-lg">Lee Clarke Estate Agent</p>
              {/* <p>111 New Union Street, Coventry, CV1 2NT</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
