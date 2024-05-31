import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pricingDatas1 from './data/data';

const Pricing = () => {
  const [displayedData, setDisplayedData] = useState<any>('');
  const navigate = useNavigate();

  const handleButtonClick = (data: any) => {
    setDisplayedData(data);
  };

  return (
    <section className="grid place-items-center my-20" id="pricing">
      <h1 className="text-6xl leading-normal text-center font-bold">
        Grow Your Brand Today
      </h1>
      <p className="text-slate-400 text-[22px] w-[60%] py-2 font-[400] leading-8 text-center max-md:w-full">
        Get featured on <span className="text-sky-600 ">major news sites</span>{' '}
        to drive visitors and
        <br /> customers to your website, all for{' '}
        <span className="font-semibold text-zinc-700">a one-time payment.</span>
      </p>

      <div className="drop-shadow-2xl bg-white rounded-2xl  max-md:hidden mt-[3rem] border-2 border-black w-[90vw] p-10 bg-slate-300 h-[140vh]">
        <div className="grid grid-cols-12 text-[14px]  my-4 gap-5 text-center max-md:block">
          <div className="col-span-4">
            <p className="text-2xl font-bold">Pricing & Packages</p>
            <p className="text-[17px] mt-2 font-semibold text-slate-400">
              One time payment, years <br /> of benefits
            </p>
          </div>
          <div className="col-span-2 mx-auto ">
            <p className="text-2xl font-bold">LIMITED</p>
            <p className="text-[18px] font-bold text-slate-400  mb-5">
              ${displayedData ? displayedData.price1 : '165'} USD
            </p>
            <button
              onClick={(e) => navigate('/packages/order')}
              className="px-6 py-3 text-[17px] font-medium bg-orange-500 text-white rounded-[50px]"
            >
              Order Now
            </button>
          </div>
          <div className="col-span-2 mx-auto">
            <p className="text-2xl font-bold">POPULAR</p>
            <p className="text-[18px] font-bold text-slate-400  mb-5">
              ${displayedData ? displayedData.price2 : '195'} USD
            </p>
            <button
              onClick={(e) => navigate('/packages/order')}
              className="px-6 py-3 text-[17px] font-medium bg-orange-500 text-white rounded-[50px]"
            >
              Order Now
            </button>
          </div>
          <div className="col-span-2 mx-auto">
            <p className="text-2xl font-bold">AUTHORITY</p>
            <p className="text-[18px] font-bold text-slate-400  mb-5">
              ${displayedData ? displayedData.price3 : '565'} USD
            </p>
            <button
              onClick={(e) => navigate('/packages/order')}
              className="px-6 py-3 text-[17px] font-medium bg-orange-500 text-white rounded-[50px]"
            >
              Order Now
            </button>
          </div>
          <div className="col-span-2 mx-auto">
            <p className="text-2xl font-bold">ULTIMATE</p>
            <p className="text-[18px] font-bold text-slate-400  mb-5">
              ${displayedData ? displayedData.price4 : '695 '} USD
            </p>
            <button
              onClick={(e) => navigate('/packages/order')}
              className="px-6 py-3 text-[17px] font-medium bg-orange-500 text-white rounded-[50px]"
            >
              Order Now
            </button>
          </div>
        </div>
        <div className="grid space-y-10 my-5 text-center  overflow-y-scroll  scrollbar-hidden h-[70%]">
          <p className="text-[20px] font-semibold text-left">
            Writing Packages
          </p>
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base font-semibold">
              {pricingDatas1.pricingDatas1.map((data) => (
                <li key={data.id}>
                  <button
                    className={data.class}
                    onClick={() => handleButtonClick(data)}
                  >
                    {data.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <h1 className="text-left font-bold text-xl">Overview</h1>
          {/* changing side */}

          {displayedData ? (
            <>
              <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium">
                <li className="col-span-4 text-left flex text-[17px]">
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                  {displayedData.datas.li1.title}
                </li>
                <li className="col-span-2 mx-auto">
                  {displayedData.datas.li1.col1}
                </li>
                <li className="col-span-2 mx-auto">
                  {displayedData.datas.li1.col2}
                </li>
                <li className="col-span-2 mx-auto">
                  {displayedData.datas.li1.col3}
                </li>
                <li className="col-span-2 mx-auto">
                  {displayedData.datas.li1.col4}
                </li>
              </ul>
              <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium">
                {displayedData && (
                  <>
                    <li className="col-span-4 text-left flex text-[17px]">
                      {' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 17l5-5-5-5v10z" />
                      </svg>
                      {displayedData.datas.li2.title}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li2.col1}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li2.col2}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li2.col3}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li2.col4}
                    </li>
                  </>
                )}
              </ul>
              <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium">
                {displayedData && (
                  <>
                    <li className="col-span-4 text-left flex text-[17px]">
                      {' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 17l5-5-5-5v10z" />
                      </svg>
                      {displayedData.datas.li3.title}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li3.col1}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li3.col2}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li3.col3}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li3.col4}
                    </li>
                  </>
                )}
              </ul>
              <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium text-center items-center">
                {displayedData && (
                  <>
                    <li className="col-span-4 text-left flex text-[17px]">
                      {' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 17l5-5-5-5v10z" />
                      </svg>
                      {displayedData.datas.li4.title}
                    </li>
                    <li className="col-span-2 mx-auto grid items-center mx-auto">
                      {displayedData.datas.li4.col1}
                      {/* {displayedData.datas.li4.shouldDisplaySVG && (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                                        <path fill="#00a876" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                    </svg>
                                )} */}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li4.col2}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li4.col3}
                      {/* <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                                    <path fill="#00a876" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                </svg> */}
                    </li>
                    <li className="col-span-2 mx-auto">
                      {displayedData.datas.li4.col4}
                      {/* <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                                    <path fill="#00a876" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                </svg> */}
                    </li>
                  </>
                )}
              </ul>
              <div className="parentspart">
                <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium">
                  <li className="col-span-4 text-left flex text-[17px]">
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                    "As Seen on" Trust Badge
                  </li>
                  <li className="col-span-2 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      width="30"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#00a876"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      />
                    </svg>
                  </li>
                  <li className="col-span-2 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      width="30"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#ff0000"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                      ></path>
                    </svg>
                  </li>
                  <li className="col-span-2 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      width="30"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#00a876"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      />
                    </svg>
                  </li>
                  <li className="col-span-2 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      width="30"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#00a876"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      />
                    </svg>
                  </li>
                </ul>
                <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium">
                  <li className="col-span-4 text-left flex text-[17px]">
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                    Published In
                  </li>
                  <li className="col-span-2 mx-auto">5 days</li>
                  <li className="col-span-2 mx-auto">5 days</li>
                  <li className="col-span-2 mx-auto">5 days</li>
                  <li className="col-span-2 mx-auto">5 days</li>
                </ul>
              </div>
              {/* <ul className='grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium'>
                                <li className='col-span-4 text-left flex text-[17px]'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 17l5-5-5-5v10z" />
                                </svg>"As Seen on" Trust Badge</li>
                                <li className='col-span-2 mx-auto'><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#00a876" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg></li>
                                <li className='col-span-2 mx-auto'><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#ff0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg></li>
                                <li className='col-span-2 mx-auto'><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#00a876" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg></li>
                                <li className='col-span-2 mx-auto'><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#00a876" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg></li>
                            </ul>
                            <ul className='grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium'>
                                <li className='col-span-4 text-left flex text-[17px]'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 17l5-5-5-5v10z" />
                                </svg>Published In</li>
                                <li className='col-span-2 mx-auto'>5 days</li>
                                <li className='col-span-2 mx-auto'>5 days</li>
                                <li className='col-span-2 mx-auto'>5 days</li>
                                <li className='col-span-2 mx-auto'>5 days</li>
                            </ul> */}
            </>
          ) : (
            <>
              <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium">
                <li className="col-span-4 text-left flex text-[17px]">
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Total News Outlets
                </li>
                <li className="col-span-2 mx-auto">250</li>
                <li className="col-span-2 mx-auto">300</li>
                <li className="col-span-2 mx-auto">6</li>
                <li className="col-span-2 mx-auto">400</li>
              </ul>
              <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium">
                <li className="col-span-4 text-left flex text-[17px]">
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Max Domain Authority
                </li>
                <li className="col-span-2 mx-auto">67</li>
                <li className="col-span-2 mx-auto">89</li>
                <li className="col-span-2 mx-auto">94</li>
                <li className="col-span-2 mx-auto">94</li>
              </ul>
              <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium">
                <li className="col-span-4 text-left flex text-[17px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Monthly Visitors
                </li>
                <li className="col-span-2 mx-auto">3.3m</li>
                <li className="col-span-2 mx-auto">28.1m</li>
                <li className="col-span-2 mx-auto">218.4m</li>
                <li className="col-span-2 mx-auto">228.3</li>
              </ul>
              <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium text-center items-center">
                <li className="col-span-4 text-left flex text-[17px]">
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Accepts Most Topics
                </li>
                <li className="col-span-2 mx-auto grid items-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                </li>
                <li className="col-span-2 mx-auto grid items-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                </li>
                <li className="col-span-2 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                </li>
                <li className="col-span-2 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                </li>
              </ul>
              <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium">
                <li className="col-span-4 text-left flex text-[17px]">
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                  "As Seen on" Trust Badge
                </li>
                <li className="col-span-2 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                </li>
                <li className="col-span-2 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ff0000"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                    ></path>
                  </svg>
                </li>
                <li className="col-span-2 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                </li>
                <li className="col-span-2 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00a876"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                </li>
              </ul>
              <ul className="grid grid-flow-row grid-cols-12 gap-24 text-xl font-medium">
                <li className="col-span-4 text-left flex text-[17px]">
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                  Published In
                </li>
                <li className="col-span-2 mx-auto">5 days</li>
                <li className="col-span-2 mx-auto">5 days</li>
                <li className="col-span-2 mx-auto">5 days</li>
                <li className="col-span-2 mx-auto">5 days</li>
              </ul>
            </>
          )}

          {/* not changing side */}
          <div className="space-y-7 text-[17px]">
            <h1 className="text-left font-bold">Included Outlets</h1>

            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                {' '}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Indexed on Search
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/google-icon-brandpush.svg"
                    width="25"
                    height="25"
                    alt=""
                  />
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/yahoo-icon-brandpush.svg"
                    width="28"
                    height="28"
                    alt=""
                  />
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/bing-icon-brandpush.svg"
                    width="22"
                    height="22"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                {' '}
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Business Insider
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Business-Insider-With-BrandPush.svg"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                {' '}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Associated Press
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Associated-Press-With-BrandPush.svg"
                    width="25"
                    height="25"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  The Globe And Mail
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/f9dbe44e-bb02-46f8-072d-fb0ad5d69900/public"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                {' '}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Benzinga
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Benzinga-With-BrandPush.svg"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                {' '}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Newsmax
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Newsmax-With-BrandPush.svg"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Street Insider
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Street-Insider-With-Brand-Push.svg"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Asia One
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/aacb5fa2-8d6c-4cfa-d4b6-e8337d30bc00/public"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                {' '}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  FOX 40
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/website-logos/fox40.png"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                {' '}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                  NCN
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/NCN-Publish-Press-Release-BrandPush2.svg"
                    width="50"
                    height="50"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Suncoast News Network
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/42dd62de-1d6e-4a6c-8a3d-2faf51882c00/public"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  openPR
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/56996788-8986-423a-6d6f-32c0361a7300/public"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left justify-between flex">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                  Minyanville
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/Minyanville%20copy-Press-Release-Publishing.svg"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left justify-between flex">
                {' '}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  BarChart
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/560447f7-1628-479c-f6e8-0ccaeaef5a00/public"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between">
                {' '}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                  My Mother Lode{' '}
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/2978a322-df89-4552-291e-b9a242ae9f00/public"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex justify-between ">
                {' '}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  The Chronicle Journal
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/the-chronicle-journal-brandpush-PR-publishing.svg"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24 font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>{' '}
                  Starkville Daily News{' '}
                </div>
                <div className="relative -right-15 flex gap-2">
                  <img
                    src="https://www.brandpush.co/assets/img/news-logos/starkville-daily-news-PR-distribution-by-brandpush.svg"
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="space-y-7 text-[17px]">
            <h1 className="text-left font-bold text-xl">Included Outlets</h1>

            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>
                Acquisitions & Partnerships
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Adult Content
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Aesthetic Surgeries
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Alcohol
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Alternative Medicine / Metaphysical
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Betting & Sports Picks
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Blockchain
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Cryptocurrency (Buying / Trading)
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Dating
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Financial Trading
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Government / Politics / Politicians
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Legal Cases
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Legal Marijuana / CBD
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Live Streaming & Broadcasting
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Music with Explicit Content Labels
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                NFTs / Metaverse
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Negative Press
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Pharmacy / Legal Drugs
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Politics / Political Candidates
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Religion
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Rewards & Play-to-earn
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Scam & Fraud Recovery Services
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Selling Social Media Interactions
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Supplements
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Swimwear / Underwear / Leggings
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Third-Party Companies & People
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Weapons / Guns
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
            <ul className="grid grid-flow-row grid-cols-12 gap-24  font-medium">
              <li className="col-span-4 text-left flex">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 17l5-5-5-5v10z" />
                </svg>{' '}
                Topics not listed above{' '}
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ff0000"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
              <li className="col-span-2 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#00a876"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 text-center justify-between my-3 items-center max-md:hidden">
          <div className="col-span-4"></div>
          <div className="col-span-2 mx-auto font-medium text-[15px] space-y-10">
            <a href="/sample-reports">
              <p className="text-purple-500 my-2">↗Sample Report</p>
            </a>
            <a href="https://www.brandpush.co/order/?network=limited">
              <p className="text-purple-500">Order Now</p>
            </a>
          </div>
          <div className="col-span-2 mx-auto font-medium text-[15px] space-y-10">
            <a href="/sample-reports">
              <p className="text-purple-500 my-2">↗Sample Report</p>
            </a>
            <a href="https://www.brandpush.co/order/?network=limited">
              <p className="text-purple-500">Order Now</p>
            </a>
          </div>
          <div className="col-span-2 mx-auto font-medium text-[15px] space-y-10">
            <a href="/sample-reports">
              <p className="text-purple-500 my-2">↗Sample Report</p>
            </a>
            <a href="https://www.brandpush.co/order/?network=limited">
              <p className="text-purple-500">Order Now</p>
            </a>
          </div>
          <div className="col-span-2 mx-auto font-medium text-[15px] space-y-10">
            <a href="/sample-reports">
              <p className="text-purple-500 my-2">↗Sample Report</p>
            </a>
            <a href="https://www.brandpush.co/order/?network=limited">
              <p className="text-purple-500">Order Now</p>
            </a>
          </div>
        </div>
      </div>
      <section className="mx-20 my-20 max-md:mx-2">
        <div className="md:grid grid-cols-6 gap-5  max-md:space-y-10 max-md:visible">
          <div className="col-span-2 space-y-5 bg-white p-10 rounded-2xl border-gray-300 border-[1px]">
            <h1 className="text-2xl leading-normal font-bold">
              Limited Package
            </h1>
            <p className="text-gray-500 text-[16px] font-[500] leading-8">
              Publish almost any topic, this package provides basic exposure &
              reach.
            </p>
            <div className="flex justify-between gap-40 items-center mx-5 col-span-5">
              <div>
                <p className="text-orange-600">689.1m</p>
                <p>visitors</p>
              </div>
              <div>
                <p className="text-orange-600">689.1m</p>
                <p>visitors</p>
              </div>
            </div>
            <button className="bg-black text-white text-[15px] px-10 py-5 rounded-[50px] w-full">
              Order Now
            </button>
          </div>
          <div className="col-span-2 space-y-4 bg-white p-10 rounded-2xl border-gray-300 border-[1px]">
            <h1 className="text-2xl leading-normal font-bold">
              Popular Package
            </h1>
            <p className="text-gray-500 text-[16px] font-[500] leading-8">
              Great for most brands, includes Fox & Google News, but accepts
              fewer topics.
            </p>
            <div className="flex justify-between gap-40 items-center mx-5 col-span-5">
              <div>
                <p className="text-orange-600">689.1m</p>
                <p>visitors</p>
              </div>
              <div>
                <p className="text-orange-600">689.1m</p>
                <p>visitors</p>
              </div>
            </div>
            <button className="bg-black text-white mt-2 text-[15px] px-10 py-5 rounded-[50px]  w-full">
              {' '}
              Order Now
            </button>
          </div>
          <div className="col-span-2 space-y-5 bg-white p-10 rounded-2xl border-gray-300 border-[1px]">
            <h1 className="text-2xl leading-normal font-bold">
              Authority Package
            </h1>
            <p className="text-gray-500 text-[16px] font-[500] leading-8">
              We support Marketing Agencies and Resellers. Contact us to find
              out how we can provide your clients with industry leading press.
            </p>
            <div className="flex justify-between gap-40 items-center mx-5 col-span-5">
              <div>
                <p className="text-orange-600">689.1m</p>
                <p>visitors</p>
              </div>
              <div>
                <p className="text-orange-600">689.1m</p>
                <p>visitors</p>
              </div>
            </div>
            <button className="bg-black text-white text-[15px] px-10 py-5 rounded-[50px] w-full">
              Order Now
            </button>
          </div>
          <div className="col-span-2 space-y-4 bg-white p-10 rounded-2xl border-gray-300 border-[1px]">
            <h1 className="text-2xl leading-normal font-bold">
              Ultimate Package
            </h1>
            <p className="text-gray-500 text-[16px] font-[500] leading-8">
              Save up to 30% on bulk orders. Our discounts start from just five
              orders.
            </p>
            <div className="flex justify-between gap-40 items-center mx-5 col-span-5">
              <div>
                <p className="text-orange-600">689.1m</p>
                <p>visitors</p>
              </div>
              <div>
                <p className="text-orange-600">689.1m</p>
                <p>visitors</p>
              </div>
            </div>
            <button className="bg-black text-white mt-2 text-[15px] px-10 py-5 rounded-[50px]  w-full">
              Order Now
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
