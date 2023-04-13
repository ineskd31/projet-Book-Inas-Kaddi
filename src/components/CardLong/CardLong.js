import React from 'react'
import { AiFillHeart } from "react-icons/ai";



export default function CardLong({ data }) {

    return (
        <div>
            <p>CARD2</p>

            <div className='flex'>
                <div>
                    <img className='w-full h-full' src={data[0].image_url} />
                </div>
                <div className=''>
                    <p>Book Title</p>
                    <p>Quote</p>
                    <p>By: Author</p>

                    <div className='btnFav text-center opacity-0 mt-8'>
                        <div class="relative inline-flex px-5 py-3 overflow-hidden group bg-[#5a8f7b] items-center gap-2">

                            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0"></span>
                            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#2f4858] opacity-100 group-hover:-translate-x-8"></span>
                            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out">Favorite</span>
                            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out"><AiFillHeart className='text-white text-xl' /></span>
                            <span class="absolute inset-0"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

