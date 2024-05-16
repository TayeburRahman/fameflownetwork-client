import { Box, Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

const BrandDetails = () => {
  const { pathname } = useLocation();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
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
              placeholder="Enter your Full Name"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
              //   {...register('email', {
              //     required: true,
              //   })}
            />
          </div>
        </Grid>
        <Grid className="mt-4">
          <label className="label_text">BRAND COUNTRY </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
              //   {...register('email', {
              //     required: true,
              //   })}
            />
          </div>
        </Grid>
      </Grid>

      <Grid className="mt-4">
        <label className="label_text">WEBSITE & LINKS </label>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
            //   {...register('email', {
            //     required: true,
            //   })}
          />
        </div>
      </Grid>

      <Grid container gap={2}>
        <Grid className="mt-4">
          <label className="label_text">REPRESENATIVE NAME </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
              //   {...register('email', {
              //     required: true,
              //   })}
            />
          </div>
        </Grid>
        <Grid className="mt-4">
          <label className="label_text">REPRESENATIVE EMAIL</label>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
              //   {...register('email', {
              //     required: true,
              //   })}
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
    </div>
  );
};

export default BrandDetails;
