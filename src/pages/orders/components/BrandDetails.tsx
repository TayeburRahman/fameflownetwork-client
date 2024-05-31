import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { setStateBrandDetails } from '../../../features/order/orderSlice';

type PropsO = {
  openBrand: number;
  setNextSteps: any;
  brandLoc: any;
};

const BrandDetails = ({ openBrand, setNextSteps, brandLoc }: PropsO) => {
  const { pathname } = useLocation();
  const [value, setValue] = useState();
  const options = useMemo(() => countryList().getData(), []);
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    brand_name: '',
    brand_country: {},
    website_link: '',
    representative_name: '',
    representative_email: '',
    agree: false,
  });

  React.useEffect(() => {
    if (brandLoc) {
      setFormData({
        brand_name: brandLoc?.brand_name,
        brand_country: brandLoc?.brand_country,
        website_link: brandLoc?.website_link,
        representative_name: brandLoc?.representative_name,
        representative_email: brandLoc?.representative_email,
        agree: brandLoc?.agree,
      });
      setChecked(brandLoc?.agree ? true : false);
      setValue(brandLoc?.brand_country);
    }
  }, [brandLoc]);

  React.useEffect(() => {
    dispatch(setStateBrandDetails({ brands: formData }));
  }, [formData, brandLoc]);

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
      brand_country: value,
    }));
  };

  const brandEmtry = Object?.values(formData)?.filter(
    (value) => !value,
  )?.length;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validEmail = emailPattern.test(formData?.representative_email);

  return (
    <div className="">
      <p className="text_p">
        News sites require the following brand info to be displayed at the end
        of each publication. The email will be private behind a contact form.
      </p>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 2 }}>
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
          {openBrand > 1 && !formData.brand_name && (
            <Typography
              variant="body2"
              className="text-less-w d-flex-c text-red"
            >
              <ErrorOutlineIcon className="mui_icon me-1" /> Please provide your
              brand name
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 2 }}>
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
          {openBrand > 1 && !formData.website_link && (
            <Typography
              variant="body2"
              className="text-less-w d-flex-c text-red"
            >
              <ErrorOutlineIcon className="mui_icon me-1" /> Please provide
              brands website links
            </Typography>
          )}
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
        {openBrand > 1 && !formData.brand_country && (
          <Typography variant="body2" className="text-less-w d-flex-c text-red">
            <ErrorOutlineIcon className="mui_icon me-1" /> Please select your
            country
          </Typography>
        )}
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 2 }}>
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
          {openBrand > 1 && !formData.representative_name && (
            <Typography
              variant="body2"
              className="text-less-w d-flex-c text-red"
            >
              <ErrorOutlineIcon className="mui_icon me-1" /> Please provide the
              brand representative's name or title
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 2 }}>
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
          {openBrand > 1 && !validEmail && (
            <Typography
              variant="body2"
              className="text-less-w d-flex-c text-red"
            >
              <ErrorOutlineIcon className="mui_icon me-1" /> Please provide the
              brand representative's email
            </Typography>
          )}
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
      {openBrand > 1 && !formData.agree && (
        <Typography variant="body2" className="text-less-w d-flex-c text-red">
          <ErrorOutlineIcon className="mui_icon me-1" /> Please confirm that you
          understand that the details will be made public
        </Typography>
      )}

      <button
        className="button-next mt-5"
        role="button"
        onClick={(e) => setNextSteps('brand')}
        disabled={brandEmtry === 0 && validEmail ? false : true}
      >
        Next Step <ArrowForwardIcon />
      </button>
    </div>
  );
};

export default BrandDetails;
