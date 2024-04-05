import React from 'react'

const GradientThird = () => {
    return (
        <div className='gradientThird gradientBoxTwo min-h-[350px] flex flex-col items-center gap-5 justify-center'>
            <h3 className='text-[white] text-xl text-center p-3'>Get the latest news from American Tourister.</h3>
            <form action="#" className='flex flex-col gap-5 justify-center items-center'>
                <input className='rounded-2xl bg-transparent border-2 py-1 px-9 text-white outline-none max-md:w-[80%]' type="email" required placeholder='*Your email address' />
                <button className='subbtn abtn text-lg max-md:text-sm'>Submit</button>
            </form>
        </div>
    )
}

export default GradientThird
