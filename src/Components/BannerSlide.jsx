import Link from 'next/link'
import React from 'react'

export default function BannerSlide({heading, subheading, image}) {
    return (
        <div>
            <div className="slide-content px-20 py-16 rounded-lg shadow-lg space-y-4" style={{ backgroundImage: `url(${image})`, backgroundRepeat : "none", backgroundPosition : "center", backgroundSize : "cover" }}>
                <h2 className="slide-heading text-center font-semibold text-4xl text-white">{heading}</h2>
                <p className="slide-paragraph text-center font-semibold text-white">
                    {subheading}
                </p>
                <div className='flex items-center justify-center'>
                    <Link href={'/all_estates'} className="btn btn-warning">Reserve a Table</Link>
                </div>
            </div>
        </div>
    )
}
