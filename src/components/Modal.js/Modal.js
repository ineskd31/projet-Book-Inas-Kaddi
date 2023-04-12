import React from 'react'
import Image from 'next/image'



export default function Modal({visible, onClose}) {

    if (!visible) return null

    return (
        <div className='border border-blue-500 p-5 fixed inset-0 bg-gray-900/40 flex items-center'>

            <div className='border border-red-500 ml-[500px] mr-[500px]'>

                <div className='flex items-center justify-between p-2 bg-slate-100'>
                    <p className='op font-bold text-xl  '>TITRE</p>
                    <button onClick={onClose} className='pl-2 pr-2 border border-[#5a8f7b] rounded-full  hover:bg-[#b0d7c8]'>X</button>
                </div>

                <div className='flex p-10 bg-white'>
                    <div className='shadow-xl h-fit'>
                        <Image src={"/test-book.jpg"} width={300} height={300} />
                    </div>
                    <div className='w-3/4 pl-5 pr-5 pb-4'>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, non fuga labore temporibus eum recusandae aliquam odio quia vel perferendis voluptatibus rerum aliquid sapiente porro doloribus quae natus quaerat sed. Molestiae quae magni, beatae ea repellendus hic omnis culpa cum quaerat nulla vero numquam placeat facere amet accusantium blanditiis odit eaque nisi aperiam est? Dignissimos, obcaecati ex. Corporis eligendi laboriosam soluta facere suscipit at! Totam quam eos fuga hic, tempora sed quas repudiandae consectetur possimus enim amet vel cum obcaecati quis deserunt velit! Consectetur omnis, asperiores aperiam dolor architecto similique blanditiis sapiente earum odit doloribus itaque deleniti obcaecati quam ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione natus mollitia, voluptates, ab assumenda molestias expedita voluptatibus itaque saepe explicabo consequatur. Eos id, blanditiis, laudantium ut aliquam nam deserunt asperiores quidem maxime dolorem praesentium, repellendus a corrupti unde impedit nisi molestias ipsa omnis iure consequuntur magnam dolor dolore distinctio. Dolorem?</p>

                        <br />

                        <p>Author: </p>
                        <p>Language: </p>
                        <p>Pages: </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
