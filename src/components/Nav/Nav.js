import React from 'react'
import { BsSearch } from "react-icons/bs";
import { BiPhoneCall, BiHeart } from "react-icons/bi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import Link from 'next/link';
import { useState } from 'react';

export default function Nav({setSearch, search}) {



    return (
        <nav className='bg-white flex justify-between p-4 shadow-lg pl-10 pr-10'>

            {/* <!-- drawer init and show --> */}
            <div className="text-center flex items-center">
                <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none " type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                    <HiBars3CenterLeft className='text-3xl' />
                </button>
                <Link href={"/"}>
                    <p className='text-2xl op '>BOOKSHELF.</p>
                </Link>
                
            </div>

            {/* <!-- drawer component --> */}
            <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-80 h-screen overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
                <div className='h-[6%] bg-[#f8f9fa] flex justify-start items-center pl-5 mb-5'>
                    <h5 id="drawer-navigation-label" className="font-semibold text-2xl op">Bookshelf</h5>
                    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 " >
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>
                <div className="py-4 overflow-y-auto pl-5">
                    <div className="space-y-6 font-medium">
                        <p className='text-lg hover:text-[#5a8f7b]'>Bookshelf Minimal</p>
                        <p className='text-lg hover:text-[#5a8f7b]'>Bookshelf Modern</p>
                        <p className='text-lg hover:text-[#5a8f7b]'>Bookshelf Classic</p>
                        <Link href={"/allBooks"}>
                            <p className='text-lg cursor-pointer hover:text-[#5a8f7b] mt-8'>All Books</p>
                        </Link>
                        
                        
                        <div className='pt-[510px]'>
                        <Link href={"/login"}>
                            <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-fit">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                            </p>
                        </Link>
                            
                        </div>
                        <div>
                            <a href="" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-fit">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>




            <div className='flex items-center gap-4 bg-gray-100 p-3 w-[700px] rounded-lg focus-within:border-2 focus-within:border-black '>
                <BsSearch />
                <input value={search} onChange={(e) => {setSearch(e.target.value)}} className='bg-gray-100 pl-2 w-full border-none' type="text" placeholder='Search your book here'/>
            </div>

            <div className='flex items-center gap-8'>
                <div className='flex items-center'>
                    <BiPhoneCall />
                    <p>+01234567890</p>
                </div>

                <div>
                    <BiHeart />
                </div>
            </div>

        </nav>
    )
}
