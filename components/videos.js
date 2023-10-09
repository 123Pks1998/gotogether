import React from 'react'
import Link from 'next/link'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


const Videos = () => {
    return (
        <section>
            <h1 className='flex md:ml-6 lg:ml-6 capitalize text-lg font-serif font-semibold mb-1'>videos</h1>
            <div className='lg:flex xl:flex md:flex gap-4 justify-between md:mx-4 lg:mx-4 xl:mx-4 sm:mx-4'>
                <div className=' md:w-3/4 lg:3/4 xl:3/4 h-full rounded-md'>
                    <Carousel controls={true} className='relative w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md inline-flex ' >
                        <Carousel.Item className='rounded-md h-full object-cover object-center ' >
                            <video src="/cb.mp4" controls={true} width='100%' height='100%' className='rounded-md h-full object-cover object-center'></video>
                        </Carousel.Item>

                        <Carousel.Item className='rounded-md h-full object-cover object-center' >
                            <video src="/f.mp4" controls={true} width='100%' height='100%' className='rounded-md h-full object-cover object-center'></video>
                        </Carousel.Item>


                    </Carousel>
                    {/* <video src="/cb.mp4" controls={true} width='100%' height='100%' className='rounded-md h-96 object-cover object-center'></video> */}

                </div>

                <div className='md:w-2/4 lg:2/4  px-4 rounded-md flex flex-col h-fit bg-neutral-300'>
                    <h1 className='capitalize text-xl font-serif py-1'>related posts</h1>
                    <div className=' flex flex-col text-lg gap-2 h-fit'>
                        <Link href='/details'>some links</Link>
                        <Link href='/details'>some links</Link>
                        <Link href='/details'>some links</Link>
                        <Link href='/details'>some links</Link>
                        <Link href='/details'>some links</Link>
                        <Link href='/details'>some links</Link>
                        <Link href='/details'>some links</Link>
                        <Link href='/details'>some links</Link>
                        <Link href='/details'>some links</Link>
                        <Link href='/details'>some links</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Videos
