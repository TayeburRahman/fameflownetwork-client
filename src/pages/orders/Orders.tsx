import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Account from './components/Account';
import BrandDetails from './components/BrandDetails';
import WritingPackage from './components/WritingPackage';

const Orders = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="">
      <div>
        <Accordion
          className="mt-3 pb-2 pt-2 accordion"
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade as AccordionSlots['transition'] }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
            '& .MuiAccordionDetails-root': {
              display: expanded ? 'block' : 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className="accordion_head">Account</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Account />
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-3 pb-2 pt-2 accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="accordion_head">
              Publishing Package
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-3 pb-2 pt-2 accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="accordion_head">Writing Package</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <WritingPackage />
          </AccordionDetails>
        </Accordion>

        <Accordion className="mt-3 pb-2 pt-2 accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="accordion_head">Brand Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <BrandDetails />
          </AccordionDetails>
        </Accordion>

        <Accordion className="mt-3 pb-2 pt-2 accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="accordion_head">
              News Story (optional)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Orders;
