import React from 'react'
import { IoIosHelpBuoy } from "react-icons/io";
import { BsStack } from "react-icons/bs";



export default function Footer() {
    return (
        <div className='bg-[#2f4858] text-white pl-60 pr-60'>
        
            <div className='flex gap-52 pt-16 pb-16'>
                <div className='flex gap-8'>
                    <div className='text-[#5a8f7b]'>
                        <BsStack className='text-5xl'/>
                    </div>
                    <div>
                        <p className='op text-2xl'>Book Information?</p>
                        <p>Please send us a email at support@gmail.com</p>
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='text-[#5a8f7b] '>
                        <IoIosHelpBuoy className='text-5xl' />
                    </div>
                    <div>
                        <p className='op text-2xl'>Need Help?</p>
                        <p>Please call us at +0123456789</p>
                    </div>
                </div>
            </div>

            <hr />

            <div className='flex justify-between pt-4 pb-4'>
                <p className='op text-2xl'>Bookshelf</p>
                <p>© 2023 All right reserved. Made with love by ♥  ThemeAtelier</p>
            </div>

        </div>
    )
}
