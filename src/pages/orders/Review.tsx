import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import News from '../../assets/Long-News-Story.png';
import Regular from '../../assets/Regular-News-Story.png';
import Short from '../../assets/Short-News-Story.png';
import WriteYourOwnStory from '../../assets/WriteYourOwnStory.png';
import { setStateNext } from '../../features/order/orderSlice';

const Review = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [writingPackage, setWriting] = useState();
  const [detailedResearch, setResearch] = useState();
  const [publishPackage, setPublish] = useState();
  const [account, setAccount] = useState();
  const [brand, setBrand] = useState();
  const [news_story, setNewsStory] = useState();

  useEffect(() => {
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
          setWriting(writingPackage);
          setResearch(detailedResearch);
          setPublish(publishPackage);
          setAccount(account);
          setBrand(brand);
          setNewsStory(newsStory);
        } else {
          navigate('/packages/order');
        }
      }
    } catch (error) {
      console.error('Error retrieving user from local storage:', error);
    }
  }, []);

  const imageW =
    (writingPackage?.title === 'Write Your Own Story' && WriteYourOwnStory) ||
    (writingPackage?.title === 'Short News Story' && Short) ||
    (writingPackage?.title === 'Regular News Story' && Regular) ||
    (writingPackage?.title === 'Long News Story' && News);

  const handleOnEdit = (data: any) => {
    console.log('data', data);
    dispatch(setStateNext({ next: data }));
    navigate('/packages/order');
  };

  return (
    <div className="">
      <h2 className="mt-5 review_order_"> Review Order</h2>
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
      <Box className="review_box mt-5">
        <div className="d-flex-c between">
          <Box className="d-flex-c">
            <Box className="">
              <Typography className="review_title p-2">
                {' '}
                Brand Details{' '}
              </Typography>
            </Box>
          </Box>
          <button
            onClick={(e) => handleOnEdit('writing')}
            className="editButton"
          >
            Edit
          </button>
        </div>
        <div className="p-2">
          <p className="data_name_">
            Brand: <span className="span_data">{brand?.brand_name}</span>{' '}
          </p>
          <p className="data_name_">
            Contact Name:{' '}
            <span className="span_data">{brand?.representative_name}</span>{' '}
          </p>
          <p className="data_name_">
            Contact Email:{' '}
            <span className="span_data">{brand?.representative_email}</span>{' '}
          </p>
          <p className="data_name_">
            Contact Phone: <span className="span_data">{brand?.phone}</span>{' '}
          </p>
          <p className="data_name_">
            Address: <span className="span_data">{brand?.address}</span>{' '}
          </p>
          <p className="data_name_">
            Country:{' '}
            <span className="span_data">{brand?.brand_country?.label}</span>{' '}
          </p>
          <p className="data_name_">
            Website Links:{' '}
            <span className="span_data">{brand?.website_link}</span>{' '}
          </p>
        </div>
      </Box>
      <Box className="review_box mt-5">
        <div className="d-flex-c between">
          <Box className="d-flex-c">
            <Box className="">
              <Typography className="review_title p-2"> News Story </Typography>
            </Box>
          </Box>
          <button onClick={(e) => handleOnEdit('brand')} className="editButton">
            Edit
          </button>
        </div>
        <div className="p-2">
          <p className="data_name_">Link: </p>
          <span className="span_data ">
            {news_story?.docs_link ? news_story?.docs_link : 'No link provided'}
          </span>
          <p className="data_name_ mt-2">
            Description:{' '}
            <span className="span_data_quill">
              {news_story?.details ? (
                <div
                  className="span_data_quill"
                  dangerouslySetInnerHTML={{ __html: news_story?.details }}
                ></div>
              ) : (
                <p> No description provided</p>
              )}
            </span>
          </p>
        </div>
      </Box>

      <div className="mb-5 mt-2">
        <button
          className="button-next mt-5 mb-5"
          role="button"
          onClick={(e) => navigate('/packages/payment')}
        >
          Continue to Payment Method <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default Review;
