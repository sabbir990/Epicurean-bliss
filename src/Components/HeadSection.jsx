import React from 'react'

export default function HeadSection({heading, subheading}) {
  return (
    <div>
        <h3 className='text-center font-semibold text-2xl text-slate-800'>{heading}</h3>
        <p className='text-center font-semibold text-slate-800'>{subheading}</p>
    </div>
  )
}
