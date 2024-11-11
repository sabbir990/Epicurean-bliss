"use client"

import TopSection from '@/Components/TopSection'
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import {signIn} from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation';
import { CgSpinnerTwo } from "react-icons/cg";

export default function Login() {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect');

  const handlePasswordShowToggle = () => {
    setShow(!show)
  }
  const handleLoginSubmit = async(event) => {
    event.preventDefault();
    setLoading(true)

    const form = event.target;
    const email = form?.email?.value;
    const password = form?.password?.value;

    if(!email || !password){
      setLoading(false)
      return toast.error("Fill all the fields properly!")
    }

    try{
      const response = await signIn("credentials", {
        email, password, redirect : false
      })

      if(response.error){
        setLoading(false)
        return toast.error(response.error)
      }

      if(response.status === 200){
        setLoading(false)
        if(redirectTo){
          return router.push(redirectTo)
        }
        router.push('/')
      }

    }catch(error){
      setLoading(false)
      console.log(error);
      toast.error(error.message)
    }
  }
  return (
    <div className='py-10 flex items-center justify-center'>
      <div className='px-4 py-10 shadow-lg rounded-lg w-auto'>
        <TopSection heading={'Welcome Back to Epicurean Bliss'} subheading={'Sign in to continue your journey through exquisite flavors'} />
        <hr className='mt-4' />
        <form className='mt-4 flex flex-col space-y-2' onSubmit={handleLoginSubmit}>
          <input type="email" name="email" placeholder='Enter your email**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
          <div className='flex items-center space-x-2'>
            <input type={show ? "text" : "password"} name='password' placeholder='Enter your password**' className='w-full px-4 py-3 outline-none border-2 border-green-500 rounded-md' />
            <a className='btn' type='button' onClick={handlePasswordShowToggle}>{!show ? <FaEye /> : <FaEyeSlash />}</a>
          </div>
          <button disabled={isLoading} className='btn btn-success btn-block text-white' type='submit'>{isLoading ? <CgSpinnerTwo className='animate-spin' /> : "Login"}</button>
        </form>
        <p className='text-center text-sm'>Don't have any account? <Link href={'/register'} className='font-semibold text-blue-500'>Register</Link></p>
      </div>
    </div>
  )
}
