import React from 'react'
import Marquee from "react-fast-marquee";
import { marqueeData } from './data/data';

const Featured = () => {
    return (
        <div className='m-24 max-md:m-2'>
            <h2 className="text-2xl font-bold text-center m-8 text-gray-500 max-md:text-xl" style={{ transform: 'translateY(0px)', opacity: 1 }}>Publish Your Story on:</h2>
            <div className="marqueeAutoSlider">
                <Marquee>
                    {marqueeData &&
                        marqueeData?.map(({ id, path }) => {
                            return (
                                <div key={id} className="marqueeGallery__container w-[230px] py-[0.25] overflow-hidden grid place-items-center">
                                    <img src={path} alt="" className='w-40 grid place-items-center px-5' />
                                </div>

                            )
                            console.log("count");
                        })}
                </Marquee>
            </div>
        </div>

    )
}

export default Featured