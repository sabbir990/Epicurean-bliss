import React from 'react'
import Logo from './Logo'

export default function TopSection({heading, subheading}) {
  return (
    <div className='flex flex-col items-center'>
        <Logo />
        <h3 className='font-semibold text-center text-xl text-gray-500'>{heading}</h3>
        <p className='font-semibold text-center'>{subheading}</p>
    </div>
  )
}
