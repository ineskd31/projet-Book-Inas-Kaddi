import { ajouterFavori } from '@/features/likeSlice';
import Link from 'next/link';
import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { MdZoomOutMap } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';


export default function Card({ element, setModal }) {

    const dispatch = useDispatch()

    const log = useSelector((state) => state.log.value)

    return (
        <div className='fullCard bg-white w-[300px] shadow-lg hover:card-hover transition-all duration-1000 ease-out relative overflow-hidden'>
            {/* IMG */}
            <Link href={`/${element.title ? element.title : ""}`}>
                <div className='w-[300px] h-[400px]'>
                    <img className='w-full h-full' src={element.image_url} />
                </div>
            </Link>


            {/* 2 LOGOS */}
            <div className='flex flex-col gap-2 absolute top-3 right-3  translate-x-12 logo'>
                <div className='bg-[#5a8f7b] w-fit p-2 rounded-full text-white text-xl'>
                    <BsFillBagHeartFill />
                </div>
                <div onClick={() => { setModal(true) }} className='bg-[#5a8f7b] w-fit p-2 rounded-full text-xl text-white'>
                    <MdZoomOutMap />
                </div>


            </div>

            {/* TEXT */}
            <div className='cardBas bg-white hover:card-hover transition-all duration-1000 ease-out'>
                <div className='p-4 flex flex-col gap-5 rounded-lg h-40'>
                    <p className='op text-blue-900 text-xl font-bold'>{element.title}</p>
                    <p>By: <span className='font-bold text-blue-900'>{element.authors}</span></p>
                    <p>{element.Quote1}</p>
                </div>

                {/* BUTTON FAV */}
                <div className='btnFav text-center opacity-0 mt-8'>
                    <div onClick={() => {log === true ? dispatch(ajouterFavori(element))  : alert("You have to log in.")}} class="relative inline-flex px-5 py-3 overflow-hidden group bg-[#5a8f7b] items-center gap-2">

                        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0"></span>
                        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#2f4858] opacity-100 group-hover:-translate-x-8"></span>
                        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out">Favorite</span>
                        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out"><AiFillHeart className='text-white text-xl' /></span>
                        <span class="absolute inset-0"></span>
                    </div>
                </div>
            </div>


        </div>
    )
}
