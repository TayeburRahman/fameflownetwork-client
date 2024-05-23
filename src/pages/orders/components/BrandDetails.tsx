import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { setStateBrandDetails } from '../../../features/order/orderSlice';

const BrandDetails = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);
  const [checked, setChecked] = React.useState(true);
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    brand_name: '',
    brand_country: '',
    website_link: '',
    representative_name: '',
    representative_email: '',
    agree: false,
  });

  React.useEffect(() => {
    dispatch(setStateBrandDetails({ brands: formData }));
  }, [formData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setFormData((prevState) => ({
      ...prevState,
      agree: event.target.checked,
    }));
  };

  const changeHandler = (value: any) => {
    setValue(value);

    setFormData((prevState) => ({
      ...prevState,
      brand_country: value?.label,
    }));
  };

  return (
    <div className="">
      <p className="text_p">
        News sites require the following brand info to be displayed at the end
        of each publication. The email will be private behind a contact form.
      </p>
      <Grid container gap={2}>
        <Grid className="mt-4">
          <label className="label_text">BRAND NAME</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Fitharmony"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  brand_name: e.target.value,
                }))
              }
              value={formData?.brand_name}
            />
          </div>
        </Grid>
        <Grid className="mt-4">
          <label className="label_text">WEBSITE & LINKS </label>
          <div className="relative">
            <input
              type="email"
              placeholder="https://fitharmony.co"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  website_link: e.target.value,
                }))
              }
              value={formData?.website_link}
            />
          </div>
        </Grid>
      </Grid>

      <Grid className="mt-4">
        <label className="label_text">BRAND COUNTRY </label>
        <Select
          className="w-full text-black  h-10"
          options={options}
          value={value}
          placeholder="Select country"
          onChange={changeHandler}
        />
      </Grid>

      <Grid container gap={2}>
        <Grid className="mt-4">
          <label className="label_text">REPRESENTATIVE NAME </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Atik Rahman"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  representative_name: e.target.value,
                }))
              }
              value={formData?.representative_name}
            />
          </div>
        </Grid>
        <Grid className="mt-4">
          <label className="label_text">REPRESENTATIVE EMAIL</label>
          <div className="relative">
            <input
              type="email"
              placeholder="atikrahman@gmail.com"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  representative_email: e.target.value,
                }))
              }
              value={formData?.representative_email}
            />
          </div>
        </Grid>
      </Grid>
      <Box className="d-flex-t mt-4">
        <Checkbox
          className={`${checked ? 'checkedbox' : 'checkbox'} Email_me_cb`}
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Typography variant="body2" className="text_p_s">
          I agree for my Brand Details to be shown publicly at the end of my
          news story, with the representative email private behind a contact
          form.
        </Typography>
      </Box>

      <button className="button-next mt-5" role="button">
        Next Step <ArrowForwardIcon />
      </button>
    </div>
  );
};

export default BrandDetails;
