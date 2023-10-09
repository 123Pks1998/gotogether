import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='sticky  top-0 flex md:h-12 h-20 justify-between text-center 
          bg-slate-300 font-serif rounded-sm'>

            <div className='md:flex w-3/4 justify-between items-center '>
                <Link href='/' className='flex gap-2 mx-2'>
                    <img src="/pks.png" alt="pic" className='w-10 h-10 rounded-2xl' />
                    <p className='capitalize italic items-center flex'>go together</p>
                </Link>

                <div className='flex justify-center  md:mt-0 my-1'>
                    <input type="search" placeholder='search here' className='h-8 w-48 border-none md:px-3 px-2 rounded-full outline-none relative text-center' />
                    <span className='text-center flex justify-center items-center text-2xl'>
                        <AiOutlineSearch />
                    </span>
                </div>
            </div>

            <div className='w-1/4 flex justify-end'>
                <div className='text-center items-center justify-center flex  '>
                    <button onClick={toggleNavbar}>
                        {isOpen ? null : < AiOutlineMenu className='mr-2 text-xl text-red-500' />}
                    </button>
                </div>

                {isOpen && (
                    <div className='md:-mt-4 ' >
                        <div className='flex flex-col  bg-slate-300 rounded-md p-2 md:mt-0 mt-4  text-white font-serif capitalize gap-1 md:w-40 w-fit '>
                            <button onClick={toggleNavbar}>
                                {<AiOutlineMenu className='flex float-right justify-end text-xl ' />}
                            </button>
                            <Link href='/' className='hover:text-red-500 md:mt-10 lg:mt-10 mt-14'>home</Link>
                            <Link href='/page/tourism' className='hover:text-red-500'>tourism</Link>
                            <Link href='/page/culture&arts' className='hover:text-red-500'>culture&art</Link>
                            <Link href='/page/science&tech' className='hover:text-red-500'>science&tech</Link>
                            <Link href='/page/geography&nature' className='hover:text-red-500'>geo&nature</Link>
                            <Link href='/page/history' className='hover:text-red-500'>history</Link>
                            <Link href='/page/biography' className='hover:text-red-500'>biography</Link>
                            <Link href='/page/birds&animal' className='hover:text-red-500'>birds&animals</Link>
                            <Link href='/page/instate' className='hover:text-red-500'>india&state</Link>
                            <Link href='/page/gallery' className='hover:text-red-500'>gallery</Link>
                            <Link href='/page/login' className='hover:text-red-500'>login</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
