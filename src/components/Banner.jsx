import React from 'react'
import { AboutData as about } from '../Data.js'
// import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

const Banner = () => {
    return (
        <div className="px-2 md:ml-20 md:px-8 pt-5 pb-10 space-y-4 max-w-5xl md:mt-5 ">
            <h3 className="pb-2 font-mono text-lg normal  text-color1">
                {about.name}
            </h3>
            <h1 className="text-3xl md:text-8xl leading-none text-h font-bold text-color3">
                {about.title1}
            </h1>
            <h1 className="text-3xl md:text-6xl leading-none font-normal text-color2">
                {about.title2}
            </h1>
            <p className="pt-2 text-color2 w-full md:w-[70%] font-medium text-sm font-popi  break-words py-8">
                {about.description}
            </p>
            <button className="px-5 py-[14px] mt-4 text-[14px] border rounded-md border-color1 text-color1 hover:bg-color1 hover:bg-opacity-10 fx font-normal font-popi">
                {about.buttonText}
                {/*
            
                <ChevronDoubleRightIcon className="h-5 ml-2" />
            */}
            </button>
        </div>
    )
}

export default Banner
