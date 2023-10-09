import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    // const handleChange = (e) => {
    //     if (e.target.name == 'email') {
    //         setEmail(e.target.value)
    //     }
    //     else if (e.target.name == 'password') {
    //         setPassword(e.target.value)
    //     }
    // }

    const submit = () => {

        router.push('/admin/header')
        // if (email == 'pks28697@gmail.com', 'dhiraj123@gmail.com' && password == 'Pks@1998') {
        //     router.push('/admin/header')

        // } else {
        //     console.log('wrong info')
        // }
    }
    return (



        <div >
            <h1 className='font-serif font-semibold my-4 mx-4 text-xl'>Login For Admin </h1>
            <div className='md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-3/4 bg-slate-400 flex flex-col gap-4 rounded-xl mx-4 my-8 p-12'>

                <input type="email" name="email" id="email" placeholder='Email' className='py-1 px-2 font-serif font-medium rounded-xl ' />
                <input type="password" name="password" id="password" placeholder='Password' className='py-1 px-2 font-serif font-medium rounded-xl' />

                <div className='w-full flex justify-center'>

                    <button type="submit" onClick={submit} className=' bg-red-400 rounded-md py-0.5 px-4 font-serif font-semibold text-lg text-center'>Login</button>
                </div>
            </div>

        </div>
    )
}

export default Login

// onChange={handleChange}
