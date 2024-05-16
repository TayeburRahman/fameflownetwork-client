import { Box, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function WritingPackage() {
  return (
    <div>
      <Box>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <Box>
              <Box>
                <img />
              </Box>
              <Box>
                <Box>
                  <div>Short News Story</div>
                  <div>
                    <Typography>FREE</Typography>
                    <FormControlLabel
                      value="Write Your Own Story"
                      control={<Radio />}
                    />
                  </div>
                </Box>
                <Typography>
                  350 word news story, written and SEO optimized, with 2
                  revisions included
                </Typography>
              </Box>
            </Box>
            <FormControlLabel
              value="Short News Story"
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              value="Regular News Story"
              control={<Radio />}
              label="Other"
            />
            <FormControlLabel
              value="Long News Story "
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
}
