import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import React, { useEffect } from 'react';
import Detailed from '../../../assets/BrandPush-Detailed-Research.png';
import News from '../../../assets/Long-News-Story.png';
import Regular from '../../../assets/Regular-News-Story.png';
import Short from '../../../assets/Short-News-Story.png';
import WriteYourOwnStory from '../../../assets/WriteYourOwnStory.png';

type InputF = {
  name: string;
  price: number;
};

type SelectedValueType = {
  title: string;
  price: number | string;
  value: string;
};

type PropsL = {
  selectedValue: SelectedValueType;
  setSelectedValue: any;
  checked: any;
  setChecked: any;
  setNextSteps: any;
  writingPackageLoc: any;
  detailedResearchLoc: any;
};

export default function WritingPackage({
  selectedValue,
  setSelectedValue,
  checked,
  setChecked,
  setNextSteps,
  writingPackageLoc,
  detailedResearchLoc,
}: PropsL) {
  const [isResearch, setResearch] = React.useState<boolean>(false);

  useEffect(() => {
    if (writingPackageLoc) {
      setSelectedValue({
        title: writingPackageLoc?.title,
        price: writingPackageLoc?.price,
        value: writingPackageLoc?.value,
      });
    }

    if (detailedResearchLoc) {
      setResearch(detailedResearchLoc.value);
    }
  }, [writingPackageLoc, detailedResearchLoc]);

  const handleClick = (title: string, price: any, value: string) => {
    setSelectedValue({
      title: title,
      price: price,
      value: value,
    });
    if (price === 'Free') {
      setChecked({ name: '', price: 0 });
    }
  };

  const handleCheckBox = () => {
    if (selectedValue) {
      if (!checked?.name) {
        setChecked({ name: 'Detailed Research', price: 77 });
      } else {
        setChecked({ name: '', price: 0 });
      }
    }
  };

  return (
    <div>
      <p className="text_p">
        News sites require the following brand info to be displayed at the end
        of each publication. The email will be private behind a contact form.
      </p>
      <Box className="mt-5">
        <button
          onClick={(e) =>
            handleClick('Write Your Own Story', 'Free', 'Upload Your Own Story')
          }
          id={`${selectedValue.title === 'Write Your Own Story' && 'active-re'}`}
          className="d-flex-c w-full writing_box"
        >
          <img
            src={WriteYourOwnStory}
            style={{
              width: '5%',
              marginRight: '10px',
            }}
          />

          <Box className="w-full">
            <Box className="d-flex-c both-side text-left">
              <div className="writing_text_hed">Write Your Own Story</div>
              <div className="d-flex-c both-side">
                <Typography>FREE</Typography>
                <Radio
                  checked={selectedValue.title === 'Write Your Own Story'}
                  // onChange={handleChange}
                  value="Write Your Own Story"
                  name="radio-buttons"
                  className="radio-writings"
                  inputProps={{ 'aria-label': 'Write Your Own Story' }}
                />
              </div>
            </Box>
            <Typography className="text_x_sm top-8 text-left">
              Upload your news story & we'll publish it on major news sites
            </Typography>
          </Box>
        </button>

        <div className="d-flex-c mt-4 mb-4 better-results">
          <span className="span-border"></span>{' '}
          <i>For better results choose a package below</i>{' '}
          <span className="span-border "></span>
        </div>

        <button
          onClick={(e) =>
            handleClick('Short News Story', 40, '350 Word News Story')
          }
          id={`${selectedValue.title === 'Short News Story' && 'active-re'}`}
          className="d-flex-c w-full writing_box mt-2"
        >
          <img
            src={Short}
            style={{
              width: '5%',
              marginRight: '10px',
            }}
          />

          <Box className="w-full">
            <Box className="d-flex-c both-side text-left">
              <div className="writing_text_hed">Short News Story</div>
              <div className="d-flex-c both-side">
                <Typography>$40.00</Typography>
                <Radio
                  checked={selectedValue.title === 'Short News Story'}
                  // onChange={handleChange}
                  value="Short News Story"
                  className="radio-writings"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'Short News Story' }}
                />
              </div>
            </Box>
            <Typography className="text_x_sm top-8 text-left">
              <span className="word">350 word </span> news story, written and
              SEO optimized, with <span className="word">2 revisions</span>{' '}
              included
            </Typography>
          </Box>
        </button>

        <button
          onClick={(e) =>
            handleClick('Regular News Story', 40, '500 Word News Story')
          }
          className="d-flex-c w-full writing_box mt-2"
          id={`${selectedValue.title === 'Regular News Story' && 'active-re'}`}
        >
          <img
            src={Regular}
            style={{
              width: '5%',
              marginRight: '10px',
            }}
          />

          <Box className="w-full">
            <Box className="d-flex-c both-side text-left">
              <div className="writing_text_hed">Regular News Story</div>
              <div className="d-flex-c both-side">
                <Typography>$88</Typography>
                <Radio
                  checked={selectedValue.title === 'Regular News Story'}
                  // onChange={handleChange}
                  value="Regular News Story"
                  className="radio-writings"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'Regular News Story' }}
                />
              </div>
            </Box>
            <Typography className="text_x_sm top-8 text-left">
              <span className="word">500 word</span> news story, written and SEO
              optimized, with<span className="word"> 3 revisions </span>
              included
            </Typography>
          </Box>
        </button>

        <button
          onClick={(e) =>
            handleClick('Long News Story', 40, '700+ Word News Story')
          }
          className="d-flex-c w-full writing_box mt-2"
          id={`${selectedValue.title === 'Long News Story' && 'active-re'}`}
        >
          <img
            src={News}
            style={{
              width: '5%',
              marginRight: '10px',
            }}
          />

          <Box className="w-full">
            <Box className="d-flex-c both-side text-left">
              <div className="writing_text_hed">
                Long News Story <span className="POPULAR">MOST POPULAR</span>
              </div>
              <div className="d-flex-c both-side">
                <Typography>$99</Typography>
                <Radio
                  checked={selectedValue.title === 'Long News Story'}
                  // onChange={handleChange}
                  value="Long News Story"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'Long News Story' }}
                  className="radio-writings"
                />
              </div>
            </Box>
            <Typography className="text_x_sm top-8 text-left">
              <span className="word"> 700+ word </span> news story, written and
              SEO optimized, with{' '}
              <span className="word">unlimited revisions</span> included
            </Typography>
          </Box>
        </button>

        {isResearch && (
          <div>
            <h6 className="writing_text_hed mt-5 mb-3">Writing Upgrades</h6>
            <button
              onClick={handleCheckBox}
              className="d-flex-c w-full writing_box mt-2"
              id={`${selectedValue?.price !== 'Free' && checked?.name === 'Detailed Research' && 'active-re'}`}
            >
              <img
                src={Detailed}
                style={{
                  width: '5%',
                  marginRight: '10px',
                }}
              />

              <Box className="w-full">
                <Box className="d-flex-c both-side text-left">
                  <div className="writing_text_hed">
                    Detailed Research{' '}
                    <span className="POPULAR">MOST POPULAR</span>
                  </div>
                  <div className="d-flex-c both-side">
                    <Typography>$77</Typography>
                    <Checkbox
                      className={`${selectedValue?.price !== 'Free' && checked?.name === 'Detailed Research' ? 'checkedbox' : 'checkbox'} Email_me_cb`}
                      checked={
                        selectedValue.price !== 'Free' &&
                        checked?.name === 'Detailed Research'
                      }
                      // onChange={handleCheckBox}
                      inputProps={{ 'aria-label': 'controlled' }}
                      style={{
                        marginTop: '6px',
                        paddingLeft: '15px',
                      }}
                    />
                  </div>
                </Box>
                <Typography className="text_x_sm top-8 text-left">
                  Indepth research into your brand, industry, and product.
                </Typography>
              </Box>
            </button>
          </div>
        )}
        <button
          onClick={(e) => setResearch((e) => !e)}
          className="d-flex-c upgrades"
        >
          <span className="span_plus">{isResearch ? '-' : '+'}</span>
          {isResearch ? 'Less' : 'More'} Option
        </button>
      </Box>

      <button
        className="button-next mt-4"
        onClick={(e) => setNextSteps('writing')}
        disabled={selectedValue.title ? false : true}
        role="button"
      >
        Next Step <ArrowForwardIcon />
      </button>
    </div>
  );
}
