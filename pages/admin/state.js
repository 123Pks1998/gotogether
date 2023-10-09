import React from 'react'

const State = () => {
    return (
        <div>
            <p className='capitalize text-lg mx-4 my-4 font-serif font-semibold'>history</p>
            <div className='flex flex-col md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-2/4 my-4 mx-4 rounded-xl bg-slate-500 p-8 gap-1 font-serif'>
                <p>image</p>
                <input type="file" name="pImage" placeholder='image' className=' w-60 cursor-pointer text-lg rounded-md' />
                <p>state name</p>
                <input type="text" name="pName" placeholder='state name' className='text-base  px-2 py-0.5 rounded-md' />
                <p>capital</p>
                <input type="text" name="capital" placeholder='capital' className='text-base  px-2 py-0.5 rounded-md' />
                <p>district</p>
                <input type="number" name="capital" placeholder='district' className='text-base  px-2 py-0.5 rounded-md' />
                <p>region</p>
                <input type="text" name="region" placeholder='region' className='text-base  px-2 py-0.5 rounded-md' />
                <p>before formation</p>
                <input type="text" name="before" placeholder='before' className='text-base  px-2 py-0.5 rounded-md' />
                <p>formation</p>
                <input type="text" name="formation" placeholder='formation' className='text-base  px-2 py-0.5 rounded-md' />
                <p>festival</p>
                <input type="text" name="slug" placeholder='festival' className='text-base  px-2 py-0.5 rounded-md' />
                <p>slug</p>
                <input type="text" name="slug" placeholder='slug' className='text-base  px-2 py-0.5 rounded-md' />

                <textarea name="" id="" cols="30" rows="10" className='text-lg font-serif font-semibotext-base  px-2 py-0.5 rounded-md'>details</textarea>

                <div className='w-full my-4 flex justify-center'>
                    <button className='capitalize  bg-red-400 rounded-md py-0.5 px-4 font-serif font-semibold text-lg text-center'>submit</button>
                </div>
            </div>

        </div>
    )
}

export default State
