import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageLoader from '../../components/ImageLoader';
import TextLoader from '../../components/TextLoader';

interface props {
  name: any;
}

type Inputs = {
  sub_title: string;
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  image: string;
  package: string;
  _id: any;
};

const Banner: React.FC<props> = ({ name }) => {
  const [openLink, setOpenLink] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isTexts, setTexts] = useState<Inputs>();

  console.log('name', name);

  useEffect(() => {
    const textDataApi = async () => {
      try {
        const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/package/get/text/${name === 'sample' ? 'Sample Reports' : name}`;

        const response = await axios.get(apiUrl);
        const { texts, status } = response.data;

        if (status === 'success') {
          setTexts(texts);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error: any) {
        console.log('error', error.response);
        setLoading(false);
      }
    };
    textDataApi();
  }, []);
  const handleOnClick = () => {
    setOpenLink((e) => !e);
  };
  return (
    <div className="section-padding grid grid-cols-2 gap-4 place-items-center max-md:mt-14 max-md:pt-2 max-md:block max-md:space-y-10">
      <div className="h-full w-full mt-5">
        {isTexts ? (
          <>
            <h5 className="md-text">{isTexts?.sub_title}</h5>
            <h2 className="text-large">{isTexts?.title}</h2>
            <p className="text-small">{isTexts?.p1}</p>

            {openLink && (
              <>
                <p className="text-small">{isTexts?.p2}</p>
                <p className="text-small">{isTexts?.p3}</p>
                <p className="text-small">{isTexts?.p4}</p>
              </>
            )}
            <button className="text-blue-600" onClick={handleOnClick}>
              Read more..
            </button>
          </>
        ) : (
          <TextLoader />
        )}
      </div>
      <div className="h-full w-full">
        {isTexts ? <img src={isTexts && isTexts.image} /> : <ImageLoader />}
      </div>
    </div>
  );
};

export default Banner;
