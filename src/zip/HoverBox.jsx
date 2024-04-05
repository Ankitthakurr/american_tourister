import React from 'react'

const HoverBox = ({ arr }) => {
    return (
        <>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className="bg-white flex hoverDiv justify-evenly ">
                {arr.map((item, i) => <ul key={i}>
                    {item.map((elem, j) => <li key={j}>{elem}</li>)}
                </ul>)}
            </div>

        </>
    )
}

export default HoverBox
