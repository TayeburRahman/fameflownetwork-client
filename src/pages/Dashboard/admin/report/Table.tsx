import axios from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PackageReport from '../../../../components/PackageReport';
import TableLoader from '../../../../components/TableLoader';
import useToast from '../../../../hooks/useToast';
import { SITES } from '../../../../types/brand';
import DeleteModal from '../../DeleteModal';
import PublicationModal from './package/PublicationModal';

interface UserDetailsProps {
  userData: any;
  mType: string;
  name: string;
}

type Inputs = {
  sub_title: string;
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  image: string;
  package: string;
  _id: any;
};

const Table: React.FC<UserDetailsProps> = ({ userData, mType, name }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [isDelete, setOpenDelete] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [reqStatus, setReqStatus] = useState<boolean>(true);
  const [resStatus, setResStatus] = useState<any>(false);
  const [isTexts, setTexts] = useState<Inputs>();

  const [status, setStatus] = useState<string>('');
  const [updateValue, setUpdateValue] = useState<object>();
  const [sites, setSites] = useState<SITES[]>();

  const { displayToast } = useToast();

  const localAuth = localStorage?.getItem('auth');
  const { token } = JSON.parse(localAuth || '{}');
  const navigate = useNavigate();

  useEffect(() => {
    if (userData._id) {
      const publicationDataApi = async () => {
        try {
          const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/package/get`;
          const apiUrl2 = `https://fameflownetwork-server.vercel.app/api/v1/package/get/r/${name}`;

          const response = await axios.get(name ? apiUrl2 : apiUrl, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const { sites, status } = response.data;

          if (status === 'success') {
            setSites(sites);
            setLoading(false);
          } else {
            setLoading(false);
          }
        } catch (error: any) {
          console.log('error', error.response);
          setLoading(false);
          if (error.response.status === 400) {
            navigate('/auth/signin');
          }
        }
      };
      publicationDataApi();
    }

    const textDataApi = async () => {
      setTexts();
      try {
        const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/package/get/text/${name ? name : 'Sample Reports'}`;

        const response = await axios.get(apiUrl);
        const { texts, status } = response.data;

        if (status === 'success') {
          setTexts(texts);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error: any) {
        console.log('error', error.response);
        setLoading(false);
        if (error.response.status === 400) {
          navigate('/auth/signin');
        }
      }
    };
    textDataApi();
  }, [resStatus, userData, name]);

  const handleOnClose = () => {
    setOpen(false);
  };

  const onCloseDelete = () => {
    setOpenDelete(false);
  };

  const handelOpenDelete = (action: string, brand: any) => {
    setOpenDelete(true);
    setStatus(action);
    setUpdateValue(brand);
  };

  const handelOpenModal = (action: string, brand: any) => {
    setOpen(true);
    setStatus(action);
    setUpdateValue(brand);
  };

  const handelOpenAddModal = (action: string, brand: any) => {
    setOpen(true);
    setStatus(action);
    setUpdateValue(brand);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (
      !data.image ||
      !data.sub_title ||
      !data.title ||
      !data.p1 ||
      !data.p2 ||
      !data.p3 ||
      !data.p4
    ) {
      displayToast({
        status: 'error',
        message: 'All fields are required',
      });
      return;
    }
    try {
      const apiUrl = `https://fameflownetwork-server.vercel.app/api/v1/package/add/text/${name ? name : 'Sample Reports'}`;
      const apiUrl2 = `https://fameflownetwork-server.vercel.app/api/v1/package/update/text/${name ? name : 'Sample Reports'}`;
      const response = await axios.post(isTexts ? apiUrl2 : apiUrl, {
        text: data,
      });

      if (response.data.status === 'success') {
        setReqStatus((ra: any) => !ra);
        displayToast({
          status: 'success',
          message: `Site Successfully!`,
        });
      } else {
        displayToast({
          status: 'error',
          message: 'There is something wrong! Please try again.',
        });
      }
    } catch (error: any) {
      console.error('Submission error:', error.response?.data || error.message);
      displayToast({
        status: 'error',
        message:
          'An error occurred while processing your request. Please try again later.',
      });
    }
  };

  return (
    <div className="flex flex-col  ">
      <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
        {name ? name : 'Sample Reports'}
      </h4>

      <div className="  mb-5">
        <form onSubmit={handleSubmit(onSubmit)} className="grid">
          <input
            defaultValue={isTexts && isTexts?.image}
            type="text"
            id="image"
            required
            className="border-solid border-2 border-blue-600 rounded h-10 mb-2 w-full ps-2"
            {...register('image')}
          />
          <input
            defaultValue={isTexts && isTexts?.sub_title}
            id="sub_title"
            type="text"
            required
            className="border-solid border-2 border-blue-600 rounded h-10 mb-2 w-full ps-2"
            {...register('sub_title')}
          />

          <textarea
            defaultValue={isTexts && isTexts?.title}
            id="title"
            required
            className=" border-solid border-2 border-blue-600 rounded h-20 mb-2 w-full ps-2 "
            {...register('title')}
          />
          <textarea
            id="p1"
            defaultValue={isTexts && isTexts?.p1}
            required
            className=" border-solid border-2 border-blue-600 rounded h-20 mb-2 w-full ps-2 "
            {...register('p1')}
          />
          <textarea
            defaultValue={isTexts && isTexts?.p2}
            required
            className=" border-solid border-2 border-blue-600 rounded h-20 mb-2 w-full ps-2 "
            {...register('p2')}
          />
          <textarea
            defaultValue={isTexts && isTexts?.p3}
            required
            className=" border-solid border-2 border-blue-600 rounded h-20 mb-2 w-full ps-2 "
            {...register('p3')}
          />
          <textarea
            defaultValue={isTexts ? isTexts?.p4 : ''}
            required
            className=" border-solid border-2 border-blue-600 rounded h-20 mb-2 w-full ps-2 "
            {...register('p4')}
          />

          {/* errors will return when field validation fails  */}

          <input
            type="submit"
            value={isTexts ? 'Update' : 'Add new'}
            className="border-solid border-2 border-blue-600 rounded px-4 py-2 bg-blue-600 text-white submit_button"
          />
        </form>
      </div>

      <div>
        <PackageReport report={sites} isLoading={isLoading} />
      </div>

      <div className="flex items-center justify-between mt-5">
        <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
          -
        </h4>

        {mType === 'admin' && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => handelOpenAddModal('Add Link', [''])}
          >
            Add link
          </button>
        )}
      </div>

      {isLoading ? (
        <TableLoader />
      ) : (
        <div className="">
          <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7 mt-4">
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
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                PACKAGES
              </h5>
            </div>
          </div>

          {sites?.length ? (
            sites.map((brand, key) => (
              <div className={`grid grid-cols-5 sm:grid-cols-7`} key={key}>
                <a
                  href={brand.news_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
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
                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-meta-5">
                    {brand.package.map((data, key) => (
                      <span
                        style={{
                          background: '#8595951c',
                          padding: '4px',
                          borderRadius: '87px',
                          margin: '2px',
                        }}
                      >
                        {data}
                      </span>
                    ))}
                  </p>
                </div>

                {mType === 'admin' && (
                  <div className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <a
                        href={brand.news_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-primary"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                            fill=""
                          />
                          <path
                            d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                            fill=""
                          />
                        </svg>
                      </a>

                      <button
                        className="hover:text-primary"
                        onClick={(e) => handelOpenModal('Update', brand)}
                      >
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8" clipPath="url(#clip0_88_10224)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_88_10224">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>

                      <button
                        className="hover:text-primary"
                        onClick={(e) => handelOpenDelete('delete', brand)}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                            fill=""
                          />
                          <path
                            d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                            fill=""
                          />
                          <path
                            d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                            fill=""
                          />
                          <path
                            d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <h6 className="w-full mt-5 mb-5 flex justify-center">
              Data Not Found!
            </h6>
          )}
        </div>
      )}

      {isOpen && (
        <PublicationModal
          isOpen={isOpen}
          onClose={handleOnClose}
          status={status}
          uValue={updateValue}
          userData={userData}
          setReqStatus={setResStatus}
        />
      )}
      {isDelete && (
        <DeleteModal
          dValue={updateValue}
          onCloseDelete={onCloseDelete}
          isDelete={isDelete}
          status="package"
          userData={userData}
          setReqStatus={setResStatus}
        />
      )}
    </div>
  );
};

export default Table;
