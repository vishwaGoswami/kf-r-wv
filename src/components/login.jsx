import logo from '../imgs/logo.png';
import login from '../imgs/login2.png';
import { useState, useEffect, useRef } from 'react';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
// import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function Login_c() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef(null);
    const togglePassword = () => setShowPassword((prev) => !prev);

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required');
        } else if (!password) {
            setError('Password is required');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address');
        } else {
            alert('Login successful');
        }
    };

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        // <div className='flex flex-col md:flex-row justify-center'>
        <div className='relative w-screen h-screen'>
            <img src={login} alt='login' className='w-full h-full object-cover' />

            <motion.div
                className='bg-white w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] absolute right-4 sm:right-8 lg:right-20 h-screen overflow-auto top-0'
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}>
                <img src={logo} alt='login_form' className='w-60 h-25 md:h-25 mx-auto md:mx-auto mt-3' />
                <h4 className='text-center text-xl my-2'>Sign In</h4>
                <h6 className='text-center text-sm my-2 mb-5 text-gray-400'>Welcome to Krishna Fire & Security</h6>
                <form onSubmit={handleSubmit} className='w-3/4 mx-auto flex flex-col justify-center items-start'>
                    <input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ref={emailRef}
                        placeholder='E-mail' className='bg-blue-50  w-full border border-gray-400 rounded-sm h-10 pl-2 focus:outline-none  focus:ring-1 focus:ring-blue-400' /><br />
                    <div className='relative w-10/10'>
                        <input type={showPassword ? "text" : "password"} value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='!bg-blue-50  w-10/10  border-1 border-gray-400 rounded-sm h-10 pl-2 focus:outline-none  focus:ring-1 focus:ring-blue-400' /><button type='button'
                                onClick={togglePassword}
                                className='absolute h-6 w-6 bottom-3 right-2 !bg-blue-50 !outline-none !focus:outline-none !border-none !focus:border-none cursor-pointer'
                            >
                            {showPassword ? (<EyeSlashIcon className="h-5 w-5 !outline-none !focus:outline-none !border-none !focus:border-none" />) : <EyeIcon className="h-5 w-5 !outline-none !focus:outline-none !border-none !focus:border-none" />}
                        </button>
                    </div>
                    <label className="flex items-center space-x-2 my-1 mt-5">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                        <span className="text-gray-700">Remember Me</span>
                    </label>
                    <button type='submit' className=' w-10/10  !bg-blue-900 mt-10 h-10 rounded-sm text-white hover:!bg-blue-600 !outline-none !focus:outline-none !border-none !focus:border-none cursor-pointer'>Sign In</button>
                    <button type='button' onClick={() => navigate('/forgot')} className='w-10/10  !bg-gray-400 mt-5 h-10 rounded-sm text-black hover:!bg-gray-500 !outline-none !focus:outline-none !border-none !focus:border-none cursor-pointer'>Forgot Password?</button>
                    {error && (
                        <p className="text-red-500 text-sm mb-2 flex items-center">{error}</p>
                    )}
                    
                </form>
                <h6 className='text-center text-sm my-2 mb-2 text-gray-400'><i className='fa-regular fa-copyright text-sm my-7 mx-2'></i>2025. ALL RIGHTS RESERVED.</h6>
            </motion.div>
        </div>
        // </div>
    );
}

export default Login_c;