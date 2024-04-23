import React from 'react'

const MoneyBack = () => {
    return (
        <div className='grid grid-cols-5 gap-4 mx-24 my-20 max-md:block max-md:mx-7'>
            <div className='col-span-2'><img src="https://www.brandpush.co/assets/img/theme/BrandPush-Money-Back-Guarantee2.png" alt="" /></div>
            <div className='space-y-10 col-span-3 my-20'>
                <h1 className='text-5xl font-bold'>Money Back Guarantee</h1>
                <p className='my-2 text-[18px] text-gray-400 font-[500]'>In the event that we cannot publish your news story on the news outlets included in your chosen publishing package, you will be entitled to a full refund.
                </p>
                <a href="/" className='font-semibold text-purple-500 my-5'> Read our full refund policy</a>
            </div>
        </div>
    )
}

export default MoneyBack