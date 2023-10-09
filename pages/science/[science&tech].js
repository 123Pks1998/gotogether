import React from 'react'

const Science = () => {
    return (
        <div>
            <div className=' flex p-4 w-full'>
                <div className='w-full font-semibold capitalize font-serif'>
                    <div className='md:flex lg:flex xl:flex sm:flex w-full md:justify-between lg:justify-between xl:justify-between sm:justify-between  '>
                        <div className='md:w-1/4 lg:w-1/4 xl:w-1/4 sm:w-1/4  rounded-md '>
                            <img src="/pks.png" alt="" className='rounded-md' />
                        </div>
                        <div className='md:w-1/4 lg:w-2/4 xl:w-2/4 sm:w-2/4  p-4 gap-3  rounded-md h-40   my-0 md:my-4 lg:my-4 '>

                            <h1 className=''>lotus temple</h1>
                            <p>tech</p>


                        </div>
                    </div>
                    <div className='my-4'>
                        <h1 className='my-2 underline  text-xl'>about</h1>
                        <p>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.</p>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Science
