import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Tab from '@mui/material/Tab';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStateAccount } from '../../../features/order/orderSlice';
import useToast from '../../../hooks/useToast';

type PropsO = {
  setNextSteps: any;
  accountLoc: any;
};

const Account = ({ setNextSteps, accountLoc }: PropsO) => {
  const [value, setValue] = React.useState('1');
  const [isName, setName] = React.useState('');
  const [isEmail, setEmail] = React.useState('');

  const [isLoginEmail, setLoginEmail] = React.useState('');
  const [isLoginPassword, setLoginPassword] = React.useState('');

  const [isLoginError, setLoginError] = React.useState('');

  const [exPassword, setExPassword] = React.useState('');
  const [existUser, setExistUser] = React.useState({
    email: '',
    _id: '',
  });
  const [status, setAccountStatus] = React.useState('');

  const [checked, setChecked] = React.useState(false);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dispatch = useDispatch();

  const { displayToast } = useToast();

  useEffect(() => {
    if (accountLoc) {
      setName(accountLoc?.name);
      setEmail(accountLoc?.email);
      setChecked(accountLoc?.email_confirmation);
      setExPassword(accountLoc?.password);
    }
  }, [accountLoc]);

  useEffect(() => {
    if (emailPattern.test(isEmail)) {
      const checkEmail = async () => {
        const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/user/check/${isEmail}`;
        const response = await axios.get(apiUrl);

        const { user, status } = response.data;
        if (user?.email) {
          setExistUser(user);
        }
        if (status === 'not found') {
          setExistUser({ email: '', _id: '' });
        }
      };
      checkEmail();
    }
  }, [isEmail]);

  useEffect(() => {
    if (
      !existUser.email &&
      emailPattern.test(isEmail) &&
      isName &&
      exPassword?.length > 8
    ) {
      setAccountStatus('express');
      let accounts = {
        email: '',
        name: '',
        email_confirmation: false,
        password: '',
        status: 'express',
      };
      accounts.email = isEmail;
      accounts.name = isName;
      accounts.password = exPassword;
      accounts.email_confirmation = checked;
      dispatch(setStateAccount({ account: accounts }));
    } else {
      setAccountStatus('');
      dispatch(setStateAccount({ account: '' }));
    }
  }, [isName, isEmail, exPassword]);

  useEffect(() => {
    if (isLoginPassword && emailPattern.test(isLoginEmail)) {
      setAccountStatus('login');
    } else {
      setAccountStatus('');
      dispatch(setStateAccount({ account: '' }));
    }
  }, [isLoginEmail, isLoginPassword]);

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleOnAccount = async () => {
    if (status === 'express') {
      setNextSteps('account');
      let accounts = {
        email: '',
        name: '',
        email_confirmation: false,
        password: '',
        status: 'express',
      };
      accounts.email = isEmail;
      accounts.name = isName;
      accounts.password = exPassword;
      accounts.email_confirmation = checked;

      dispatch(setStateAccount({ account: accounts }));
    }

    if (status === 'login') {
      const forData = {
        email: isLoginEmail,
        password: isLoginPassword,
      };
      try {
        // setLoading(true);
        const apiUrl =
          'https://fameflownetwork-server.vercel.app/api/v1/user/login';
        const response = await axios.post(apiUrl, forData);
        const { token, user } = response.data;

        if (user?.email) {
          // setLoading(false);
          dispatch(
            setStateAccount({
              account: { email: user.email, name: user.name, status: 'login' },
            }),
          );
          setNextSteps('account');
          setLoginError('');
          displayToast({
            status: 'success',
            message: 'User Login Successfully!',
          });

          localStorage.setItem(
            'auth',
            JSON.stringify({
              token: token,
              user: user,
              id: user._id,
            }),
          );
        }
        // reset();
      } catch (error: any) {
        if (error.response.data.status === 'error') {
          setLoginError(error.response.data.message);
        }
      }
    }
  };
  return (
    <div className="">
      <p className="text_p">
        Let us know how to contact you with the order details and invoice to get
        started.
      </p>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="IExpress Check" value="1" />
              <Tab label="Login" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={isName}
                    placeholder="Enter your Full Name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-stroke bg-transparent py-0 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
                    value={isEmail}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="absolute right-4 top-3">
                    <svg
                      className="fill-current"
                      width="22"
                      height="17"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <p className="text-red">
                  {existUser?.email && 'This email already exist'}
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Password, 8+ Characters"
                    className="w-full rounded-lg border border-stroke bg-transparent   pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
                    onChange={(e) => setExPassword(e.target.value)}
                    value={exPassword}
                  />

                  <span className="absolute right-4 top-3">
                    <svg
                      className="fill-current"
                      width="22"
                      height="17"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                          fill=""
                        />
                        <path
                          d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </Grid>
            </Grid>
            <Box className="">
              <Typography variant="body2" className="text-less-w d-flex-c">
                <ErrorOutlineIcon className="mui_icon me-1" /> No account? We'll
                create one and email details after ordering.
              </Typography>
              <Box className="d-flex-c">
                <Checkbox
                  className={`${checked ? 'checkedbox' : 'checkbox'} Email_me_cb`}
                  checked={checked}
                  onChange={handleCheckBox}
                  inputProps={{ 'aria-label': 'controlled' }}
                />

                <Typography variant="body2" className="text_p Email_me">
                  Email me order confirmations and updates.
                </Typography>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <span className="absolute right-4 top-3">
                    <svg
                      className="fill-current"
                      width="22"
                      height="17"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="8+ Characters, 1 Capital letter, 1 Number character"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-10"
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />

                  <span className="absolute right-4 top-3">
                    <svg
                      className="fill-current"
                      width="22"
                      height="17"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                          fill=""
                        />
                        <path
                          d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </Grid>
            </Grid>
            <p className="text-red mt-2">{isLoginError && isLoginError}</p>
          </TabPanel>
          <button
            onClick={handleOnAccount}
            className="button-next ms-5"
            role="button"
            disabled={existUser.email ? true : status ? false : true}
          >
            Next Step <ArrowForwardIcon />
          </button>
        </TabContext>
      </Box>
    </div>
  );
};

export default Account;
