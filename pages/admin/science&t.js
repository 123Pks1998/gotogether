import React from 'react'

const Science = () => {
    return (
        <div>
            <p className='capitalize text-lg mx-4 my-4 font-serif font-semibold'>science & technology</p>
            <div className='flex flex-col md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-2/4 my-4 mx-4 rounded-xl bg-slate-500 p-8 gap-1 font-serif '>
                <p>image</p>
                <input type="file" name="pImage" placeholder='image' className='w-60 cursor-pointer text-lg rounded-md' />
                <p>name</p>
                <input type="text" name="pName" placeholder='name' className='text-base px-2 py-0.5 rounded-md' />
                <p>technology</p>
                <input type="text" name="technology" placeholder='technology' className='text-base px-2 py-0.5 rounded-md' />
                <p>slug</p>
                <input type="text" name="slug" placeholder='slug' className='text-base px-2 py-0.5 rounded-md' />
                <p>details</p>
                <textarea name="" id="" cols="30" rows="10" className='text-lg font-serif font-semibold capitalize px-2 py-0.5 rounded-md'>details</textarea>

                <div className='w-full my-4 flex justify-center'>
                    <button className='capitalize  bg-red-400 rounded-md py-0.5 px-4 font-serif font-semibold text-lg text-center'>submit</button>
                </div>
            </div>

        </div>
    )
}

export default Science
