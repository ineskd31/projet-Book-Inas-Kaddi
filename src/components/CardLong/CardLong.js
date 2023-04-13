import React from 'react'
import { AiFillHeart } from "react-icons/ai";



export default function CardLong({ element }) {

    return (
        <div className='w-full'>

            <div className='flex border shadow-lg p-5 rounded-lg'>
                <div className=' pr-20 pl-20'>
                    <img className='w-[250px]' src={element.image_url} />
                </div>
                <div className='flex flex-col gap-2 w-full p-5'>
                    <p className='op text-2xl font-semibold'>{element.title}</p>
                    <p>{element.Quote1}</p>
                    <p>{element.Quote2}</p>
                    <p>By: <span className='font-semibold'>{element.authors}</span> </p>

                    <div className='mt-8'>
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

