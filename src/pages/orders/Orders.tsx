import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStateWritingPackage } from '../../features/order/orderSlice';
import Account from './components/Account';
import BrandDetails from './components/BrandDetails';
import NewsStory from './components/NewsStory';
import PublishingPackages from './components/PublishingPackages';
import WritingPackage from './components/WritingPackage';

type InputF = {
  name: string;
  price: number;
};

const Orders = () => {
  const { writingPackage, detailedResearch, publishPackage, account, brand } =
    useSelector((state) => state?.order);
  const [expanded, setExpanded] = React.useState(true);
  const [nextSteps, setNextSteps] = React.useState('1st');
  const [expandedPublishing, setExpandedPublishing] = React.useState(false);
  const [openPublishing, setOpenPublishing] = React.useState(false);

  const [expandedWriting, setExpandedWriting] = React.useState(false);
  const [openWriting, setOpenWriting] = React.useState(false);

  const [expandedBrand, setExpandedBrand] = React.useState(false);
  const [openBrand, setOpenBrand] = React.useState(0);

  const [expandedNews, setExpandedNews] = React.useState(false);
  const [openNews, setOpenNews] = React.useState(false);

  const [writeChecked, setWriteChecked] = React.useState<InputF | undefined>();
  const [writePackage, setSelectedValue] = React.useState({
    title: 'Write Your Own Story',
    price: 'Free',
    value: '',
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (nextSteps === '1st') {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
    if (nextSteps === 'account') {
      setExpandedPublishing(true);
    } else {
      setExpandedPublishing(false);
    }
    if (nextSteps === 'publishing') {
      setExpandedWriting(true);
    } else {
      setExpandedWriting(false);
    }
    if (nextSteps === 'writing') {
      setExpandedBrand(true);
    } else {
      setExpandedBrand(false);
    }
    if (nextSteps === 'brand') {
      setExpandedNews(true);
    } else {
      setExpandedNews(false);
    }
  }, [nextSteps]);

  React.useEffect(() => {
    dispatch(
      setStateWritingPackage({
        writingPackage: writePackage,
        detailedResearch: writeChecked,
      }),
    );
  }, [writePackage, writeChecked]);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);

    if (!expanded) {
      setNextSteps('1st');
    }
    if (expanded) {
      setNextSteps('');
    }
  };

  const handleExpansionPublishing = () => {
    setExpandedPublishing((prevExpanded) => !prevExpanded);
    setOpenPublishing(true);

    if (!expandedPublishing) {
      setNextSteps('account');
    }
    if (expandedPublishing) {
      setNextSteps('');
    }
  };

  const handleExpansionWriting = () => {
    setExpandedWriting((prevExpanded) => !prevExpanded);
    setOpenWriting(true);

    if (!expandedWriting) {
      setNextSteps('publishing');
    }
    if (expandedWriting) {
      setNextSteps('');
    }
  };

  const handleExpansionBrand = () => {
    setExpandedBrand((prevExpanded) => !prevExpanded);
    setOpenBrand(openBrand + 1);

    if (!expandedBrand) {
      setNextSteps('writing');
    }
    if (expandedBrand) {
      setNextSteps('');
    }
  };

  const handleExpansionNews = () => {
    setExpandedNews((prevExpanded) => !prevExpanded);
    setOpenNews(true);

    if (!expandedNews) {
      setNextSteps('brand');
    }
    if (expandedNews) {
      setNextSteps('');
    }
  };

  const accountOnClose = () => {
    // console.log('llrrrrr');
  };

  const brandEmtry = Object?.values(brand)?.filter((value) => !value)?.length;

  // console.log('jnj', data);

  return (
    <div className="">
      <div className="pt-5">
        <Accordion
          className="mt-3 pb-2 pt-2 accordion"
          expanded={nextSteps === '1st' ? true : false}
          onChange={handleExpansion}
          onFocus={accountOnClose}
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
            <Typography className="accordion_head">
              {' '}
              <div className="flex items-center gap-3">
                Account{' '}
                {!expanded && (
                  <>
                    {!account ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#ff0000"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                          ></path>
                        </svg>{' '}
                        <p className="text-[13px]">
                          Please provide your Name and Email
                        </p>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#00a876"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                          />
                        </svg>
                        <p className="text-success">{account?.name}</p>
                      </>
                    )}
                  </>
                )}
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Account setNextSteps={setNextSteps} />
          </AccordionDetails>
        </Accordion>

        <Accordion
          onChange={handleExpansionPublishing}
          expanded={nextSteps === 'account' ? true : false}
          className="mt-3 pb-2 pt-2 accordion"
          slots={{ transition: Fade as AccordionSlots['transition'] }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            '& .MuiAccordion-region': {
              height: expandedPublishing ? 'auto' : 0,
            },
            '& .MuiAccordionDetails-root': {
              display: expandedPublishing ? 'block' : 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="accordion_head">
              <div className="flex items-center gap-3">
                Publishing Package{' '}
                {!expandedPublishing && openPublishing && (
                  <>
                    {!publishPackage?.title ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#ff0000"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                          ></path>
                        </svg>{' '}
                        <p className="text-[13px]">
                          Please select a publishing package
                        </p>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#00a876"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                          />
                        </svg>
                        <p className="text-success">{publishPackage?.title}</p>
                      </>
                    )}
                  </>
                )}
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PublishingPackages setNextSteps={setNextSteps} />
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="mt-3 pb-2 pt-2 accordion"
          onChange={handleExpansionWriting}
          expanded={nextSteps === 'publishing' ? true : false}
          slots={{ transition: Fade as AccordionSlots['transition'] }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            '& .MuiAccordion-region': {
              height: expandedWriting ? 'auto' : 0,
            },
            '& .MuiAccordionDetails-root': {
              display: expandedWriting ? 'block' : 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="accordion_head">
              <div className="flex items-center gap-3">
                Writing Package
                {!expandedWriting && openWriting && (
                  <>
                    {!writingPackage?.title ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#ff0000"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                          ></path>
                        </svg>{' '}
                        <p className="text-[13px]">
                          Please select a writing package
                        </p>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#00a876"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                          />
                        </svg>
                        <p className="text-success">{writingPackage?.title}</p>
                      </>
                    )}
                  </>
                )}
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <WritingPackage
              setNextSteps={setNextSteps}
              selectedValue={writePackage}
              setSelectedValue={setSelectedValue}
              setChecked={setWriteChecked}
              checked={writeChecked}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="mt-3 pb-2 pt-2 accordion"
          onChange={handleExpansionBrand}
          expanded={nextSteps === 'writing' ? true : false}
          slots={{ transition: Fade as AccordionSlots['transition'] }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            '& .MuiAccordion-region': {
              height: expandedBrand ? 'auto' : 0,
            },
            '& .MuiAccordionDetails-root': {
              display: expandedBrand ? 'block' : 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="accordion_head">
              <div className="flex items-center gap-3">
                Brand Details
                {!expandedBrand && openBrand ? (
                  <>
                    {brandEmtry !== 0 ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#ff0000"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                          ></path>
                        </svg>{' '}
                        <p className="text-[13px]">
                          {brandEmtry === 6
                            ? 'Please enter your brand details'
                            : `Missing ${brandEmtry} fields`}
                        </p>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#00a876"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                          />
                        </svg>
                        <p className="text-success">{brand?.brand_name}</p>
                      </>
                    )}
                  </>
                ) : (
                  ''
                )}
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <BrandDetails openBrand={openBrand} setNextSteps={setNextSteps} />
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="mt-3 pb-2 pt-2 accordion"
          onChange={handleExpansionNews}
          expanded={nextSteps === 'brand' ? true : false}
          slots={{ transition: Fade as AccordionSlots['transition'] }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            '& .MuiAccordion-region': {
              height: expandedNews ? 'auto' : 0,
            },
            '& .MuiAccordionDetails-root': {
              display: expandedNews ? 'block' : 'none',
            },
          }}
        >
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
            <NewsStory />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Orders;
