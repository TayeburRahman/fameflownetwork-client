import { Grid } from '@mui/material';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewsStory = () => {
  const [formData, setFormData] = useState({
    docs_link: '',
    details: '',
  });

  const [value, setValue] = useState('');
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
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                docs_link: e.target.value,
              }))
            }
            value={formData?.docs_link}
          />
        </div>
        <div className="mt-4">
          <label className="label_text">DESCRIPTION</label>
          <ReactQuill
            theme="snow"
            className="mt-2 react_quill"
            value={value}
            onChange={setValue}
          />
        </div>
      </Grid>
    </div>
  );
};

export default NewsStory;
