import TableLoader from '../components/TableLoader';

interface props {
  name: any;
  isLoading: boolean;
  publication: any;
}

const Sample: React.FC<props> = ({ name, isLoading, publication }) => {
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
                <div className={`grid grid-cols-3 sm:grid-cols-6`} key={key}>
                  <a
                    href={brand.news_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <div className="flex items-center gap-2 p-2.2 xl:p-1">
                      <div className="flex-shrink-0 w-4/12">
                        <img className="w-full" src={brand.image} alt="Brand" />
                      </div>
                      <p className="hidden text-black dark:text-white sm:block">
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
