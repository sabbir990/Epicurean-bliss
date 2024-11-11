"use client"

import React from 'react'
import HeadSection from './HeadSection'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import EstateCard from './EstateCard'
import Link from 'next/link'
import { ImSpinner } from 'react-icons/im'

export default function EstateSection() {
    const { data: allEstates, isLoading } = useQuery({
        queryKey: ["allEstates"],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:3000/api/all_estates');
            return data;
        }
    })
    return (
        <div>
            <HeadSection heading={'Explore Our Exclusive Estates'} subheading={'Discover a curated selection of prime properties designed for exceptional dining experiences. From luxurious private dining rooms to elegant event spaces, find the perfect setting for your culinary gatherings.'} />
            {
                isLoading && <div className='flex items-center justify-center mt-10'>
                    <ImSpinner className='animate-spin' size={35} />
                </div>
            }
            <div className='grid grid-cols-3 gap-4 mt-6'>
                {
                    allEstates?.result?.slice(0, 6)?.map((estate, index) => {
                        return <EstateCard key={index} estate={estate} />
                    })
                }
            </div>
            <div className='flex justify-center mt-4'>
                <Link href={'/all_estates'} className='btn btn-warning'>See All</Link>
            </div>
        </div>
    )
}
