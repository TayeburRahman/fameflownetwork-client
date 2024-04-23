import React, { useState } from 'react'
import Tabs from '../components/Tabs';

const Packages = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <section className='p-20 px-10 text-center space-y-10 grid place-items-center' id="packages">
            <h1 className='text-5xl text-center font-bold'>Millions of Readers</h1>
            <p className='text-gray-500 text-[20px] py-2 font-[400] leading-relaxed w-[70%]'>Benefit from the readership and authority our partnered news sites <br/> have built over many years. Our growing list of news sites ranks high on Google, delivering you quality readers and clicks.</p>
            <h1 className='text-3xl text-center font-bold'>Publish on four massive news networks</h1>
            <Tabs />
        </section>
    )
}

export default Packages;