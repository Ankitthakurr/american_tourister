import React, { useEffect, useRef, useState } from 'react'
const ImageComponent = ({ obj, change }) => {
    const divref = useRef(null)
    const [check, setCheck] = useState(false)
    useEffect(() => {
        setCheck(divref.current.parentElement.className.includes('active'))
    }, [obj, change])
    return (
        <>
            <div ref={divref} className="relative flex flex-col gap-1 items-start cursor-pointer">
                {check && <div className="absolute flex flex-col justify-around h-3/4 objDiv">
                    <strong className='text-3xl max-md:text-xl max-sm:text-sm'>{obj.rank}</strong>
                    <strong className='text-2xl max-md:text-xl max-sm:text-sm'>{obj.title}
                        <br />
                        <div className='h-2 w-16 rounded-xl bg-white'></div>
                    </strong>

                </div>}
                <img className='' src={obj.image} />
                {check && <a href="https://www.americantourister.in/discover" className='text-lg max-md:text-sm abtn subbtn' target='_blank'>More</a>}
            </div>
        </>
    )
}


export default ImageComponent
