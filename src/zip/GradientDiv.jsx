import React from 'react'

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

export default GradientDiv
