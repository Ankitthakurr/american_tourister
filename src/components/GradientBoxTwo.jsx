import React, { useState } from 'react'
import One from '../assets/gradientImgOne.webp'
import Two from '../assets/gradientImgTwo.png'
import Three from '../assets/gradientImgThree.png'
import Four from '../assets/gradientImgFour.png'

const GradientBoxTwo = () => {
    const [arr] = useState([
        {
            image: One,
            heading: `International Warranty`,
            title: `American Tourister is a trusted global brand offering high-quality travel products like luggage, backpacks, and accessories. With a presence in 120+ countries, it's a go- to for millions of travelers.`,
        },
        {
            image: Two,
            heading: `Fast Delivery`,
            title: `We deliver online orders to most of India within 5-7 working days via efficient courier services.            `,
        },
        {
            image: Three,
            heading: `Trusted Globally Since 1933`,
            title: `American Tourister innovates with award-winning luggage produced with world-class quality standards.`,
        },
        {
            image: Four,
            heading: `Full Original Store`,
            title: `One-stop shop for exploring the complete American Tourister collection online.`,
        }])
    return (
        <div className='gradientBoxTwo min-h-[550px] flex justify-center items-center max-lg:flex-col'>
            <span className='flex w-[50%] max-lg:w-full'>
                <div className='w-screen flex flex-col justify-start items-center min-w-[150px]'> <img className='h-[65px] max-md:h-[50px]' src={arr[0].image} />
                    <strong className='font-semibold text-[#ffffff]  max-md:text-xs'>{arr[0].heading}</strong>
                    <p className='text-sm font-light text-[#ffffff] text-center max-md:text-xs '>{arr[0].title}</p></div>
                <div className='w-screen flex flex-col justify-start items-center min-w-[150px]' > <img className='h-[65px] max-md:h-[50px]' src={arr[1].image} />
                    <strong className='font-semibold text-[#ffffff] max-md:text-xs'>{arr[1].heading}</strong>
                    <p className='text-sm font-light text-[#ffffff] text-center max-md:text-xs '>{arr[1].title}</p></div>
            </span>
            <span className='flex w-[50%] max-lg:w-full'>
                <div className='w-screen flex flex-col justify-start items-center min-w-[150px]' > <img className='h-[65px] max-md:h-[50px]' src={arr[2].image} />
                    <strong className='font-semibold text-[#ffffff] max-md:text-xs'>{arr[2].heading}</strong>
                    <p className='text-sm font-light text-[#ffffff] text-center max-md:text-xs '>{arr[2].title}</p></div>
                <div className='w-screen flex flex-col justify-start items-center min-w-[150px]' > <img className='h-[65px] max-md:h-[50px]' src={arr[3].image} />
                    <strong className='font-semibold text-[#ffffff] max-md:text-xs'>{arr[3].heading}</strong>
                    <p className='text-sm font-light text-[#ffffff] text-center max-md:text-xs '>{arr[3].title}</p></div>
            </span>
        </div>
    )
}

export default GradientBoxTwo
