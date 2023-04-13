import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import React from 'react'
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setLog } from '@/features/logSlice';




export default function sign() {


    const dispatch = useDispatch()

    const router = useRouter()

    return (
        <div>
            <Nav />

            <div>
                <div className='h-screen flex justify-center p-20 pl-80 pr-80'>
                    <div className='flex flex-col justify-center border rounded-xl p-20 gap-2 w-3/5'>
                        <p className='text-center text-5xl mb-8 font-semibold'>Create Your Account</p>
                        <p className='text-center'>Sign up with social network</p>
                        <div className='flex justify-center gap-3'>
                            <FaFacebookF className='bg-[#5a8f7b] text-white rounded-full w-10 h-10 p-2 hover:bg-[#2f4858] transition duration-200 ease-out hover:ease-in' />
                            <AiOutlineGooglePlus className='bg-[#5a8f7b] text-white rounded-full w-10 h-10 p-2 hover:bg-[#2f4858] transition duration-200 ease-out hover:ease-in' />
                            <FaLinkedinIn className='bg-[#5a8f7b] text-white rounded-full w-10 h-10 p-2 hover:bg-[#2f4858] transition duration-200 ease-out hover:ease-in' />
                        </div>
                        <div className='flex justify-center items-center w-full'>
                            <hr className='w-full' />
                            <p className='ml-3 mr-3 text-gray-400'>OR</p>
                            <hr className='w-full' />
                        </div>
                        <form className='flex flex-col items-center gap-3' onSubmit={(e) => {e.preventDefault() ; dispatch(setLog()); router.push("/")}}>
                            <input type="text" placeholder='Username' className='rounded-xl w-80' />
                            <input type="email" placeholder='Email' className='rounded-xl w-80' />
                            <input type="password" placeholder='Password' className='rounded-xl w-80' />
                            <button type='submit' className='p-2 border text-white w-40 rounded-2xl bg-[#5a8f7b] hover:bg-[#42695a]'>Sign up</button>
                        </form>
                    </div>

                    <div className='text-white flex flex-col justify-center text-center items-center p-20 bg-[#85b9a4] border rounded-xl w-2/5'>
                        <p className='text-5xl mb-8 font-semibold'>Already a Account?</p>
                        <p className='mb-8 text-xl'>Click here to login in your account</p>
                        <Link href={"/login"}>
                            <button type='submit' className='p-2 border text-black w-40 rounded-2xl bg-white hover:bg-gray-200'>Log in</button>
                        </Link>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
