import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import React from 'react';
import Detailed from '../../../assets/BrandPush-Detailed-Research.png';
import News from '../../../assets/Long-News-Story.png';
import Regular from '../../../assets/Regular-News-Story.png';
import Short from '../../../assets/Short-News-Story.png';
import WriteYourOwnStory from '../../../assets/WriteYourOwnStory.png';

type InputF = {
  name: string;
  price: number;
};

export default function PublishingPackages() {
  const [selectedValue, setSelectedValue] = React.useState('');
  const [checked, setChecked] = React.useState<InputF | undefined>();
  const [isResearch, setResearch] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = (event: string) => {
    setSelectedValue(event);
  };

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedValue) {
      setChecked(
        checked ? undefined : { name: 'Detailed Research', price: 77 },
      );
    }
  };

  return (
    <div>
      <p className='text-[18px]'>Pick where to publish your news story. Use the Popular Package for general topics, Alternative Package for complex topics like crypto or CBD, Authority Package for SEO, or Ultimate Package for best results.</p>
      <Box className="mt-5">
        <button
          onClick={(e) => handleClick('Write Your Own Story')}
          id={`${selectedValue === 'Write Your Own Story' && 'active-re'}`}
          className="d-flex-c w-full writing_box"
        >
          <img
            src="https://www.brandpush.co/assets/img/emojis/BrandPush-Limited-Package.png"
            style={{
              width: '5%',
              marginRight: '10px',
            }}
          />

          <Box className="w-full">
            <Box className="d-flex-c both-side text-left">
              <div className="writing_text_hed">Limited Package</div>
              <div className="d-flex-c both-side">
                <Typography>$165.00</Typography>
                <Radio
                  checked={selectedValue === 'Write Your Own Story'}
                  onChange={handleChange}
                  value="Write Your Own Story"
                  name="radio-buttons"
                  className="radio-writings"
                  inputProps={{ 'aria-label': 'Write Your Own Story' }}
                />
              </div>
            </Box>
            <Typography className="text_x_sm top-8 text-left">
              Publish almost any topic, this package provides basic exposure & reach. <br />

              <span className="word">250</span> news sites outlets |     <span className="word">3.3m</span> monthly  readers

              | <span className="word">Most</span> topics accepted

            </Typography>
          </Box>
        </button>
        <button
          onClick={(e) => handleClick('Short News Story')}
          id={`${selectedValue === 'Short News Story' && 'active-re'}`}
          className="d-flex-c w-full writing_box mt-2"
        >
          <img
            src="https://www.brandpush.co/assets/img/emojis/BrandPush-Popular-News-Network.png"
            style={{
              width: '5%',
              marginRight: '10px',
            }}
          />

          <Box className="w-full">
            <Box className="d-flex-c both-side text-left">
              <div className="writing_text_hed">Popular Package</div>
              <div className="d-flex-c both-side">
                <Typography>$195.00</Typography>
                <Radio
                  checked={selectedValue === 'Write Your Own Story'}
                  onChange={handleChange}
                  value="Write Your Own Story"
                  name="radio-buttons"
                  className="radio-writings"
                  inputProps={{ 'aria-label': 'Write Your Own Story' }}
                />
              </div>
            </Box>
            <Typography className="text_x_sm top-8 text-left">
              Great for most brands, includes Fox & Google News, but accepts fewer topics.<br />

              <span className="word">250</span> news sites outlets |     <span className="word">3.3m</span> monthly  readers

              | <span className="word">Most</span> topics accepted

            </Typography>
          </Box>
        </button>


        <button
          onClick={(e) => handleClick('Long News Story')}
          className="d-flex-c w-full writing_box mt-2"
          id={`${selectedValue === 'Long News Story' && 'active-re'}`}
        >
          <img
            src="https://www.brandpush.co/assets/img/emojis/BrandPush-Authority-News-Network.png"
            style={{
              width: '5%',
              marginRight: '10px',
            }}
          />

          <Box className="w-full">
            <Box className="d-flex-c both-side text-left">
              <div className="writing_text_hed">Authority Package</div>
              <div className="d-flex-c both-side">
                <Typography>$565.00</Typography>
                <Radio
                  checked={selectedValue === 'Write Your Own Story'}
                  onChange={handleChange}
                  value="Write Your Own Story"
                  name="radio-buttons"
                  className="radio-writings"
                  inputProps={{ 'aria-label': 'Write Your Own Story' }}
                />
              </div>
            </Box>
            <Typography className="text_x_sm top-8 text-left">
              Only our 6 highest authority outlets, perfect for SEO improvement.<br />

              <span className="word">250</span> news sites outlets |     <span className="word">3.3m</span> monthly  readers

              | <span className="word">Most</span> topics accepted

            </Typography>
          </Box>
        </button>

        <button
          onClick={handleCheckBox}
          className="d-flex-c w-full writing_box mt-2"
          id={`${checked?.name === 'Detailed Research' && 'active-re'}`}
        >
          <img
            src="https://www.brandpush.co/assets/img/emojis/BrandPush-Ultimate-News-Network.png"
            style={{
              width: '5%',
              marginRight: '10px',
            }}
          />

          <Box className="w-full">
            <Box className="d-flex-c both-side text-left">
              <div className="writing_text_hed">Ultimate Package</div>
              <div className="d-flex-c both-side">
                <Typography>$695.00</Typography>
                <Radio
                  checked={selectedValue === 'Write Your Own Story'}
                  onChange={handleChange}
                  value="Write Your Own Story"
                  name="radio-buttons"
                  className="radio-writings"
                  inputProps={{ 'aria-label': 'Write Your Own Story' }}
                />
              </div>
            </Box>
            <Typography className="text_x_sm top-8 text-left">
              The Ultimate exposure & reach, this network includes all news outlets for the best results.<br />

              <span className="word">250</span> news sites outlets |     <span className="word">3.3m</span> monthly  readers

              | <span className="word">Most</span> topics accepted

            </Typography>
          </Box>
        </button>


        {isResearch && (
          <div>
            <h6 className="writing_text_hed mt-5 mb-3">Get More Coverage</h6>
            <button
              onClick={handleCheckBox}
              className="d-flex-c w-full writing_box mt-2"
              id={`${checked?.name === 'Detailed Research' && 'active-re'}`}
            >
              <img
                src="https://www.brandpush.co/assets/img/news-logos/Publish-on-MSN-with-brandpush.svg"
                style={{
                  width: '5%',
                  marginRight: '10px',
                }}
              />

              <Box className="w-full">
                <Box className="d-flex-c both-side text-left">
                  <div className="writing_text_hed">MSN.com</div>
                  <div className="d-flex-c both-side">
                    <Typography>$495.00</Typography>
                    <Radio
                      checked={selectedValue === 'Write Your Own Story'}
                      onChange={handleChange}
                      value="Write Your Own Story"
                      name="radio-buttons"
                      className="radio-writings"
                      inputProps={{ 'aria-label': 'Write Your Own Story' }}
                    />
                  </div>
                </Box>
                <Typography className="text_x_sm top-8 text-left">
                  {/* The Ultimate exposure & reach, this network includes all news outlets for the best results.<br /> */}

                  <span className="word">250</span> news sites outlets |     <span className="word">3.3m</span> monthly  readers

                  | <span className="word">Most</span> topics accepted

                </Typography>
              </Box>
            </button>
            <button
              onClick={handleCheckBox}
              className="d-flex-c w-full writing_box mt-2"
              id={`${checked?.name === 'Detailed Research' && 'active-re'}`}
            >
              <img
                src="https://www.brandpush.co/assets/img/news-logos/Publish_on_Yahoo_Finance_with_BrandPush.svg"
                style={{
                  width: '5%',
                  marginRight: '10px',
                }}
              />

              <Box className="w-full">
                <Box className="d-flex-c both-side text-left">
                  <div className="writing_text_hed">Yahoo Finance</div>
                  <div className="d-flex-c both-side">
                    <Typography>$795.00</Typography>
                    <Radio
                      checked={selectedValue === 'Write Your Own Story'}
                      onChange={handleChange}
                      value="Write Your Own Story"
                      name="radio-buttons"
                      className="radio-writings"
                      inputProps={{ 'aria-label': 'Write Your Own Story' }}
                    />
                  </div>
                </Box>
                <Typography className="text_x_sm top-8 text-left">
                  {/* The Ultimate exposure & reach, this network includes all news outlets for the best results.<br /> */}

                  <span className="word">250</span> news sites outlets |     <span className="word">3.3m</span> monthly  readers

                  | <span className="word">Most</span> topics accepted

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
    </div>
  )
}


