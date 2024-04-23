import React from 'react'

const Pricing = () => {
    return (
        <section className='grid place-items-center my-20' id="pricing">
            <h1 className='text-6xl leading-normal text-center font-bold'>Grow Your Brand Today</h1>
            <p className='text-slate-400 text-[22px] w-[60%] py-7 font-[400] leading-8 text-center max-md:w-full'>Get featured on <span className='text-sky-600 '>major news sites</span> to drive visitors and<br />  customers to your website, all for <span className="font-semibold text-zinc-700">a one-time payment.</span>
            </p>
            <div className="drop-shadow-2xl bg-white rounded-2xl h-[160vh] max-md:h-[350vh] w-[90vw] p-10 bg-slate-300">
                <div className="grid grid-cols-12 text-[14px]  my-14 gap-5 text-center max-md:block">
                    <div className="col-span-4">
                        <p className='text-2xl font-bold'>Pricing & Packages</p>
                        <p className='text-[17px] mt-2 font-semibold text-slate-400'>One time payment, years <br /> of benefits</p>
                    </div>
                    <div className="col-span-2 ">
                        <p className='text-2xl font-bold'>LIMITED</p>
                        <p className='text-[18px] font-bold text-slate-400  mb-5'>$165 USD</p>
                        <button className='px-6 py-3 text-[17px] font-medium bg-black text-white rounded-[50px]'>Order Now</button>
                    </div>
                    <div className="col-span-2">
                        <p className='text-2xl font-bold'>LIMITED</p>
                        <p className='text-[18px] font-bold text-slate-400  mb-5'>$165 USD</p>
                        <button className='px-6 py-3 text-[17px] font-medium bg-black text-white rounded-[50px]'>Order Now</button>
                    </div>
                    <div className="col-span-2">
                        <p className='text-2xl font-bold'>LIMITED</p>
                        <p className='text-[18px] font-bold text-slate-400  mb-5'>$165 USD</p>
                        <button className='px-6 py-3 text-[17px] font-medium bg-black text-white rounded-[50px]'>Order Now</button>
                    </div>
                    <div className="col-span-2">
                        <p className='text-2xl font-bold'>LIMITED</p>
                        <p className='text-[18px] font-bold text-slate-400  mb-5'>$165 USD</p>
                        <button className='px-6 py-3 text-[17px] font-medium bg-black text-white rounded-[50px]'>Order Now</button>
                    </div>
                </div>
                <div className="grid grid-cols-12 justify-between text-[14px] max-md:block  mt-14 gap-5 bg-white p-5 rounded-2xl text-center  overflow-y-scroll  scrollbar-hidden border-t-2 border-slate-600 h-[70%]">
                    <div className="col-span-4 text-left">
                        <p className='text-[20px] font-semibold my-3'>Writing Packages</p>
                        <nav aria-label="Page navigation example">
                            <ul class="flex items-center -space-x-px h-10 text-base font-semibold">

                                <li>
                                    <a href="#" class="flex items-center justify-center rounded-s-lg px-4 h-10 leading-tight text-gray-500  dark:hover:text-white text-white border border-blue-300 bg-blue-700 hover:bg-blue-100 hover:text-blue-700 ">None</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-blue-900 bg-white border border-blue-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Small</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" class="flex items-center justify-center px-4 h-10 leading-tight text-blue-900 bg-white border border-blue-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Regular</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center rounded-e-lg px-4 h-10 leading-tight text-blue-900 bg-white border border-blue-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Long</a>
                                </li>

                            </ul>
                        </nav>
                        <div className="py-10 text-left space-y-5 ">
                            <p className='text-[20px] font-semibold my-2'>Overview</p>
                            <ul className='space-y-10 text-[16px]'>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p> Total News Outlets</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p> Max Domain Authority</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p> Monthly Visitors</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p> Accepts Most Topics</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>"As Seen on" Trust Badge	</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p> Published In</p>
                                </li>
                            </ul>
                        </div>
                        <div className="py-10 text-left space-y-5 ">
                            <p className='text-[20px] font-semibold my-4'>Included Outlets</p>
                            <ul className='space-y-10 text-[16px] text-slate-600 font-700'>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>  Indexed on Search</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>  Business Insider</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>  Benzinga</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>  Newsmax</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>Street Insider</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>  Asia One</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>   FOX 40</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>NCN</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>Suncoast News Network</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>FOX 43</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p> Minyanville</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>  FOX 28</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>  The Chronicle Journal</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>  My Mother Lode</p>
                                </li>

                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>Starkville Daily News</p>
                                </li>
                            </ul>
                        </div>
                        <div className="py-10 text-left space-y-5 ">
                            <p className='text-[20px] font-semibold my-4'>Accepted topics</p>
                            <ul className='space-y-10 text-[16px]'>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p> Betting & Sports Picks</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>Blockchain</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p> Cryptocurrency (Buying / Trading)</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p>Financial Trading</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p> Legal Marijuana / CBD</p>
                                </li>
                                <li className='flex items-center text-normal text-left font-medium'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    <p> Supplements</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-2 bg-purple-500 text-white text-xl space-y-10 font-bold rounded-2xl p-3">
                        <div className="mt-39">
                            <p></p>
                        </div>
                        <div className="">
                            <p></p>
                        </div>
                        <div className="">
                            <p>250</p>
                        </div>
                        <div className="">
                            <p>67</p>
                        </div>
                        <div className="">
                            <p>3.3m</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>5 days</p>
                        </div>
                        <div className="">
                            <p><span>|-----------|</span></p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>.</p>
                        </div>
                        <div className="">
                            <p>.</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>

                    </div>
                    <div className="col-span-2 text-xl space-y-10 font-bold  p-3">
                        <div className="mt-39">
                            <p></p>
                        </div>
                        <div className="">
                            <p></p>
                        </div>
                        <div className="">
                            <p>300</p>
                        </div>
                        <div className="">
                            <p>89</p>
                        </div>
                        <div className="">
                            <p>28.1m</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>5 days</p>
                        </div>
                        <div className="">
                            <p><span>|-----------|</span></p>
                        </div>
                        <div className="">
                            <p>250</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>.</p>
                        </div>
                        <div className="">
                            <p>.</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>

                    </div>
                    <div className="col-span-2 text-xl space-y-10 font-bold  p-3">
                        <div className="mt-39">
                            <p></p>
                        </div>
                        <div className="">
                            <p></p>
                        </div>
                        <div className="">
                            <p>6</p>
                        </div>
                        <div className="">
                            <p>94</p>
                        </div>
                        <div className="">
                            <p>218.4m</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>5 days</p>
                        </div>
                        <div className="">
                            <p><span>|-----------|</span></p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>.</p>
                        </div>
                        <div className="">
                            <p>.</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>

                    </div>
                    <div className="col-span-2 text-xl space-y-10 font-bold  p-3">
                        <div className="mt-39">
                            <p></p>
                        </div>
                        <div className="">
                            <p></p>
                        </div>
                        <div className="">
                            <p>400</p>
                        </div>
                        <div className="">
                            <p>94</p>
                        </div>
                        <div className="">
                            <p>228.3m</p>
                        </div>
                        <div className="">
                            <p>❌</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>5 days</p>
                        </div>
                        <div className="">
                            <p><span>|-----------|</span></p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>.</p>
                        </div>
                        <div className="">
                            <p>.</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                        <div className="">
                            <p>✅</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 text-center justify-between my-3 items-center max-md:hidden">
                    <div className="col-span-4">
                        
                    </div>
                    <div className="col-span-2 font-medium text-[15px] space-y-10">
                        <a href="/sample-reports"><p className='text-purple-500 my-2'>↗Sample Report</p></a>
                        <a href="https://www.brandpush.co/order/?network=limited">
                            <p className='text-purple-500'>Order Now</p>
                        </a>
                    </div>
                    <div className="col-span-2 font-medium text-[15px] space-y-10">
                        <a href="/sample-reports"><p className='text-purple-500 my-2'>↗Sample Report</p></a>
                        <a href="https://www.brandpush.co/order/?network=limited">
                            <p className='text-purple-500'>Order Now</p>
                        </a>
                    </div>
                    <div className="col-span-2 font-medium text-[15px] space-y-10">
                        <a href="/sample-reports"><p className='text-purple-500 my-2'>↗Sample Report</p></a>
                        <a href="https://www.brandpush.co/order/?network=limited">
                            <p className='text-purple-500'>Order Now</p>
                        </a>
                    </div>
                    <div className="col-span-2 font-medium text-[15px] space-y-10">
                        <a href="/sample-reports"><p className='text-purple-500 my-2'>↗Sample Report</p></a>
                        <a href="https://www.brandpush.co/order/?network=limited">
                            <p className='text-purple-500'>Order Now</p>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section >
    )
}

export default Pricing;