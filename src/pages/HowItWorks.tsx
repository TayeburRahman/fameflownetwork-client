import React from 'react'

const HowItWorks = () => {
  return (
    <section className='mx-5 p-10 max-md:p-2 max-md:py-10 grid place-items-center '>
      <h1 className='text-5xl text-center font-bold max-md:text-3xl'>Here's How it Works</h1>
      <p className='text-gray-500 text-[17px] py-7 font-[500] leading-8 w-[70%]  text-center max-md:w-full max-md:text-[13px]'>We improve your brand's exposure by writing and publishing a news story on over 200 news sites. Our skilled team can write about any topic!</p>
      <div className="grid grid-cols-3 place-items-center justify-center items-center max-md:block ">
        <div className="text-center space-y-10 w-[70%] max-md:w-full">
          <div className='text-center flex items-center gap-2'>
            <p className='bg-cyan-300 rounded-[50%] text-center py-[10px] px-[20px]'>1</p>
            <p className='text-2xl max-md:text-xl font-bold'>Writing <span className='text-4xl max-md:text-2xl'>.............</span></p>
          </div>
          <img src="https://www.brandpush.co/assets/img/BrandPush-Write-A-Press-Release-295.jpg" alt="" className='rounded-[20px]' />
          <p className="font-semibold text-[17px] text-gray-500 max-md:text-[13px]">Our expert team of human writers craft the perfect news story to promote your brand.</p>

        </div>
        <div className="text-center space-y-10 w-[70%] max-md:w-full">
          <div className='text-center flex items-center gap-2'>
            <p className='bg-cyan-300 rounded-[50%] text-center py-[10px] px-[20px]'>2</p>
            <p className='text-2xl font-bold max-md:text-xl '>Publishing <span className='text-4xl max-md:text-2xl '>.........</span></p>
          </div>
          <img src="https://www.brandpush.co/assets/img/BrandPush-Press-Release-Publishing-295.jpg" alt="" className='rounded-[20px]' />
          <p className="font-semibold text-[17px] text-gray-500 max-md:text-[13px]">We then publish your news story on influential news sites to generate brand interest.

          </p>

        </div>
        <div className="text-center space-y-10 w-[70%] max-md:w-full">
          <div className='text-center flex items-center gap-2'>
            <p className='bg-cyan-300 rounded-[50%] text-center py-[10px] px-[20px]'>1</p>
            <p className='text-2xl font-bold max-md:text-xl '>Get Results <span className='text-4xl max-md:text-2xl '>........</span></p>
          </div>
          <img src="https://www.brandpush.co/assets/img/Brand-Push-Results-And-Report-295-2.png" alt="" className='rounded-[20px]' />
          <p className="font-semibold text-[17px] text-gray-500 max-md:text-[13px]">You'll get a full report with links and "as seen on" trust badge. Enjoy the exposure and interest.</p>

        </div>


      </div>
      <a href="#packages">
        <button className='px-[60px] py-[19px] bg-black font-semibold text-[20px] rounded-[50px] my-[50px] text-white max-md:text-[15px] max-md:p-4'>🔥See Our Packages</button>
      </a>
    </section>
  )
}

export default HowItWorks