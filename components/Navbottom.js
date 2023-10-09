import React from 'react'
import Link from 'next/link'
const Navbottom = () => {
    return (
        <div className='sticky md:top-12 top-20 bg-slate-300 mt-0.5 md:gap-5 gap-4 text-lg font-medium font-serif flex md:justify-center capitalize w-full h-8  overflow-x-auto p-0.5 rounded-sm'>
            <Link href='/' className='hover:text-red-500'>home</Link>
            <Link href='/page/tourism' className='hover:text-red-500'>tourism</Link>
            <Link href='/page/culture&arts' className='hover:text-red-500'>culture&art</Link>
            <Link href='/page/science&tech' className='hover:text-red-500'>science&tech</Link>
            <Link href='/page/geography&nature' className='hover:text-red-500'>geo&nature</Link>
            <Link href='/page/history' className='hover:text-red-500'>history</Link>
            <Link href='/page/biography' className='hover:text-red-500'>biography</Link>
            <Link href='/page/birds&animal' className='hover:text-red-500'>birds&animals</Link>
            <Link href='/page/instate' className='hover:text-red-500'>india&state</Link>
            <Link href='/page/gallery' className='hover:text-red-500'>gallery</Link>
        </div>
    )
}

export default Navbottom
