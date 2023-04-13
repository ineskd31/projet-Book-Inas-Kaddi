import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { BiPhoneCall, BiHeart } from "react-icons/bi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiViewList } from "react-icons/hi";
import Link from 'next/link';
import Card from '@/components/Card/Card';
import { useState } from 'react';
import CardLong from '@/components/CardLong/CardLong'
import Footer from '@/components/Footer/Footer';

export default function allBooks({ data }) {

    const [search, setSearch] = useState("");

    return (
        <div>
            <nav className='flex justify-between p-4 shadow-lg pl-10 pr-10'>

                <div className='flex items-center'>
                    <button className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none " type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                        <HiBars3CenterLeft className='text-3xl' />
                    </button>
                    <Link href={"/"}>
                        <p className='text-2xl op'>BOOKSHELF.</p>
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
                        <input value={search} onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder='Search' className='w-full h-14 border-none rounded-lg bg-[#f8f9fa]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold text-xl'>Category</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit cursor-pointer'>All</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit cursor-pointer'>Category</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit cursor-pointer'>Mystery Thriller</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit cursor-pointer'>Fantasy</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit cursor-pointer'>Biography</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit cursor-pointer'>Music</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit cursor-pointer'>Fiction</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit cursor-pointer'>Book Title</p>
                        <p className='hover:text-[#5a8f7b] hover:underline w-fit cursor-pointer'>Inspirational</p>
                    </div>

                    <div>
                        <p className='font-bold text-xl mb-2'>Author</p>
                        <div>
                            <select className='bg-gray-200 rounded-lg pl-1 w-full shadow-lg' name="cars" id="cars">
                                <option value="All">All</option>
                                <option value="Book Description">Book Description</option>
                                <option value="Baran Bo Odar">Baran Bo Odar</option>
                                <option value="Shakib">Shakib</option>
                                <option value="Angelina Aludo">Angelina Aludo</option>
                                <option value="Daniel Diaz">Daniel Diaz</option>
                                <option value="Fahad">Fahad</option>
                            </select>
                        </div>
                    </div>
                </div>

                

                <div className='w-4/5 pt-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <div className='border rounded-lg p-2 hover:text-[#456c5d] hover:bg-[#e9fbf4] hover:border-[#467060] cursor-pointer'>
                                <BsFillGridFill />
                            </div>
                            <div className='border rounded-lg p-2 hover:text-[#456c5d] hover:bg-[#e9fbf4] hover:border-[#467060] cursor-pointer'>
                                <HiViewList />
                            </div>

                        </div>
                        <div>
                            <p className='text-lg'>Books Available</p>
                        </div>

                        <div>
                            <select className='bg-gray-200 rounded-lg pl-1  shadow-lg w-full' name="cars" id="cars">
                                <option value="A-Z">A - Z</option>
                                <option value="Z-A">Z - A</option>
                            </select>
                        </div>


                    </div>
                    
                    <CardLong data={data}/>

                    <div className='flex flex-wrap gap-8 mt-10 justify-center'>
                        {data
                            .filter(item => {
                                return (
                                    search === "" ? item :
                                        item.title ? item.title.toLowerCase().includes(search.toLowerCase()) : ""
                                )
                            })
                            .map((element) => {
                                return (
                                    <Card element={element} />
                                )
                            })}
                    </div>

                </div>
            </main>
            <CardLong data={data}/>

            <Footer/>
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
