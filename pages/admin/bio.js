import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Bio = () => {
    const [img, setImage] = useState(null)
    const [name, setName] = useState()
    const [profession, setProfession] = useState()
    const [born, setBorn] = useState()
    const [died, setDied] = useState()
    const [fromdate, setFromdate] = useState()
    const [todate, seTodate] = useState()
    const [slug, setSlug] = useState()
    const [desc, setDesc] = useState()

    const handleChange = (e) => {
        if (e.target.name == 'img') {
            setImage(e.target.value)
        }
        // const file = e.target.files[0]
        // setImage(file)
        else if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'profession') {
            setProfession(e.target.value)
        }
        else if (e.target.name == 'born') {
            setBorn(e.target.value)
        }
        else if (e.target.name == 'died') {
            setDied(e.target.value)
        }
        else if (e.target.name == 'fromdate') {
            setFromdate(e.target.value)
        }
        else if (e.target.name == 'todate') {
            seTodate(e.target.value)
        }
        else if (e.target.name == 'slug') {
            setSlug(e.target.value)
        }
        else if (e.target.name == 'desc') {
            setDesc(e.target.value)
        }
    }

    const collectData = async (e) => {
        e.preventDefault()
        let response = await fetch('http://localhost:3000/api/biography/addproducts',
            {
                method: 'POST',
                body: JSON.stringify({ img, name, profession, born, died, fromdate, todate, slug, desc }),
                headers: { "content-Type": "application/json" }
            })
        response = await response.json()

        //  name, profession, born, died, fromdate, todate, slug, desc
        // setName('')
        // setImage('')
        // setProfession('')
        // setBorn('')
        // setDied('')
        // setFromdate('')
        // seTodate('')
        // setSlug('')
        // setDesc('')

        if (response.success) {
            toast.success('data has been added', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error(response.error, {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <p className='capitalize text-lg mx-4 my-4 font-serif font-semibold'>biography</p>
            <div className='flex flex-col md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-2/4 my-4 mx-4 rounded-xl bg-slate-500 p-8 gap-1 font-serif'>
                <p>image</p>
                <input type="file" value={img} onChange={handleChange} name="img" placeholder='image' className='w-60 cursor-pointer text-lg rounded-md' />
                <p>name</p>
                <input type="text" value={name} onChange={handleChange} name="name" placeholder='name' className='text-base px-2 py-0.5 rounded-md' />
                <p>profession</p>
                <input type="text" value={profession} onChange={handleChange} name="profession" placeholder='profession' className='text-base px-2 py-0.5 rounded-md' />
                <p >born:-city,state,country</p>
                <input type="text" value={born} onChange={handleChange} name="born" placeholder='born details' className='text-base px-2 py-0.5 rounded-md' />
                <p >died:-city,state,country,age</p>
                <input type="text" value={died} onChange={handleChange} name="died" placeholder='died details' className='text-base px-2 py-0.5 rounded-md' />
                <p >from date</p>
                <input type="date" value={fromdate} onChange={handleChange} name="fromdate" placeholder='from date' className='text-base px-2 py-0.5 rounded-md' />
                <p >to date</p>
                <input type="date" value={todate} onChange={handleChange} name="todate" placeholder='to date' className='text-base px-2 py-0.5 rounded-md' />
                <p>slug</p>
                <input type="text" value={slug} onChange={handleChange} name="slug" placeholder='slug' className='text-base px-2 py-0.5 rounded-md' />
                <p>details</p>
                <textarea cols="30" value={desc} onChange={handleChange} name='desc' rows="10" className='text-base font-serif  capitalize px-2 py-0.5 rounded-md ' placeholder='desc' />

                <div className='w-full my-4 flex justify-center'>
                    <button onClick={collectData} className='capitalize  bg-red-400 rounded-md py-0.5 px-4 font-serif font-semibold text-lg text-center'>submit</button>
                </div>
            </div>
        </div>
    )
}
export default Bio