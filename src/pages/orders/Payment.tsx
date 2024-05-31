import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LaunchIcon from '@mui/icons-material/Launch';
import { Box, Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import stripeImg from '../../assets/stripe.png';
import { setStateTotalPrice } from '../../features/order/orderSlice';
import useToast from '../../hooks/useToast';

const Payment = () => {
  const [value, setValue] = useState(false);
  const [isCouponState, setCouponState] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [priceOriginal, setOriginalPrice] = useState<number>();
  const couponCode = 'specialdiscount10';
  const discountPercentage = 10;
  const navigate = useNavigate();

  const {
    writingPackage,
    detailedResearch,
    publishPackage,
    account,
    brand,
    price,
  } = useSelector((state) => state.order);
  const [discount, setDiscount] = useState({
    disc: false,
    match: false,
  });
  const dispatch = useDispatch();

  const { displayToast } = useToast();

  useEffect(() => {
    let total = 0;
    let writing = 0;
    let research = 0;
    let publish = 0;
    if (publishPackage?.price) {
      publish = Number(publishPackage?.price);
    }
    if (detailedResearch?.price) {
      research = Number(detailedResearch?.price);
    }
    if (writingPackage?.price && writingPackage?.price !== 'Free') {
      writing = Number(writingPackage?.price);
    }

    total = Number(writing) + Number(research) + Number(publish);
    // setTotalPrice(total);
    setOriginalPrice(total);
  }, [publishPackage, detailedResearch, writingPackage]);

  useEffect(() => {
    if (
      !writingPackage?.title ||
      !publishPackage?.title ||
      !account ||
      !brand
    ) {
      navigate('/packages/order');
    }
  }, []);

  const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleOnPayment = async () => {
    if (!checked) {
      setValue(true);
      return;
    }

    const formData = {
      writingPackage,
      detailedResearch,
      publishPackage,
      account,
      brand,
      price,
    };

    try {
      const response = await axios.post(
        'https://fameflownetwork-server.vercel.app/api/v1/payment/oder',
        { formData },
      );

      console.log('response', response);
      if (response.statusText !== 'OK') {
        displayToast({
          status: 'error',
          message: 'Something wrong. Please try again',
        });
        return;
      }

      if (response?.data?.session.url) {
        window.location.href = response.data.session.url;
        localStorage.removeItem('order');
      }
    } catch (error) {
      displayToast({
        status: 'error',
        message: 'Server Error!',
      });
    }
  };

  const handleCouponApply = () => {
    if (coupon === couponCode) {
      if (!discount.disc) {
        const discountAmount =
          price - (Number(price) * Number(discountPercentage)) / 100;
        dispatch(setStateTotalPrice({ total: Math.floor(discountAmount) }));
        setDiscount((data) => ({
          ...data,
          disc: true,
          match: false,
        }));
      }
      return;
    } else {
      dispatch(setStateTotalPrice({ total: priceOriginal }));
      setDiscount((data) => ({
        ...data,
        disc: false,
        match: true,
      }));
    }
    // setDiscount()
  };

  return (
    <div className="">
      <h2 className="mt-5 review_order_">Payment Method</h2>
      <p className="text_p mt-5">
        Choose from the secure payment methods below.
      </p>
      <Grid>
        <Box className="d-flex-c">
          <button
            onClick={(e) => setCouponState((e) => !e)}
            className="d-flex-c upgrades"
            id="payments_coupon"
          >
            <span className="span_plus">{isCouponState ? '-' : '+'}</span>
            {isCouponState ? 'Hide' : 'Add'} Coupon
          </button>
          <button
            // onClick={(e) => setCouponState((e) => !e)}
            className="d-flex-c upgrades"
            id="payments_coupon"
          >
            <LaunchIcon /> View Invoice
          </button>
        </Box>
        {isCouponState && (
          <div className="mt-5 ">
            <div className="flex">
              <div className="relative w-full">
                <input
                  type="text"
                  id="search-dropdown"
                  className="block p-3 w-full z-20 text-sm text-gray-900 outline-none bg-gray-50 rounded-e-lg rounded-s-blue-100 rounded  border border-blue-500 "
                  placeholder="Enter your coupon code here"
                  onChange={(e) => setCoupon(e.target.value)}
                  coupon={coupon}
                />
                <button
                  onClick={handleCouponApply}
                  type="submit"
                  className="absolute top-0 end-0 p-3 h-full text-sm font-medium text-blue-600 rounded-e-lg border border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
            {discount.match && (
              <p className="text-less-w text-red">
                {' '}
                Failed to match the coupon!
              </p>
            )}
            {discount.disc && (
              <p className="text-less-w text-green-500">
                Coupon get successfully, (discount 10%)
              </p>
            )}
          </div>
        )}
      </Grid>
      <Grid className="mt-5">
        <button id="active-re" className="d-flex-c w-full writing_box pt-4">
          <img
            src={stripeImg}
            style={{
              width: '100px',
            }}
          />

          <Box className="w-full"></Box>
        </button>

        <Box className="d-flex-t mt-4">
          <Checkbox
            className={`${checked ? 'checkedbox' : 'checkbox'} Email_me_cb`}
            checked={checked}
            onChange={handleChangeChecked}
            inputProps={{ 'aria-label': 'controlled' }}
          />

          <Typography variant="body2" className="text_p_s">
            I accept the Terms, Privacy Policy, and Refund Policy and understand
            that any results such as website visitors, sales, Google rankings,
            and verification are not guaranteed.
          </Typography>
        </Box>
        {value && !checked && (
          <Typography variant="body2" className="text-less-w d-flex-c text-red">
            <ErrorOutlineIcon className="mui_icon me-1" /> Please confirm that
            you understand the terms, privacy policy, and refund policy.
          </Typography>
        )}

        <div className="mb-5 mt-2">
          <button
            className="button-next mt-5 mb-5"
            role="button"
            onClick={handleOnPayment}
          >
            Continue to Payment <ArrowForwardIcon />
          </button>
        </div>
      </Grid>
    </div>
  );
};

export default Payment;
