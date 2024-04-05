import React from 'react'
import image from '../assets/ImageContainer.webp'
const ImageContainer = () => {
    return (
        <>
            <div className="flex w-full justify-center items-center">
                <a href="https://www.americantourister.in/brand-story" target='_blank'>  <img className='h-full w-[95%] m-auto' src={image} /></a>
            </div>
        </>
    )
}

export default ImageContainer
