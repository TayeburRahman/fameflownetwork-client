import { Box, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import News from '../../assets/Long-News-Story.png';
import Regular from '../../assets/Regular-News-Story.png';
import Short from '../../assets/Short-News-Story.png';
import WriteYourOwnStory from '../../assets/WriteYourOwnStory.png';
import { setStateNext } from '../../features/order/orderSlice';

const Review = () => {
  const { writingPackage, detailedResearch, publishPackage, account, brand } =
    useSelector((state) => state?.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !writingPackage?.title ||
      !writingPackage?.title ||
      !account ||
      !brand
    ) {
      navigate('/packages/order');
    }
  }, [writingPackage, publishPackage, account, brand]);

  const imageW =
    (writingPackage?.title === 'Write Your Own Story' && WriteYourOwnStory) ||
    (writingPackage?.title === 'Short News Story' && Short) ||
    (writingPackage?.title === 'Regular News Story' && Regular) ||
    (writingPackage?.title === 'Long News Story' && News);

  const handleOnEdit = (data: any) => {
    dispatch(setStateNext(data));
    navigate('/packages/order');
  };

  return (
    <div className="">
      <h2 className="mt-5"> Review Order</h2>
      <p className="text_p mt-5">Review the order details you provided.</p>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 2 }}>
          <Box className="review_box d-flex-c between">
            <Box className="d-flex-c">
              <img src={imageW} style={{ width: '15%', marginRight: '15px' }} />
              <Box>
                <Typography className="review_title">
                  {writingPackage?.title}
                </Typography>
                <Typography className="review_package">
                  Writing Package
                </Typography>
              </Box>
            </Box>
            <button
              onClick={(e) => handleOnEdit('account')}
              className="editButton"
            >
              Edit
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 2 }}>
          <Box className="review_box d-flex-c between">
            <Box className="d-flex-c">
              <img
                src={publishPackage?.image}
                style={{ width: '15%', marginRight: '15px' }}
              />
              <Box className="">
                <Typography className="review_title">
                  {publishPackage?.title}
                </Typography>
                <Typography className="review_package">
                  Publishing Package
                </Typography>
              </Box>
            </Box>
            <button
              onClick={(e) => handleOnEdit('publishing')}
              className="editButton"
            >
              Edit
            </button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Review;
