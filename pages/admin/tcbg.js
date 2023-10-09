import React from 'react'

const Tcbg = () => {
    return (
        <div className='font-serif  capitalize my-4'>
            <div className='flex justify-around font-semibold text-lg'>
                <p>tourism</p>
                <p>culture&art</p>
                <p>birds&animals</p>
                <p>geo&nature</p>
            </div>

            <div className='flex flex-col md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-2/4 my-4 mx-4 rounded-xl bg-slate-500 p-8 gap-1 '>
                <p>image</p>
                <input type="file" name="pImage" placeholder='image' className='w-60 cursor-pointer bg-neutral-400 text-lg rounded-md' />
                <p>name</p>
                <input type="text" name="pName" placeholder='name' className='text-base px-2 py-0.5 rounded-md' />
                <p>city</p>
                <input type="text" name='city' placeholder='city' className='text-base px-2 py-0.5 rounded-md' />
                <p>state</p>
                <input type="text" name="state" placeholder='state' className='text-base px-2 py-0.5 rounded-md' />
                <p>country</p>
                <input type="text" name="country" placeholder='country' className='text-base px-2 py-0.5 rounded-md' />
                <p>pin code</p>
                <input type="number" name="pinCode" placeholder='pin code' className='text-base px-2 py-0.5 rounded-md' />
                <p>slug</p>
                <input type="text" name="slug" placeholder='slug' className='text-base px-2 py-0.5 rounded-md' />
                <p>category</p>
                <input type="text" name="category" placeholder='category' className='text-base px-2 py-0.5 rounded-md' />
                <p>details</p>
                <textarea name="" id="" cols="30" rows="10" className='text-lg font-serif font-semibold capitalize px-2 py-0.5 rounded-md'>details</textarea>

                <div className='w-full my-4 flex justify-center'>
                    <button className='capitalize  bg-red-400 rounded-md py-0.5 px-4 font-serif font-semibold text-lg text-center'>submit</button>
                </div>
            </div>

        </div>
    )
}

export default Tcbg
