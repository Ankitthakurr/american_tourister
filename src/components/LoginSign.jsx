import React from 'react'

const LoginSign = () => {
    return (
        <div className='flex justify-evenly items-center h-[48vh] w-[70%] m-auto my-9 max-md:flex-col gap-4'>
            <div className="flex flex-col justify-center items-start w-full gap-4 px-3 border-r-2 max-md:border-r-0 max-md:border-b-2 pb-3">
                <span> <h3 className='text-3xl font-bold max-md:text-center max-md:text-2xl text-gray-700'>Sign In</h3>
                    <small className='font-light'>Existing Customer</small></span>
                <form className='flex  flex-col justify-center items-start gap-2 w-full signForm'>
                    <input required type="email" placeholder='E-Mail Address' />
                    <input required type="password" placeholder='Password' />
                    <span> <small>Login With Email</small> </span>
                    <button type='submit' className='text-lg px-20 font-bold btnLogin max-sm:text-lg  my-1'>LogIn</button>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 w-full ">
                <h3 className='text-3xl font-bold max-md:text-center max-md:text-2xl text-gray-700'>New Customer?</h3>
                <button className='text-lg px-20 font-bold btnLogin max-sm:text-lg my-1'>Sign up</button>
            </div>
        </div>
    )
}

export default LoginSign



