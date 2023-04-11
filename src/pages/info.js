import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import React from 'react'
import Image from 'next/image'




export default function info() {
    return (
        <div>
            <Nav />

            <div className='flex gap-8 pl-[500px] pr-[500px] mt-20 mb-20'>
                <div className='p-2 w-1/4 shadow-gray-500 shadow-2xl h-fit border'>
                    <Image src={"/test-book.jpg"} width={300} height={400}/>
                </div>

                <div className='w-3/4'>
                    <p className='op text-4xl font-bold'>TITLE OF THE BOOK</p>
                    <p className='mb-10'>AUTHOR </p>
                    <p className='op text-xl font-semibold'>DESCRIPTION</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat porro similique omnis eius quaerat fugit vero sed! Sed consectetur, alias incidunt eos tenetur sapiente qui, facilis ducimus dolor adipisci neque minima repellat. Harum est, odit aperiam, unde natus dignissimos enim aut asperiores velit explicabo quos in. Commodi soluta laudantium quo blanditiis dignissimos hic quae saepe culpa cum, sunt consequuntur. Nostrum debitis aliquam inventore quibusdam quaerat adipisci fugiat omnis. Laborum expedita repudiandae ducimus eos porro dolor debitis, quos magni est, nesciunt mollitia facilis illum saepe, odio non laudantium natus odit iusto minus corrupti eaque quidem molestias perspiciatis. Incidunt harum maiores, voluptatibus tempora quia itaque pariatur velit. Accusamus alias, nulla aperiam voluptates ad maiores repellat ex incidunt neque omnis illum porro ipsam consequatur harum animi. Nam temporibus dicta vitae esse maiores! Dignissimos accusantium cum quidem eaque ipsam porro veniam inventore qui odio fugiat magni rerum perspiciatis optio nisi recusandae, unde quae nam voluptate voluptatem architecto minima ut. Quas exercitationem doloremque quaerat eveniet? </p>

                    <p>Product Details</p>
                    p*

                </div>

            </div>

            <Footer />
        </div>
    )
}
