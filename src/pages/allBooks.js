import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { BiPhoneCall, BiHeart } from "react-icons/bi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiViewList } from "react-icons/hi";
import Link from 'next/link';
import Card from '@/components/Card/Card';

export default function allBooks({ data }) {
    console.log(data);
    return (
        <div>
            <nav className='flex justify-between p-4 shadow-lg pl-10 pr-10'>

                <div className='flex items-center'>
                    <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none " type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                        <HiBars3CenterLeft className='text-3xl' />
                    </button>
                    <Link href={"/"}>
                        <p className='text-2xl op '>BOOKSHELF.</p>
                    </Link>

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


            <main className='mt-10 pl-20 pr-20 flex gap-5'>
                <div className='w-1/5 flex flex-col gap-5'>
                    <div>
                        <input type="text" placeholder='Search' className='w-full h-14 border-none rounded-lg bg-[#f8f9fa]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold text-xl'>Category</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit'>All</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit'>Category</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit'>Mystery Thriller</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit'>Fantasy</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit'>Biography</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit'>Music</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit'>Fiction</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit'>Book Title</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit'>Inspirational</p>
                    </div>

                    <div>
                        <p className='font-bold text-xl'>Author</p>
                        <div>
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="bg-gray-200 hover:bg-gray-300 focus:outline-none font-medium rounded-lg text-sm w-full h-10 pl-2 text-center inline-flex items-center" type="button">All <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Book Description</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Baran Bo Odar</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shakib</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Angelina Aludo</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Daniel Diaz</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Fahad</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>


                </div>


                <div className='w-4/5 pt-2'>
                    <div className='flex items-center gap-[550px]'>
                        <div className='flex gap-2'>
                            <div className='border rounded-lg p-2 hover:text-[#456c5d] hover:bg-[#e9fbf4] hover:border-[#467060]'>
                                <BsFillGridFill />
                            </div>
                            <div className='border rounded-lg p-2 hover:text-[#456c5d] hover:bg-[#e9fbf4] hover:border-[#467060]'>
                                <HiViewList />
                            </div>

                        </div>
                        <div>
                            <p className='text-lg'>Books Available</p>
                        </div>

                    </div>

                    <div className='flex flex-wrap gap-8 mt-10 justify-center'>
                        {data.map((element) => {
                            return (
                                <Card element={element} />
                            )
                        })}
                    </div>

                </div>
            </main>

        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://example-data.draftbit.com/books")
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}
