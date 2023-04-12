import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import React from 'react'





export default function info({infoTot}) {

    console.log(infoTot);
    return (
        <div>
            <Nav />

            <div className='flex gap-10 pl-[400px] pr-[400px] mt-20 mb-20'>
                <div className='p-2 w-1/4 shadow-gray-500 shadow-2xl h-fit border'>
                    <img src={infoTot.image_url} alt="" />
                </div>

                <div className='w-3/4'>
                    <p className='op text-4xl font-bold'>{infoTot.title}</p>
                    <p>AUTHOR: {infoTot.authors} </p>

                    <br /><br />

                    <p className='op text-xl font-semibold'>DESCRIPTION</p>
                    <p>{infoTot.description}</p>

                    <br />

                    <p className='op text-xl font-semibold '>Product Details</p>
                    <p className='text-gray-500'>Edition: <span className='text-black'>{infoTot.edition} </span> </p>
                    <p className='text-gray-500'>Format: <span className='text-black'>{infoTot.format} </span> </p>
                    <p className='text-gray-500'>Pages: <span className='text-black'> {infoTot.num_pages}</span> </p>
                    <p className='text-gray-500'>Rating: <span className='text-black'>{infoTot.rating} </span> </p>
                    <p className='text-gray-500'>Genre: <span className='text-black'> {infoTot.genres}</span> </p>

                    <br />

                    <p className='op text-xl font-semibold'>Some Quotes</p>
                    <p>{infoTot.Quote1}</p>
                    <p>{infoTot.Quote2}</p>
                    <p>{infoTot.Quote3}</p>

                </div>

            </div>

            <Footer />
        </div>
    )
}



export async function getStaticProps(context) {
    const slug = context.params.info;
    const response = await fetch("https://example-data.draftbit.com/books")
    const data = await response.json()

    const infoTot = data.find(item => item.title === slug)

    return {
        props: {
            infoTot
        }
    }
}


export async function getStaticPaths() {
    const response = await fetch("https://example-data.draftbit.com/books")
    const data = await response.json()


    const paths = data.filter(item => item.title).map((item) => (
        {params: { info: item.title }}
        ))

    return {
        paths,
        fallback: false
    }
}