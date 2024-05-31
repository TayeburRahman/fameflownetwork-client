import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  setStateAccount,
  setStateBrandDetails,
  setStateNewsStory,
  setStatePublishPackage,
  setStateTotalPrice,
  setStateWritingPackage,
} from '../../features/order/orderSlice';
import './index.css';

const OrderLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    writingPackage,
    detailedResearch,
    publishPackage,
    account,
    brand,
    newsStory,
  } = useSelector((state) => state?.order);

  const [totalprice, setTotalPrice] = useState<number>(0);
  const brandEmtry = Object?.values(brand)?.filter((value) => !value)?.length;
  const dispatch = useDispatch();

  React.useEffect(() => {
    try {
      const localOder = localStorage?.getItem('order');
      if (localOder) {
        const {
          writingPackage,
          detailedResearch,
          publishPackage,
          account,
          brand,
          newsStory,
        } = JSON.parse(localOder);
        if (
          writingPackage?.title ||
          publishPackage?.title ||
          account ||
          brand
        ) {
          dispatch(setStateAccount({ account: account }));
          dispatch(setStateBrandDetails({ brands: brand }));
          dispatch(setStateNewsStory({ news: newsStory }));
          dispatch(setStatePublishPackage({ publishPackage: publishPackage }));
          dispatch(
            setStateWritingPackage({
              writingPackage: writingPackage,
              detailedResearch: detailedResearch,
            }),
          );
        } else {
          // navigate('/packages/order');
        }
      }
    } catch (error) {
      console.error('Error retrieving user from local storage:', error);
    }
  }, []);

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
    setTotalPrice(total);
    dispatch(setStateTotalPrice({ total }));
  }, [publishPackage, detailedResearch, writingPackage]);

  const handleSaveToNext = () => {
    localStorage.setItem(
      'order',
      JSON.stringify({
        writingPackage: writingPackage,
        detailedResearch: detailedResearch,
        publishPackage: publishPackage,
        account: account,
        brand: brand,
        newsStory: newsStory,
      }),
    );
    navigate('/packages/review');
  };

  const updateUll = () => {
    'const';
  };

  return (
    <div className=" container mx-auto">
      <div className="grid grid-cols-12   mt-[10vh]">
        <div className="col-span-7 px-10">
          <div>
            <img src="" />
          </div>
          <div className="">
            <h4 className="text_h3">Get Featured in the News</h4>
            <p className="text_p">
              Just fill out the form below to get featured on top news outlets
              in just 7 days.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex text_p">
              <div className="me-3  ">
                <Link
                  className="nav_link "
                  to="/packages/order"
                  id={`${pathname === '/packages/order' && 'nav_link'}`}
                >
                  Order Form{' '}
                </Link>
              </div>
              <NavigateNextIcon />

              <div className="me-3 ms-3">
                {pathname !== '/packages/order' ? (
                  <Link
                    className="nav_link "
                    to="/packages/review"
                    id={`${pathname === '/packages/review' && 'nav_link'}`}
                  >
                    Review
                  </Link>
                ) : (
                  <p className="nav_link ">
                    {' '}
                    <Tooltip
                      title="Before you proceed, Please complete all the necessary part of the order form"
                      placement="top"
                    >
                      Review{' '}
                    </Tooltip>
                  </p>
                )}
              </div>
              <NavigateNextIcon />
              <div className="me-3 ms-3">
                {pathname === '/packages/payment' ? (
                  <Link
                    className="nav_link  "
                    to="/packages/payment"
                    id={`${pathname === '/packages/payment' && 'nav_link'}`}
                  >
                    Payment
                  </Link>
                ) : (
                  <p className="nav_link">
                    <Tooltip
                      title="Before you proceed, Please complete all the necessary part of the Payments form"
                      placement="top"
                    >
                      Payment{' '}
                    </Tooltip>
                  </p>
                )}
              </div>
            </div>
            <div></div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
        <div
          className="col-span-5 px-10 border_left"
          id="sticky"
          style={{ width: '100%' }}
        >
          <h4 className="text_h4">Order Details</h4>
          <div className="order_summery mt-4">
            <div className="">
              <p className="mt-1">Order Summary</p>
            </div>
            <div className="order_box_xs">
              <div className="box_svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
                {!writingPackage?.value
                  ? 'Upload Your Own Story'
                  : writingPackage?.value}
              </div>
              <p>
                {writingPackage?.price === 'Free' || !writingPackage?.price
                  ? ''
                  : '$'}
                {!writingPackage?.price ? 'Free' : writingPackage?.price}
              </p>
            </div>
            {publishPackage?.value && (
              <div className="order_box_xs">
                <div className="box_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                  {publishPackage?.value}
                </div>
                <p>${publishPackage?.price}</p>
              </div>
            )}

            {publishPackage?.included && (
              <div className="order_box_xs">
                <div className="box_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                  {publishPackage?.included}
                </div>
                <p>Included</p>
              </div>
            )}
            {publishPackage?.included_02 && (
              <div className="order_box_xs">
                <div className="box_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                  {publishPackage?.included_02}
                </div>
                <p>Included</p>
              </div>
            )}
            {detailedResearch?.name && (
              <div className="order_box_xs">
                <div className="box_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                  {detailedResearch?.name}
                </div>
                <p>${detailedResearch?.price}</p>
              </div>
            )}
            <div className="order_box_xs">
              <div className="box_svg">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>{' '}
                Detailed Report with Links
              </div>
              <p>Included</p>
            </div>

            {/* <div className="order_box_xs">
              <div> Publishing on 250+ Limited News Outlets</div>
              <p>$165.00</p>
            </div> */}
            <div className="text_price">
              <div> Total Price</div>
              <p>${totalprice}</p>
            </div>

            {pathname === '/packages/order' && (
              <div
                className=" mt-2"
                style={{
                  width: '100%',
                }}
              >
                <button
                  className="button-next mb-5"
                  role="button"
                  onClick={handleSaveToNext}
                  style={{
                    width: '100%',
                  }}
                  disabled={
                    writingPackage &&
                    publishPackage?.title &&
                    account &&
                    brandEmtry === 0
                      ? false
                      : true
                  }
                >
                  Review Order
                </button>
              </div>
            )}

            {pathname === '/packages/review' && (
              <div
                className=" mt-2"
                style={{
                  width: '100%',
                }}
              >
                <button
                  className="button-next mb-5"
                  role="button"
                  onClick={(e) => navigate('/packages/payment')}
                  style={{
                    width: '100%',
                  }}
                >
                  Continue to Payment Method
                </button>
              </div>
            )}

            {pathname === '/packages/payment' && (
              <div
                className=" mt-2"
                style={{
                  width: '100%',
                }}
              >
                <button
                  className="button-next mb-5"
                  role="button"
                  onClick={(e) => navigate('/packages/payments')}
                  style={{
                    width: '100%',
                  }}
                >
                  Continue to Payment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderLayout;
