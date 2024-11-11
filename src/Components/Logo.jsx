import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href={'/'} className="btn btn-ghost text-blue-500 font-semibold text-3xl">Epicurean <span className='text-slate-600'>Bl<span className='text-red-500'>i</span>ss</span></Link>
    )
}
