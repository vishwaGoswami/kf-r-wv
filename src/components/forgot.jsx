import logo from '../imgs/logo.png';
import login from '../imgs/login2.png';
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

function Forgot_c() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef(null);

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address');
        } else {
            alert('Sent recent link');
        }
    };

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        <div className='relative w-screen h-screen'>
            <img src={login} alt='login' className='w-full h-full object-cover' />
            
            <motion.div
                className='bg-white w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] absolute right-4 sm:right-8 lg:right-20 top-0 h-screen overflow-auto'
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}>
                <img src={logo} alt='login_form' className='w-60 h-25 mx-auto mt-3' />
                <h4 className='text-center text-xl my-2'>Sign In</h4>
                <h6 className='text-center text-sm my-2 mb-20 text-gray-400'>Welcome to Krishna Fire & Security</h6>
                <form onSubmit={handleSubmit} className='w-3/4 mx-auto flex flex-col justify-center items-start'>
                    <input type='text' value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder='E-mail'
                        ref={emailRef}
                        className='bg-blue-50 my-1 w-10/10  border-1 border-gray-400 rounded-sm h-10 pl-2 focus:outline-none  focus:ring-1 focus:ring-blue-400' /><br />
                    <button className=' w-10/10  !bg-blue-900 hover:!bg-blue-600 my-4 h-10 rounded-sm text-white !outline-none !focus:outline-none !border-none !focus:border-none cursor-pointer'>Send Reset Link</button>
                    {error && (
                        <p className="text-red-500 text-sm mb-2 flex items-center">{error}</p>
                    )}
                </form>
                <div className='flex justify-center'>
                <h6 className='text-center text-sm  text-gray-400 absolute'><i className='fa-regular fa-copyright text-sm my-7 mx-2'></i>2025. ALL RIGHTS RESERVED.</h6></div>
                </motion.div>
        </div>
    );
}

export default Forgot_c;