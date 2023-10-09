import React from 'react'

const Video = () => {
    return (
        <div className='font-serif  capitalize my-4'>
            <div className='flex justify-around font-semibold text-lg'>
                <p className='capitalize text-lg mx-4 my-4 font-serif font-semibold'>video</p>
            </div>

            <div className='flex flex-col md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-2/4 my-4 mx-4 rounded-xl bg-slate-500 p-8 gap-2 '>
                <p>video</p>
                <input type="file" name="pImage" placeholder='image' className='w-60 cursor-pointer  text-lg rounded-md' />
                <p>category</p>
                <input type="text" name="category" placeholder='category' className='text-base px-2 py-0.5 rounded-md' />

                <div className='w-full my-4 flex justify-center'>
                    <button className='capitalize  bg-red-400 rounded-md py-0.5 px-4 font-serif font-semibold text-lg text-center'>submit</button>
                </div>
            </div>

        </div>
    )
}

export default Video
