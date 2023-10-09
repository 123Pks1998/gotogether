import React from 'react'

const Biography = () => {
    return (
        <div className=' flex p-4 w-full'>
            <div className='w-full font-semibold capitalize font-serif'>
                <div className='md:flex lg:flex xl:flex sm:flex w-full justify-between  '>
                    <div className='md:w-1/4 lg:w-1/4 xl:w-1/4 sm:w-1/4  rounded-md '>
                        <img src="/pks.png" alt="" className='rounded-md' />
                    </div>
                    <div className='md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-2/4 h-fit p-4 gap-3 flex flex-col  rounded-md items-start text-center  md:my-6 lg:my-6 '>

                        <h1>sardar vallabh bhai patel</h1>
                        <h1>freedom fighter</h1>
                        <div className='flex gap-2'>
                            <p>born :-</p>
                            <p>city,</p>
                            <p>state,</p>
                            <p>country,</p>
                            <p>date</p>
                        </div>

                        <div className='flex gap-2'>
                            <p>died :-</p>
                            <p>city,</p>
                            <p>state,</p>
                            <p>{'country'},</p>
                            <p>date</p>
                        </div>

                        <div className='flex gap-2'>
                            <p>date1</p>
                            <p className='italic underline'>to</p>
                            <p>date2</p>
                        </div>
                    </div>
                </div>
                <div className='my-4'>
                    <h1 className='my-2 underline  text-xl'>about</h1>
                    <p>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.</p>

                </div>
            </div>

        </div>
    )
}

export default Biography
