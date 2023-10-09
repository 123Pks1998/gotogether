import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// import { Carousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Gallery = () => {
    return (
        <div className='flex flex-wrap mx-2 my-10'>

            <div className=' md:w-1/3 lg:w-1/3 xl:w-1/3 p-2'>
                <h1 className='capitalize text-lg font-semibold font-serif'>animals</h1>
                <div className=' p-0.5 h-fit rounded-md  mb-2'>

                    <Carousel showArrows={true} infiniteLoop={true} dynamicHeight={false} showIndicators={true} showThumbs={false} className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md inline-flex'>
                        <CarouselItem>
                            <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        </CarouselItem>
                        <CarouselItem >
                            <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        </CarouselItem>

                    </Carousel>
                </div>
            </div>


            {/* <div className=' w-1/3 p-2'>
                <h1 className='capitalize text-lg font-semibold font-serif'>animals</h1>
                <div className=' p-0.5 h-fit rounded-md bg-slate-500 mb-2'>
                    <Carousel showArrows={true} infiniteLoop={true} dynamicHeight={false} showIndicators={true} showThumbs={false} className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md inline-flex'>
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                    </Carousel>
                </div>

            </div>
            <div className=' w-1/3 p-2'>
                <h1 className='capitalize text-lg font-semibold font-serif'>animals</h1>
                <div className=' p-0.5 h-fit rounded-md bg-slate-500 mb-2'>
                    <Carousel showArrows={true} infiniteLoop={true} dynamicHeight={false} showIndicators={true} showThumbs={false} className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md inline-flex'>
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                    </Carousel>
                </div>

            </div>
            <div className=' w-1/3 p-2'>
                <h1 className='capitalize text-lg font-semibold font-serif'>animals</h1>
                <div className=' p-0.5 h-fit rounded-md bg-slate-500 mb-2'>
                    <Carousel showArrows={true} infiniteLoop={true} dynamicHeight={false} showIndicators={true} showThumbs={false} className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md inline-flex'>
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                    </Carousel>
                </div>

            </div>
            <div className=' w-1/3 p-2'>
                <h1 className='capitalize text-lg font-semibold font-serif'>animals</h1>
                <div className=' p-0.5 h-fit rounded-md bg-slate-500 mb-2'>
                    <Carousel showArrows={true} infiniteLoop={true} dynamicHeight={false} showIndicators={true} showThumbs={false} className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md inline-flex'>
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                        <img src="/pks.png" alt="pic" className=' w-full md:h-96 lg:h-96 sm:h-96 h-80 rounded-md object-cover object-center' />
                    </Carousel>
                </div>
            </div> */}
        </div>
    )
}

export default Gallery
