"use client"

import TopSection from '@/Components/TopSection'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { CgSpinnerTwo } from "react-icons/cg";

export default function Register() {
    const [show, setShow] = useState(false)
    const router = useRouter();
    const handlePasswordShowToggle = () => {
        setShow(!show)
    }

    const {mutateAsync : saveUser, isPending} = useMutation({
        mutationFn : async(user) => {
            const {data} = await axios.post(`http://localhost:3000/api/post_users`, user)
            return data;
        },

        onSuccess : () => {
            router.push('/login')
            toast("Login To Your Account Now!")
        }
    })

    const handleRegisterSubmit = async(event) => {
        event.preventDefault();

        const form = event.target;
        const username = form?.username?.value;
        const email = form?.email?.value;
        const photoURL = form?.photoURL?.value;
        const password = form?.password.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/

        if(!regex.test(password)){
            return toast.error("Your password must have at least an uppercase, a lowercase, a number and a special character!")
        }

        const registeredInformation = {
            username, email, photoURL, password
        }

        try{
            await saveUser(registeredInformation)
        }catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <div className='px-4 py-6 rounded-lg shadow-lg my-10'>
                <TopSection heading={'Join Epicurean Bliss'} subheading={"Create an account to savor a world of culinary delights"} />
                <hr className='mt-4' />
                <form className='mt-4 flex flex-col space-y-2' onSubmit={handleRegisterSubmit}>
                    <input type="text" name='username' placeholder='Enter your username**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
                    <input type="email" name='email' placeholder='Create your email**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
                    <input type="text" name='photoURL' placeholder='Enter your photo**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
                    <div className='flex items-center space-x-2'>
                        <input type={show ? "text" : "password"} name='password' placeholder='Enter your password**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
                        <a className='btn' type='button' onClick={handlePasswordShowToggle}>{!show ? <FaEye /> : <FaEyeSlash />}</a>
                    </div>
                    <button className='btn btn-success btn-block text-white' disabled={isPending} type='submit'>{isPending ? <CgSpinnerTwo className='animate-spin' /> : "Register"}</button>
                    <p className='text-sm text-center'>Already have an account? <Link href={'/login'} className='text-semibold text-blue-500'>Login</Link></p>
                </form>
            </div>
        </div>
    )
}
