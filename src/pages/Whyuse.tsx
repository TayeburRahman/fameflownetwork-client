import React from 'react'

const Whyuse = () => {
    return (
        <div className='mx-20 p-10 grid place-items-center max-md:mx-2'>
            <h1 className='text-5xl text-center font-bold'>Why use Brand Push?</h1>
            <p className='text-gray-500 text-[21px] py-7 font-[400] leading-8 w-[70%] text-center max-md:w-full'>With years of experience and over 10,000 published news stories, you can expect the best results publishing with us.</p>
            <div className="grid grid-cols-3 gap-20 place-items-center my-24 space-y-5 max-md:block max-md:space-y-5">
                <div className='flex gap-2'>
                    <div>
                        <p className='text-4xl'>🔍</p>
                        {/* <img src="https://www.brandpush.co/assets/img/brandpush-seo-experts.png" alt="" /> */}
                    </div>
                    <div >
                        <h1 className='text-2xl font-bold'>SEO Experts</h1>
                        <p className='my-2 text-[16px] text-gray-400 font-[500]'>Our stories often outrank your competition.</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <p className='text-4xl'>🔍</p>
                        {/* <img src="https://www.brandpush.co/assets/img/brandpush-seo-experts.png" alt="" /> */}
                    </div>
                    <div >
                        <h1 className='text-2xl font-bold'>Experienced Writers</h1>
                        <p className='my-2 text-[16px] text-gray-400 font-[500]'>We write news stories that drive interest and sales.</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <p className='text-4xl'>🔍</p>
                        {/* <img src="https://www.brandpush.co/assets/img/brandpush-seo-experts.png" alt="" /> */}
                    </div>
                    <div >
                        <h1 className='text-2xl font-bold'>Helpful Support</h1>
                        <p className='my-2 text-[16px] text-gray-400 font-[500]'>50+ Support Guides and Live Chat support.</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <p className='text-4xl'>🔍</p>
                        {/* <img src="https://www.brandpush.co/assets/img/brandpush-seo-experts.png" alt="" /> */}
                    </div>
                    <div >
                        <h1 className='text-2xl font-bold'>
                            "As Seen On" Trust Badge</h1>
                        <p className='my-2 text-[16px] text-gray-400 font-[500]'>Build trust and credibility on your website.</p>
                        <a href="/" className='font-semibold text-purple-500 my-5'>➡ Learn More</a>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <p className='text-4xl'>🔍</p>
                        {/* <img src="https://www.brandpush.co/assets/img/brandpush-seo-experts.png" alt="" /> */}
                    </div>
                    <div >
                        <h1 className='text-2xl font-bold'>Industry Leading Reports</h1>
                        <p className='my-2 text-[16px] text-gray-400 font-[500]'>Our stories often outrank your competition.</p>
                        <a href="/" className='font-semibold text-purple-500 my-5'>➡  Sample Report</a>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <p className='text-4xl'>🔍</p>
                        {/* <img src="https://www.brandpush.co/assets/img/brandpush-seo-experts.png" alt="" /> */}
                    </div>
                    <div >
                        <h1 className='text-2xl font-bold'>Easy Ordering</h1>
                        <p className='my-2 text-[16px] text-gray-400 font-[500]'>No account required, takes only 2 minutes.</p>
                        <a href="/" className='font-semibold text-purple-500 my-5'>➡  Order Now</a>
                    </div>
                </div>

            </div>
            <a href="#packages">
            <button className='px-24 py-6 bg-black text-white rounded-[50px] text-[17px] font-semibold'>🚀CLICK HERE TO SEE OUR PACKAGES</button>
            </a>
        </div>
    )
}

export default Whyuse