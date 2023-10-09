import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div >
            <h1 className='w-full text-lg font-serif font-semibold capitalize my-10'>admin panel</h1>
            <div className='w-fit bg-slate-300 mt-0.5 md:gap-5 gap-4 text-xl font-semibold font-serif flex md:justify-center capitalize  text-center items-center  h-12  overflow-x-auto p-2  rounded-sm'>
                <Link href='/admin/home' className='hover:text-red-500'>home</Link>
                <Link href='/admin/tcbg' className='hover:text-red-500'>tcbg</Link>
                <Link href='/admin/science&t' className='hover:text-red-500'>science&tech</Link>
                <Link href='/admin/hist' className='hover:text-red-500'>history</Link>
                <Link href='/admin/bio' className='hover:text-red-500'>biography</Link>
                <Link href='/admin/state' className='hover:text-red-500'>india&state</Link>
                <Link href='/admin/gallery' className='hover:text-red-500'>gallery</Link>
                <Link href='/admin/video' className='hover:text-red-500'>video</Link>
            </div>
            <div className='mb-52'>
            </div>
        </div>
    )
}

export default Header
