import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { BiPhoneCall, BiHeart } from "react-icons/bi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiViewList } from "react-icons/hi";
import Link from 'next/link';
import Card from '@/components/Card/Card';
import { useState, useEffect } from 'react';
import CardLong from '@/components/CardLong/CardLong'
import Footer from '@/components/Footer/Footer';
import { FiChevronDown } from "react-icons/fi";
import styles from "../styles/AllBooks.module.css"

export default function allBooks({ data }) {

    const [search, setSearch] = useState("");

    const [format, setFormat] = useState(true);

    const [alpha, setAlpha] = useState(true);

    const [displayDropOrder, setDisplayDropOrder] = useState(false);

    const [orderSelected, setOrderSelected] = useState("a - z");

    function ordre(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    }

    function nordre(a, b) {
        if (a.title < b.title) {
            return 1;
        }
        if (a.title > b.title) {
            return -1;
        }
        return 0;
    }

    if (alpha) {
        data.sort(ordre);
    } else {
        data.sort(nordre);
    }

    const [catego, setCatego] = useState("All");

    const categoriesTab = [
        "All",
        "Animals",
        "Biography",
        "Classics",
        "Fantasy",
        "Fiction",
        "Historical",
        "Horror",
        "Inspirational",
        "Paranormal",
        "Romance",
        "Science Fiction",
        "War",
        "Young Adult"
    ];


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
                        {categoriesTab.map((element) => {
                            return (
                                <p onClick={() => { setCatego(element) }} className='hover:text-[#5a8f7b] hover:underline w-fit cursor-pointer'>{element}</p>
                            )
                        })}
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
                            <div onClick={() => { setFormat(true) }} className='border rounded-lg p-2 hover:text-[#456c5d] hover:bg-[#e9fbf4] hover:border-[#467060] cursor-pointer'>
                                <BsFillGridFill />
                            </div>
                            <div onClick={() => { setFormat(false) }} className='border rounded-lg p-2 hover:text-[#456c5d] hover:bg-[#e9fbf4] hover:border-[#467060] cursor-pointer'>
                                <HiViewList />
                            </div>

                        </div>
                        <div>
                            <p className='text-lg'>{data.filter(book => {
                                    return (
                                        search === "" ? book :
                                            book.title ?
                                                book.title.toLowerCase().includes(search.toLowerCase())
                                                : ""
                                    )
                                }).length} &nbsp; Books Available</p>
                        </div>


                        <div>
                            <div className={styles.rightTop}>
                                <p onClick={() => { setDisplayDropOrder(true) }}>{orderSelected}</p>
                                <FiChevronDown />

                                <div className={displayDropOrder === false ? `${styles.dropOrderContent} ${styles.dNone}` : `${styles.dropOrderContent} ${styles.dBlock}`}>
                                    <p className={orderSelected == "a - z" ? `${styles.dropAuthPActive}` : ""} onClick={() => { setOrderSelected("a - z"); setAlpha(true); setDisplayDropOrder(false); }}>(a - z)</p>
                                    <p className={orderSelected == "z - a" ? `${styles.dropAuthPActive}` : ""} onClick={() => { setOrderSelected("z - a"); setAlpha(false); setDisplayDropOrder(false); }}>(z - a)</p>
                                </div>
                            </div>
                            {/* <select className='bg-gray-200 rounded-lg pl-1  shadow-lg w-full' name="cars" id="cars">
                                <option onClick={() => {setAlpha(true)}} value="A-Z">A - Z</option>
                                <option onClick={() => {setAlpha(false)}} value="Z-A">Z - A</option>
                            </select> */}
                        </div>


                    </div>


                    <div className='flex flex-wrap gap-8 mt-10 justify-center mb-10'>
                        {catego == "All" ?
                            data
                                .filter(book => {
                                    return (
                                        search === "" ? book :
                                            book.title ?
                                                book.title.toLowerCase().includes(search.toLowerCase())
                                                : ""
                                    )
                                })
                                .map((element) => {
                                    return (
                                        format === true ?
                                            <Card element={element} />
                                            : <CardLong element={element} />
                                    )
                                })

                            :

                            data
                                .filter((item) => {
                                    return (
                                        item.genres ?
                                            item.genres.includes(catego)
                                            : ""
                                    )
                                })
                                .filter(item => {
                                    return (
                                        search === "" ? item :
                                            item.title ?
                                                item.title.toLowerCase().includes(search.toLowerCase())
                                                : ""
                                    )
                                })
                                .map((element) => {
                                    return (
                                        format === true ?
                                            <Card element={element} />
                                            : <CardLong element={element} />
                                    )
                                })}
                    </div>

                </div>
            </main>

            <Footer />
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
