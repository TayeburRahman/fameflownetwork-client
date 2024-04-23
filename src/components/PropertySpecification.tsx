import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaRegCheckCircle } from "react-icons/fa";
import propertyDetails from "../../public/propertyDetails.json";
import Aos from "aos";
import "react-tabs/style/react-tabs.css";
import "aos/dist/aos.css";

const PropertySpecification = () => {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="section-padding">
      {/* section title */}
      <div className="space-y-5 text-center mb-10">
        <h2 className="text-4xl font-bold">Property Specification</h2>
        <p>
          Stunning 5-bedroom, 4-bathroom, 2-Livingroom new build property with a modern spacious living room, and four toilets, 2 living room. Enjoy a your dream now.
        </p>
      </div>

      {/* tabs */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        {/* tab title */}
        <TabList
          className="flex justify-evenly lg:justify-between flex-wrap gap-5 border-b-2 pb-3 border-gray-300"
          data-aos="fade-left"
        >
          {propertyDetails.map((item, index) => (
            <Tab
              key={index}
              className="border-none outline-none cursor-pointer flex-1"
            >
              <div className="flex flex-col justify-center items-center space-y-3">
                <img
                  src={item?.icon_url}
                  alt={item?.name}
                  className="w-[40px]"
                />
                <p className="text-base font-bold text-center truncate">
                  {item.name}
                </p>
              </div>
            </Tab>
          ))}
        </TabList>

        {/* tab details */}
        {propertyDetails.map((item, index) => (
          <TabPanel className="mt-10" key={index}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex-1 space-y-3" data-aos="fade-down">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="text-justify">{item.description}</p>
                <ul>
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaRegCheckCircle className="bg-purple-700 rounded-full text-white" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1" data-aos="fade-up">
                <img
                  src={item?.image_url}
                  alt={item?.name}
                  className="h-[300px] w-full object-cover rounded-lg rounded-bl-3xl"
                />
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
};

export default PropertySpecification;
