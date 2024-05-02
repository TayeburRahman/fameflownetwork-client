import axios from 'axios';
import { useEffect, useState } from 'react';
import TableLoader from '../components/TableLoader';
import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';
import { BRAND, PUBLICATION } from '../types/brand';

const brandData: BRAND[] = [
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Benzinga',
    visitors: 88,
    revenues: '6.3',
    sales: '67.5',
    conversion: '23.3',
  },
  {
    logo: BrandTwo,
    name: 'My Mother Lode',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'FOX 40',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'FOX 28',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'FOX 43',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
];

const Sample = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [publication, setPublication] = useState<PUBLICATION[]>();

  console.log('publication', publication);

  useEffect(() => {
    const publicationDataApi = async () => {
      try {
        const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/publication/get/r/sampolreports`;

        const response = await axios.get(apiUrl);
        const { publications, status } = response.data;
        console.log(response.data);

        if (status === 'success') {
          setPublication(publications?.publication);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error: any) {
        console.log('error', error.response);
        setLoading(false);
      }
    };
    publicationDataApi();
  }, []);

  return (
    <div className="section-padding" id="publication">
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Publications
        </h4>

        {isLoading ? (
          <TableLoader />
        ) : (
          <div className="flex flex-col">
            <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  News Sites
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  AUTHORITY
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  MOZ RANK
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  GLOBAL RANK
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  SOCIAL
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  TRAFFIC
                </h5>
              </div>
            </div>

            {publication &&
              publication.map((brand, key) => (
                <div
                  className={`grid grid-cols-3 sm:grid-cols-6 ${
                    key === brandData.length - 1
                      ? ''
                      : 'border-b border-stroke dark:border-strokedark'
                  }`}
                  key={key}
                >
                  <a
                    href={brand.news_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <div className="flex items-center gap-2 p-2.2 xl:p-1">
                      <div className="flex-shrink-0">
                        <img src={BrandOne} alt="Brand" />
                      </div>
                      <p className="hidden text-black dark:text-white sm:block text-[12px]">
                        {brand.news_name}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <a
                      href={brand.authority_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <div>
                        <p className="text-black dark:text-white">
                          {brand.authority}
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <a
                      href={brand.moz_rank_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <p className="text-meta-3">{brand.moz_rank}</p>
                    </a>
                  </div>

                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <a
                      href={brand.global_rank_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <p className="text-black dark:text-white">
                        {brand.global_rank}k
                      </p>
                    </a>
                  </div>

                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <a
                      href={brand.social_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <p className="text-meta-5">{brand.social}k</p>
                    </a>
                  </div>

                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <a
                      href={brand.traffic_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <p className="text-meta-5">{brand.traffic}k</p>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sample;
