"use client"
import PrivateRoute from '@/Components/PrivateRoute';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation'
import React from 'react'
import { ImSpinner9 } from "react-icons/im";

export default function Estate_details() {
  const { id } = useParams();

  const { data: estate_details, isLoading } = useQuery({
    queryKey: ['estate_details', id],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/api/estate_details/${id}`);
      return data;
    }
  })

  const { result: property } = estate_details || {};
  return (
    <PrivateRoute>
      {
        isLoading ? <div className='flex items-center justify-center mt-10'>
          <ImSpinner9 className='animate-spin' size={35} />
        </div> : <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={property?.image}
              alt={property?.estate_title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-2 text-gray-800">{property?.estate_title}</h1>
              <p className="text-gray-600 text-sm mb-4">{property?.segment_name} - {property?.status === "sale" ? "For Sale" : "For Rent"}</p>

              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-700 mb-2">Description</p>
                <p className="text-gray-600">{property?.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-800">{property?.location}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Area</p>
                  <p className="font-semibold text-gray-800">{property?.area}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-semibold text-gray-800">${property?.price}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">ID</p>
                  <p className="font-semibold text-gray-800">{property?.id}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-700 mb-2">Facilities</p>
                <ul className="list-disc list-inside text-gray-600">
                  {property?.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>

              <button onClick={() => alert("Sorry sir! this is not available officially right now.")} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition">
                Checkout
              </button>
            </div>
          </div>
        </div>
      }

    </PrivateRoute>
  )
}
