import React from 'react'

const Gallery = () => {
    return (
        <div>
            <p className='capitalize text-lg mx-4 my-4 font-serif font-semibold'>gallery</p>
            <div className='flex flex-col md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-2/4 my-4 mx-4 rounded-xl bg-slate-500 p-8 gap-2 font-serif'>
                <input type="text" name="category" placeholder='category' className='text-base capitalize px-2 py-0.5 rounded-md' />
                <input type="file" name="pImage" placeholder='image' className='w-52 cursor-pointer text-base rounded-md' />
                <input type="file" name="pImage" placeholder='image' className='w-52 cursor-pointer text-base rounded-md' />
                <input type="file" name="pImage" placeholder='image' className='w-52 cursor-pointer text-base rounded-md' />
                <input type="file" name="pImage" placeholder='image' className='w-52 cursor-pointer text-base rounded-md' />
                <input type="file" name="pImage" placeholder='image' className='w-52 cursor-pointer text-base rounded-md' />

                <div className='w-full my-4 flex justify-center'>
                    <button className='capitalize  bg-red-400 rounded-md py-0.5 px-4 font-serif font-semibold text-base text-center'>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Gallery
