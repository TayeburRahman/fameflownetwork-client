import React from 'react'

const Case = () => {
    return (
        <section className='mx-5 p-10 grid place-items-center max-md:p-2 max-md:mx-2 max-md:py-24'>
            <h1 className='text-5xl text-center font-bold max-md:text-3xl'>Case Studies with Proven Results</h1>
            <p className='text-gray-500 text-[17px] py-7 font-[500] leading-8 w-[70%] text-center'>We've delivered results to thousands of clients around the globe. Here are some of their success stories.</p>
            <div className="flex gap-5 max-md:block max-md:space-y-10">
                <div className='p-5 border-gray-300 rounded-2xl space-y-4 border-2 w-[453px] max-md:w-full'>
                    <img src="https://www.brandpush.co/assets/img/Affilite-Bay-Review-Of-BrandPush-SM.jpeg" alt="" className='rounded ' />
                    <h1 className='text-black text-2xl font-bold'>Pinnacle Media Case Study</h1>
                    <h3 className='text-red-500 text-xl font-bold'>🚀Boost in leads and clients</h3>
                    <p className='text-gray-500 font-medium text-[16px] w-[100%] mt-5'>How we helped Pinnacle Media enhance their credibility and expand their outreach.</p>
                    <button className='bg-black text-white rounded-[50px] px-14 py-3'>Play Case Study</button>
                </div>
                <div className='p-5 border-gray-300 rounded-2xl space-y-3 border-2 w-[453px] max-md:w-full'>
                    <img src="https://www.brandpush.co/assets/img/BrandPush-Case-Study-Video-370.png" alt="" className='rounded' />
                    <h1 className='text-black text-2xl font-bold'>Pinnacle Media Case Study</h1>
                    <h3 className='text-red-500 text-xl font-bold'>🚀Boost in leads and clients</h3>
                    <p className='text-gray-500 font-medium text-[16px] w-[100%] mt-5'>How we helped Pinnacle Media enhance their credibility and expand their outreach.</p>
                    <button className='bg-black text-white rounded-[50px] px-14 py-3'>Play Case Study</button>
                </div>
            </div>
        </section>
    )
}

export default Case;