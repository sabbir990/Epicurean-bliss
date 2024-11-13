"use client"

import EstateCard from '@/Components/EstateCard';
import HeadSection from '@/Components/HeadSection';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { ImSpinner } from "react-icons/im";

export default function AllEstates() {
    const { data: all_estates, isLoading } = useQuery({
        queryKey: ['all_estates'],
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_EPICUREAN_BLISS_BASE_URL}/api/all_estates`);
            return data;
        }
    })
    return (
        <div className='mt-4'>
            <HeadSection heading={'Discover All Our Prime Estates'} subheading={'Browse through our full range of premium estates, each offering unique features, prime locations, and unmatched amenities for those seeking the finest in culinary spaces and hospitality.'} />
            {
                isLoading && <div className='flex items-center justify-center mt-10'>
                    <ImSpinner className='animate-spin' size={35} />
                </div>
            }
            <div className='mt-6 grid grid-cols-3 gap-4 mb-10'>
                {
                    all_estates?.result?.map((estate, index) => {
                        return <EstateCard key={index} estate={estate} />
                    })
                }
            </div>
        </div>
    )
}
