import React from 'react'

const Part = () => {
    return (
        <section className='mx-20 my-20 max-md:mx-2'>
            <div className='grid grid-cols-12 gap-5 max-md:block max-md:space-y-10'>
                <div className="col-span-7 space-y-5 bg-white p-10 rounded-2xl border-gray-300 border-[1px]">
                    <h1 className='text-2xl leading-normal font-bold'>Marketing Agencies & Resellers</h1>
                    <p className='text-gray-500 text-[16px] font-[500] leading-8'>We support Marketing Agencies and Resellers. Contact us to find out how we can provide your clients with industry leading press.</p>
                    <button className='bg-black text-white text-[15px] px-10 py-5 rounded-[50px]'>Contact Us</button>
                </div>
                <div className="col-span-5 space-y-4 bg-white p-10 rounded-2xl border-gray-300 border-[1px]">
                    <h1 className='text-2xl leading-normal font-bold'>Bulk Discounts</h1>
                    <p className='text-gray-500 text-[16px] font-[500] leading-8'>Save up to 30% on bulk orders. Our discounts start from just five orders.</p>
                    <button className='bg-black text-white mt-2 text-[15px] px-10 py-5 rounded-[50px]'>See our Bulk Discount rates</button>
                </div>
            </div>
        </section>
    )
}

export default Part