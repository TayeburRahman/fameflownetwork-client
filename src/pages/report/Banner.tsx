import { useState } from 'react';
import report from '../../assets/report.png';

const Banner = () => {
  const [openLink, setOpenLink] = useState<boolean>(false);
  const handleOnClick = () => {
    setOpenLink((e) => !e);
  };
  return (
    <div className="section-padding grid grid-cols-2 gap-4 place-items-center max-md:mt-14 max-md:pt-2 max-md:block max-md:space-y-10">
      <div>
        <h5 className="md-text">Publication Report</h5>
        <h2 className="text-large">Limited Package</h2>
        <h2 className="text-large">Sample Report</h2>
        <p className="text-small">
          The article was published 422 times across 399 news sites. These news
          sites collectively receive an estimated 3.3 million monthly visitors
          and have 194.9 thousand followers across their social media accounts.
        </p>
        {openLink && (
          <>
            <p className="text-small">
              Some news sites published your article in several different areas
              of their site, which is why the news sites are less than the total
              publications.
            </p>
            <p className="text-small">
              Traffic estimates are updated weekly by the industry-leading
              website analyzer similarweb.com
            </p>
            <p className="text-small">
              Click on any of the stats in the publications list below to verify
              them.
            </p>
          </>
        )}
        <button className="text-blue-600" onClick={handleOnClick}>
          Read more..
        </button>
      </div>
      <div>
        <img src={report} />
      </div>
    </div>
  );
};

export default Banner;
