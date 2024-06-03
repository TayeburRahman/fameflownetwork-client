import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import News from '../../../../../assets/Long-News-Story.png';
import Regular from '../../../../../assets/Regular-News-Story.png';
import Short from '../../../../../assets/Short-News-Story.png';
import WriteYourOwnStory from '../../../../../assets/WriteYourOwnStory.png';
import DefaultLayout from '../../../../../layout/DefaultLayout';
import DeleteModal from './DeleteModal';
import UpdateSelector from './UpdateSelector';

const OrderDetails = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [value, setOnClickValue] = useState(false);
  const [status, setStatus] = useState(false);

  const [data, setOrders] = useState();

  const { id } = useParams();

  useEffect(() => {
    // getData();
    // if (typeUpdate) {
    //   window.location.reload();
    // }

    const getData = async () => {
      try {
        const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/payment/order/details/${id}`;
        const response = await axios.get(apiUrl);
        if (response.data.status === 'success') {
          setOrders(response?.data?.order);
        } else {
        }
      } catch (error: any) {
        console.error(
          'Submission error:',
          error.response?.data || error.message,
        );
      }
    };
    getData();
  }, [status]);

  //   const onSubmit: SubmitHandler<FormValues> = async (data) => {
  //     console.log('ddd', data);
  //     try {
  //       const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/package/add_new`;
  //       const apiUrl2 = `https://fameflownetwork-server.vercel.app/api/v1/package/update/${uValue?._id}`;
  //       const response = await axios.post(
  //         status === 'Update' ? apiUrl2 : apiUrl,
  //         {
  //           site: data,
  //         },
  //       );
  //       // console.log('response.data', response.data);
  //       if (response.data.status === 'success') {
  //         setReqStatus((ra: any) => !ra);
  //         displayToast({
  //           status: 'success',
  //           message: `Site ${status} Successfully!`,
  //         });
  //         onClose(); // Close modal on successful submission
  //       } else {
  //         displayToast({
  //           status: 'error',
  //           message: 'There is something wrong! Please try again.',
  //         });
  //       }
  //     } catch (error: any) {
  //       console.error('Submission error:', error.response?.data || error.message);
  //       displayToast({
  //         status: 'error',
  //         message:
  //           'An error occurred while processing your request. Please try again later.',
  //       });
  //     }
  //   };

  const imageW =
    (data?.writingPackage?.title === 'Write Your Own Story' &&
      WriteYourOwnStory) ||
    (data?.writingPackage?.title === 'Short News Story' && Short) ||
    (data?.writingPackage?.title === 'Regular News Story' && Regular) ||
    (data?.writingPackage?.title === 'Long News Story' && News);

  const handleOnClose = () => {
    setOpenDelete(false);
  };

  const handleOnDelete = (e: any) => {
    setOpenDelete(e.target.value);
  };

  const handleOnPayment = (e: any) => {
    setPayment(e.target.value);
    setApiStatus('payment');
  };

  const handleOnStatus = (e: any) => {
    setOrderStatus(e.target.value);
    setApiStatus('status');
  };

  return (
    <>
      {/* Modal dialog */}
      <DefaultLayout>
        <div className="bg-white p-6">
          <div className="bg-white">
            <Grid className="pb-5" spacing={2} container>
              <Grid item xs={12} md={6} sx={{ mt: 2, padding: '0' }}>
                <Box className="review_box d-flex-c between">
                  <Box className="d-flex-c">
                    <img
                      src={imageW}
                      style={{ width: '15%', marginRight: '15px' }}
                    />
                    <Box>
                      <Typography className="review_title">
                        {data?.writingPackage?.title}
                      </Typography>
                      <Typography className="review_package">
                        Writing Package
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                <Box className="review_box d-flex-c between">
                  <Box className="d-flex-c">
                    <img
                      src={data?.publishPackage?.image}
                      style={{ width: '15%', marginRight: '15px' }}
                    />
                    <Box className="">
                      <Typography className="review_title">
                        {data?.publishPackage?.title}
                      </Typography>
                      <Typography className="review_package">
                        Publishing Package
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid className="mt-5 mb-5 review_box " spacing={2} container>
              <Grid item className=" " xs={6} md={6}>
                <p>Price</p>
                <p>${data?.price}</p>
              </Grid>
              <Grid item className="" xs={6} md={4}>
                <p>Payment</p>

                <UpdateSelector
                  setStatus={setStatus}
                  id={id}
                  type="payment"
                  order={data}
                  colorB={data?.payment === 'Paid' ? 'Green' : '#dd8e17'}
                />
              </Grid>
            </Grid>

            <Grid className="review_box mb-5" spacing={2} container>
              <Grid item xs={12} md={6} className="">
                <p>User Email</p> <p> {data?.email}</p>
              </Grid>
              <Grid item xs={12} md={6} className="">
                <p> User Name</p>
                <p>{data?.name}</p>
              </Grid>
            </Grid>

            <Grid className="mt-5 mb-5 review_box" spacing={2} container>
              <Grid item className="" xs={12} md={6}>
                <p>Brand Name</p> <p>{data?.brand?.brand_name}</p>
              </Grid>
              <Grid item className="" xs={12} md={6}>
                <p>Brand Email</p>
                <p>{data?.brand?.representative_name}</p>
              </Grid>
              <Grid item className="" xs={12} md={6}>
                <p>Country Name</p>
                <p>{data?.brand?.brand_country?.label}</p>
              </Grid>
              <Grid item className="" xs={12} md={6}>
                <p>Representative Name</p>
                <Link to="">{data?.representative_name}</Link>
              </Grid>
              <Grid item className="" xs={12} md={6}>
                <p>Brand Link</p>{' '}
                <Link to=""> {data?.brand?.website_link}</Link>
              </Grid>
            </Grid>

            <Grid className="mt-5 review_box " spacing={2} container>
              <Grid item className="" xs={6} md={4}>
                <p>Order Date</p> <button>{data?.payment}</button>
              </Grid>
              <Grid item className=" " xs={6} md={4}>
                <p>Status</p>
                <UpdateSelector
                  setStatus={setStatus}
                  id={id}
                  type="status"
                  order={data}
                  colorB={
                    (data?.status === 'Pending' && '#dd8e17') ||
                    (data?.status === 'Compted' && 'blueviolet') ||
                    (data?.status === 'Processing' && 'Green')
                  }
                />
              </Grid>
              <Grid item className=" " xs={6} md={4}>
                <p>Delete</p>
                <button onClick={handleOnDelete}>Remove</button>
              </Grid>
            </Grid>
          </div>
          <DeleteModal
            onCloseDelete={handleOnClose}
            dValue={data}
            isDelete={openDelete}
          />
        </div>
      </DefaultLayout>
    </>
  );
};

export default OrderDetails;
