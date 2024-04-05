import React from 'react'
import firstImg from '../assets/GradientFirstImg.webp'
import secondImg from '../assets/GradientSecondImg.webp'
import thirdImg from '../assets/GradientThirdImg.webp'


const GradientDiv = ({ image, text,style }) => {
    return (
        <>
            <div className='flex flex-col items-center  gap-4'>
                <span className="box h-[220px] max-md:h-[30%] max-md:w-[100%] w-[220px] rounded-[100%] z-10 bg-[#d1d3d4]" style={style} >
                    <img className='w-[90%]' src={image} alt="" />
                </span>
                <span className='flex flex-col items-center justify-center'>
                    <strong className='text-[#ffffff]'>{text}</strong>
                    <a href="https://www.americantourister.in/luggage" target='_blank' className='font-bold text-[#ffffff]'>More   &#62; </a></span>
            </div>

        </>
    )
}


const GradientBox = () => {
    return (
        <>
            <div className='gradientBox min-h-[550px] z-0 mt-16 '  >
                <GradientDiv text={"Luggage"} image={firstImg} style={{ marginTop: "64px", backgroundColor: "#ef9500" }} />
                <GradientDiv text={"Backpacks"} image={secondImg} style={{ marginTop: "96px", backgroundColor: "#2383b0" }} />
                <GradientDiv text={"Duffles"} image={thirdImg} style={{ marginTop: "144px", backgroundColor: "#d1d3d4" }} />
            </div>
        </>
    )
}

export default GradientBox


