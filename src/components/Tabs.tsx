import React, { useEffect, useState } from 'react';
// import './assets/css/tailwind.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { Button, Modal } from 'flowbite-react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const tabs = document.querySelectorAll('.tab');
    const indicator = document.querySelector('.indicator');
    const panels = document.querySelectorAll('.tab-panel');

    indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';
    indicator.style.left =
      tabs[0].getBoundingClientRect().left -
      tabs[0].parentElement.getBoundingClientRect().left +
      'px';

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        const tabTarget = tab.getAttribute('aria-controls');

        indicator.style.width = tab.getBoundingClientRect().width + 'px';
        indicator.style.left =
          tab.getBoundingClientRect().left -
          tab.parentElement.getBoundingClientRect().left +
          'px';

        panels.forEach((panel) => {
          const panelId = panel.getAttribute('id');
          if (tabTarget === panelId) {
            panel.classList.remove('invisible', 'opacity-0');
            panel.classList.add('visible', 'opacity-100');
            setActiveTab(index + 1);
          } else {
            panel.classList.add('invisible', 'opacity-0');
          }
        });
      });
    });
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <div className="mx max-lg:hidden pb-20 grid place-items-center px-8 sm:px-0">
        <div className=" sm:mx-auto grid place-items-center">
          <div>
            <div
              role="tablist"
              aria-label="tabs"
              className="relative  mx-auto h-20 grid grid-cols-4 items-center px-[20px] py-1  rounded-full bg-white border-2 overflow-hidden shadow-2xl shadow-900/20 transition w-[65%]"
            >
              <div className="absolute indicator h-16 my-auto top-0 bottom-0 ease-linear duration-100 left-0 rounded-full bg-[#0587ed] text-white shadow-md"></div>
              <button
                role="tab"
                aria-selected={activeTab === 1 ? 'true' : 'false'}
                aria-controls="panel-1"
                id="tab-1"
                tabIndex="0"
                className={`relative block h-10 px-6 tab rounded-full ${activeTab === 1 ? 'text-white' : 'text-black'
                  }`}
              >
                <span className="">Limited</span>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 2 ? 'true' : 'false'}
                aria-controls="panel-2"
                id="tab-2"
                tabIndex="-1"
                className={`relative block h-10 px-6 tab rounded-full ${activeTab === 2 ? 'text-white' : 'text-black'
                  }`}
              >
                <span className="">Popular</span>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 3 ? 'true' : 'false'}
                aria-controls="panel-3"
                id="tab-3"
                tabIndex="-1"
                className={`relative block h-10 px-6 tab rounded-full ${activeTab === 3 ? 'text-white' : 'text-black'
                  }`}
              >
                <span className="">Authority</span>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 4 ? 'true' : 'false'}
                aria-controls="panel-4"
                id="tab-4"
                tabIndex="-1"
                className={`relative block h-10 px-6 tab rounded-full ${activeTab === 4 ? 'text-white' : 'text-black'
                  }`}
              >
                <span className="">Ultimate</span>
              </button>
            </div>
            <div className="mt-6 w-[100%] relative rounded-3xl bg-purple-50">
              <div
                role="tabpanel"
                id="panel-1"
                className="space-y-10 tab-panel p-16 transition ease-linear duration-300 "
                data-aos="fade-top"
              >
                <div className="grid grid-cols-4 gap-0 list-none text-center place-items-center justify-center px-44">
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                  <li className='text-center space-y-1'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center text-[1.1rem] font-800'>Total Price</p>
                  </li>
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                </div>
                <p className="text-gray-500 font-700">Publish on Fox and Benzinga. Great for most businesses, it accepts fewer  <br />topics but allows more images and links.</p>

                <div className="links grid place-items-center mx-auto">
                  <ul className="flex mx-auto justify-between gap-5 px-14 font-medium text-purple-500">
                    <li>
                      <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Accepted Topics</button>
                      <dialog id="my_modal_3" className="modal w-[75vw] h-[95vh] rounded-2xl drop-shadow-xl p-7 my-auto mx-auto">
                        <div className="modal-box grid place-items-center">
                          <form method="dialog" className="modal-backdrop">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                          </form>
                          <div className="text-left space-y-5 text-[17px] ps-[15%] p-10 font-medium">
                            <h1 className='text-3xl font-bold '>Accepted Topics</h1>
                            <p>We can accept almost all topics except for:</p>
                            <li className="space-y-2 text-gray-500">
                              <li>Adult Content: Explicit media, suggestive language, adult-focused businesses, onlyfans.</li>
                              <li>Price Predictions: Speculating on the price of assets like crypto or stocks.</li>
                              <li>Government: Politics, public figures or politicians, government agencies.</li>
                              <li>Negative Press: Criticizing any person, website, product, or brand.</li>
                            </li>
                            <p>Cryptocurrency is split into three categories:</p>
                            <li className="space-y-2 text-gray-500">
                              <li>Accepted: Metaverse, NFTs, and Blockchain products or services.</li>
                              <li>Limited Package Only: Buying, selling, mining, trading, storing, recovering or earning cryptocurrency/tokens.</li>
                              <li>Not accepted: Speculating cryptocurrencies prices or market opinions.</li>
                            </li>
                            <p>Topics only accepted on our Limited Package:</p>
                            <li className="space-y-2 text-gray-500">
                              <li>Acquisitions & Partnerships</li>
                              <li>Aesthetic Surgeries</li>
                              <li>Alcohol</li>
                              <li>Alternative Medicine / Metaphysical</li>
                              <li>(Psychics, Tarot Cards, Healing Crystals, etc)</li>
                              <li>Betting, Casinos, & Sports Picks</li>
                              <li>Dating</li>
                              <li>Financial Trading (Forex, Options, Binary, etc)</li>
                              <li>Scam & Fraud Recovery Services</li>
                              <li>Live Streaming & Broadcasting</li>
                              <li>Legal Cases</li>
                              <li>Legal Marijuana / CBD</li>
                              <li>Music with Explicit Content Labels</li>
                              <li>Pharmacy / Legal Drugs</li>
                              <li>Religion</li>
                              <li>Rewards & Play-to-earn</li>
                              <li>Selling Social Media Interactions</li>
                              <li>Supplements</li>
                              <li>Swimwear / Underwear / Leggings</li>
                              <li>Third Parties</li>
                              <li>Weapons</li>
                            </li>
                            <p>Topics not listed above are accepted on all publishing packages.</p>
                            <p>Money Back Guarantee: If we cannot publish an article about your business, we will offer you a full refund.</p>
                          </div>
                        </div>
                      </dialog>

                    </li>
                    <li>
                      <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Included Outlets</button>
                      <dialog id="my_modal_2" className="modal w-[86vw] h-[95vh] rounded-2xl drop-shadow-xl p-7 my-auto mx-auto">
                        <div className="modal-box grid place-items-center">
                          <form method="dialog" className="modal-backdrop">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                          </form>
                          <div className="text-left space-y-5 text-[17px] ps-[10%] p-14 font-medium space-y-5">
                            <h1 className='text-[3rem] font-bold text-center'>Popular Package Outlets</h1>
                            <p className='text-[1rem] px-5 font-medium text-center text-gray-500'>We are continually updating our packages and improving them over time. Here are the news sites we are currently partnered with. Click any of the stats listed below to verify them with third parties.</p>
                            <div className="grid place-items-center">
                              <button onClick={() => document.getElementById('my_modal_2').showModal()} className='px-[60px] py-[19px] bg-black font-semibold text-[20px] rounded-[50px] text-white'>🔥SEE ALL INCLUDED OUTLETS</button>
                            </div>


                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-6">
                              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                  <tr>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                      News Site
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                      Domain Authority
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                      Moz Rank
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                      Global Rank
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                      Social Followers
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                      Monthly Readers
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>

                                </tbody>
                              </table>
                            </div>

                          </div>
                        </div>
                      </dialog>

                    </li>
                    <li> <a href="/sample-reports">
                      Sample Report</a> </li>
                    <li>Compare Packages</li>
                  </ul>
                </div>
                <div className="grid grid-cols-auto gap-10 grid-flow-col drop-shadow-2xl max-md:block" data-aos="fade-top">
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Benzinga-With-BrandPush.svg" alt="" className='w-auto pt-5 grid place-items-start' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/website-logos/fox40.png" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/NCN-Publish-Press-Release-BrandPush2.svg" alt="" className='w-20' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/42dd62de-1d6e-4a6c-8a3d-2faf51882c00/public" alt="" className='w-[60%]' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-auto gap-10 grid-flow-col drop-shadow-2xl max-md:block">
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/fox43-logo.png" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/Minyanville%20copy-Press-Release-Publishing.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/the-chronicle-journal-brandpush-PR-publishing.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/brandpush-publish-on-fox28.jpg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-10 grid-flow-col drop-shadow-2xl max-md:block">
                  <div className="bg-slate-100 text-left col-span-3 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/2978a322-df89-4552-291e-b9a242ae9f00/public" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-3 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/starkville-daily-news-PR-distribution-by-brandpush.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#my_modal_2">
                  <button onClick={() => document.getElementById('my_modal_2').showModal()} className='px-[60px] py-[19px] bg-black font-semibold text-[20px] rounded-[50px] my-[50px] text-white'>🔥SEE ALL INCLUDED OUTLETS</button>
                </a>

              </div>
              <div
                role="tabpanel"
                id="panel-2"
                className="absolute space-y-10  top-0 invisible opacity-0 tab-panel p-16 transition ease-linear  duration-300"
                data-aos="fade-top"
              >
                <div className="grid grid-cols-4 gap-0 list-none text-center place-items-center justify-center px-44">
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                  <li className='text-center space-y-1'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center text-[1.1rem] font-800'>Total Price</p>
                  </li>
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                </div>
                <p className="text-gray-500 font-700">Publish on Fox and Benzinga. Great for most businesses, it accepts fewer  <br />topics but allows more images and links.</p>
                <div className="grid grid-cols-auto gap-10 grid-flow-col drop-shadow-2xl" data-aos="fade-top">
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Benzinga-With-BrandPush.svg" alt="" className='w-auto pt-5 grid place-items-start' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/website-logos/fox40.png" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/NCN-Publish-Press-Release-BrandPush2.svg" alt="" className='w-20' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/42dd62de-1d6e-4a6c-8a3d-2faf51882c00/public" alt="" className='w-[60%]' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-auto gap-10 grid-flow-col drop-shadow-2xl">
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/fox43-logo.png" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/Minyanville%20copy-Press-Release-Publishing.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/the-chronicle-journal-brandpush-PR-publishing.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/brandpush-publish-on-fox28.jpg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-10 grid-flow-col drop-shadow-2xl">
                  <div className="bg-slate-100 text-left col-span-3 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/2978a322-df89-4552-291e-b9a242ae9f00/public" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-3 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/starkville-daily-news-PR-distribution-by-brandpush.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#my_modal_2">
                  <button onClick={() => document.getElementById('my_modal_2').showModal()} className='px-[60px] py-[19px] bg-black font-semibold text-[20px] rounded-[50px] my-[50px] text-white'>🔥SEE ALL INCLUDED OUTLETS</button>
                </a>
              </div>
              <div
                role="tabpanel"
                id="panel-3"
                className="absolute space-y-10  top-0 invisible opacity-0 tab-panel p-16 transition ease-linear  duration-300"
                data-aos="fade-top"
              >
                <div className="grid grid-cols-4 gap-0 list-none text-center place-items-center justify-center px-44">
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                  <li className='text-center space-y-1'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center text-[1.1rem] font-800'>Total Price</p>
                  </li>
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                </div>
                <p className="text-gray-500 font-700">Publish on Fox and Benzinga. Great for most businesses, it accepts fewer  <br />topics but allows more images and links.</p>
                <div className="grid grid-cols-auto gap-10 grid-flow-col drop-shadow-2xl" data-aos="fade-top">
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Benzinga-With-BrandPush.svg" alt="" className='w-auto pt-5 grid place-items-start' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/website-logos/fox40.png" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/NCN-Publish-Press-Release-BrandPush2.svg" alt="" className='w-20' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/42dd62de-1d6e-4a6c-8a3d-2faf51882c00/public" alt="" className='w-[60%]' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-auto gap-10 grid-flow-col drop-shadow-2xl">
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/fox43-logo.png" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/Minyanville%20copy-Press-Release-Publishing.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/the-chronicle-journal-brandpush-PR-publishing.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/brandpush-publish-on-fox28.jpg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-10 grid-flow-col drop-shadow-2xl">
                  <div className="bg-slate-100 text-left col-span-3 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/2978a322-df89-4552-291e-b9a242ae9f00/public" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-3 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/starkville-daily-news-PR-distribution-by-brandpush.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#my_modal_2">
                  <button onClick={() => document.getElementById('my_modal_2').showModal()} className='px-[60px] py-[19px] bg-black font-semibold text-[20px] rounded-[50px] my-[50px] text-white'>🔥SEE ALL INCLUDED OUTLETS</button>
                </a>
              </div>
              <div
                role="tabpanel"
                id="panel-4"
                className="absolute space-y-10  top-0 invisible opacity-0 tab-panel p-16 transition ease-linear  duration-300"
                data-aos="fade-top"
              >
                <div className="grid grid-cols-4 gap-0 list-none text-center place-items-center justify-center px-44">
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                  <li className='text-center space-y-1'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center text-[1.1rem] font-800'>Total Price</p>
                  </li>
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                  <li className='text-center'>
                    <h1 className='font-bold text-5xl text-center'>$123</h1>
                    <p className='text-gray-500 text-center'>Total Price</p>
                  </li>
                </div>
                <p className="text-gray-500 font-700">Publish on Fox and Benzinga. Great for most businesses, it accepts fewer  <br />topics but allows more images and links.</p>
                <div className="links grid place-items-center mx-auto">
                  <ul className="flex mx-auto justify-between gap-5 px-14 font-medium text-purple-500">
                    <li>Accepted Topics</li>
                    <li><button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Included Outlets</button>
                      <dialog id="my_modal_2" className="modal w-[86vw] h-[95vh] rounded-2xl drop-shadow-xl p-7 my-auto mx-auto">
                        <div className="modal-box grid place-items-center">
                          <form method="dialog" className="modal-backdrop">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                          </form>
                          <div className="text-left space-y-5 text-[17px] ps-[10%] p-14 font-medium space-y-5">
                            <h1 className='text-[3rem] font-bold text-center'>Popular Package Outlets</h1>
                            <p className='text-[1rem] px-5 font-medium text-center text-gray-500'>We are continually updating our packages and improving them over time. Here are the news sites we are currently partnered with. Click any of the stats listed below to verify them with third parties.</p>
                            <div className="grid place-items-center">
                              <button onClick={() => document.getElementById('my_modal_2').showModal()} className='px-[60px] py-[19px] bg-black font-semibold text-[20px] rounded-[50px] text-white'>🔥SEE ALL INCLUDED OUTLETS</button>
                            </div>


                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-6">
                              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                  <tr>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                      News Site
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                      Domain Authority
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                      Moz Rank
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                      Global Rank
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                      Social Followers
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                      Monthly Readers
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                      Benzinga
                                    </th>
                                    <td className="px-6 py-4">
                                      89
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      6.3
                                    </td>
                                    <td className="px-6 py-4">
                                      8.4k
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                      552k
                                    </td>
                                    <td className="px-6 py-4">
                                      17.6m
                                    </td>
                                  </tr>

                                </tbody>
                              </table>
                            </div>

                          </div>
                        </div>
                      </dialog></li>
                    <li>Sample Report</li>
                    <li>Compare Packages</li>
                  </ul>
                </div>
                <div className="grid grid-cols-auto gap-10 grid-flow-col drop-shadow-2xl" data-aos="fade-top">
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Benzinga-With-BrandPush.svg" alt="" className='w-auto pt-5 grid place-items-start' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/website-logos/fox40.png" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/NCN-Publish-Press-Release-BrandPush2.svg" alt="" className='w-20' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-10 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/42dd62de-1d6e-4a6c-8a3d-2faf51882c00/public" alt="" className='w-[60%]' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-auto gap-10 grid-flow-col drop-shadow-2xl">
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/fox43-logo.png" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/Minyanville%20copy-Press-Release-Publishing.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/the-chronicle-journal-brandpush-PR-publishing.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-2 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/brandpush-publish-on-fox28.jpg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-10 grid-flow-col drop-shadow-2xl">
                  <div className="bg-slate-100 text-left col-span-3 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/2978a322-df89-4552-291e-b9a242ae9f00/public" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 text-left col-span-3 p-7 px-9 space-y-10 border-[1px] border-gray-200 rounded-2xl h-100 w-full">
                    <div className="">
                      <img src="https://www.brandpush.co/assets/img/news-logos/starkville-daily-news-PR-distribution-by-brandpush.svg" alt="" className='w-32' />
                    </div>
                    <div className="flex gap-5 justify-around">
                      <div className="">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                      <div className="border-l-2 px-5 border-gray-900">
                        <p>7.8k</p>
                        <p>visitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#my_modal_2">
                  <button onClick={() => document.getElementById('my_modal_2').showModal()} className='px-[60px] py-[19px] bg-black font-semibold text-[20px] rounded-[50px] my-[50px] text-white'>🔥SEE ALL INCLUDED OUTLETS</button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="hidden mx-3 text-3xl text-center font-bold max-lg:block py-20 space-y-10 ">
        <h1 className="">Choose from four <br /> massive news networks</h1>

        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none w-96 focus:ring-blue-300 my-5 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center flex justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
        </svg>
        </button>


        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-96 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>


        <p className="text-xl font-normal">Publish on Fox and Benzinga. Great for most businesses, it accepts fewer topics but allows more images and links.</p>

        <ul className='flex my-10 justify-evenly mx-auto'>
          <li>
            <h1>$195</h1>
            <p className='text-[17px] font-medium'>PRICE</p>
          </li>
          <li>
            <h1>28.1m</h1>
            <p className='text-[17px] font-medium'> READERS</p>
          </li>
          <li>
            <h1>300</h1>
            <p className='text-[17px] font-medium'>SITES</p>
          </li>
          <li>
            <h1>89</h1>
            <p className='text-[17px] font-medium'>AUTHORITY</p>
          </li>
        </ul>

        <ul className='flex justify-evenly text-[16px] font-semibold text-purple-400'>
          <li><a href="">Topics</a></li>
          <li><a href="">Outlets</a></li>
          <li><a href="">Sample</a></li>
          <li><a href="">Compare</a></li>
        </ul>

        <div className="grid grid-cols-3 place-items-center items-center">
          <img className='w-24' src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Benzinga-With-BrandPush.svg" alt="" />
          <img className='w-24' src="https://www.brandpush.co/assets/img/news-logos/Publish-On-Benzinga-With-BrandPush.svg" alt="" />
          <img className='w-24' src="https://www.brandpush.co/assets/img/news-logos/NCN-Publish-Press-Release-BrandPush2.svg" alt="" />

        </div>
        <div className="grid grid-cols-3 place-items-center items-center">
          <img className='w-24' src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/56996788-8986-423a-6d6f-32c0361a7300/public" alt="" />
          <img className='w-24' src="https://www.brandpush.co/assets/img/news-logos/Minyanville%20copy-Press-Release-Publishing.svg" alt="" />
          <img className='w-24' src="https://www.brandpush.co/assets/img/news-logos/the-chronicle-journal-brandpush-PR-publishing.svg" alt="" />

        </div>
        <div className="grid grid-cols-3 place-items-center items-center">
          <img className='w-24' src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/2978a322-df89-4552-291e-b9a242ae9f00/public" alt="" />
          <img className='w-24' src="https://www.brandpush.co/assets/img/news-logos/starkville-daily-news-PR-distribution-by-brandpush.svg" alt="" />

        </div>
        <button className='px-6 py-3 w-96 text-[17px] font-medium bg-orange-500 text-white rounded-[50px]'>Order Now</button>

      </div>
    </>
  );
};

export default Tabs;