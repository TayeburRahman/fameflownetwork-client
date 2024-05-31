import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStateNewsStory } from '../../../features/order/orderSlice';

type PropsSet = {
  news_story: any;
};

const NewsStory = ({ news_story }: PropsSet) => {
  const { writingPackage, detailedResearch, publishPackage, account, brand } =
    useSelector((state) => state?.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    docs_link: '',
    details: '',
  });

  const [value, setValue] = useState('');

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      details: value,
    }));
  }, [value]);
  console.log('news_story', value);

  useEffect(() => {
    if (news_story) {
      setFormData(news_story);
      setValue(news_story?.details);
    }
  }, [news_story]);

  useEffect(() => {
    dispatch(setStateNewsStory({ news: formData }));
  }, [formData]);

  const brandEmtry = Object?.values(brand)?.filter((value) => !value)?.length;

  const handleSaveToNext = () => {
    localStorage.setItem(
      'order',
      JSON.stringify({
        writingPackage: writingPackage,
        detailedResearch: detailedResearch,
        publishPackage: publishPackage,
        account: account,
        brand: brand,
        newsStory: formData,
      }),
    );
    navigate('/packages/review');
  };

  return (
    <div className="">
      <p className="text_p">
        Share your story idea and details so our writers can get started. You'll
        get the news story for review and publishing approval within a few days.
        Rest assured, our stories are crafted by human writers.
      </p>
      <Grid className="mt-5">
        <label className="label_text">Docs Link/ Drive Link/ PDF Link</label>
        <div className="relative mt-2">
          <input
            type="text"
            placeholder="http://"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
            value={formData?.docs_link}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                docs_link: e.target.value,
              }))
            }
          />
        </div>
        <div className="mt-4 pb-5 mb-5">
          <label className="label_text">DESCRIPTION</label>
          <ReactQuill
            theme="snow"
            className="mt-2 react_quill"
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
      </Grid>

      <button
        className="button-next mt-5"
        role="button"
        onClick={handleSaveToNext}
        disabled={
          writingPackage && publishPackage?.title && account && brandEmtry === 0
            ? false
            : true
        }
      >
        Review Order <ArrowForwardIcon />
      </button>
    </div>
  );
};

export default NewsStory;
