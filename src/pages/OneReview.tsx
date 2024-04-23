import React from 'react'

const OneReview = () => {
  return (
    <div className='bg-green grid place-items-center py-10 max-md:py-2'>
        <div className='w-[70%] bg-white rounded-2xl grid grid-cols-4 p-10 max-md:block max-md:w-[90%]'>
            <div className='col-span-1 max-md:grid max-md:place-items-center'>
                <img src="https://www.brandpush.co/assets/img/reviews/3MKTNLO1TK.jpg" alt="" srcset="" className='w-fit rounded-[50%] max-md:w-[50%]' />
            </div>
            <div className='col-span-3 space-y-5'>
                <img src="https://www.brandpush.co/assets/img/TrustPilot-Logo.svg" className='w-[20%]' alt="" />
                <p className='font-semibold leading-relaxed text-gray-500 max-md:text-[12px]'>"Over 100% increase in sales after getting the credibility badge. The new people I invite using a few advert medium end up buying a product or subscribing for our Saas."</p>
                <p className='text-blue font-semibold text-blue-400'>James Malla</p>
            </div>
        </div>
    </div>
  )
}

export default OneReview