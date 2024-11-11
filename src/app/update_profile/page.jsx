"use client"

import PrivateRoute from '@/Components/PrivateRoute';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { ImSpinner10 } from "react-icons/im";
import { TbFidgetSpinner } from "react-icons/tb";

export default function Update_profile() {
  const session = useSession();
  const [loading, setLoading] = useState(false)
  const queryClient = useQueryClient();

  const { data: user_information, isLoading } = useQuery({
    queryKey: ['user_information', session?.data?.user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/api/get_me/${session?.data?.user?.email}`);
      return data;
    }
  })

  const { mutateAsync: updateProfile } = useMutation({
    mutationFn: async (newProfile) => {
      const { data } = await axios.patch(`http://localhost:3000/api/update_profile`, newProfile);
      return data;
    },
    onSuccess: () => {
      setLoading(false);
      queryClient.invalidateQueries(['user_information', session?.data?.user?.email]);
      toast.success("Updating Your Profile is successful!🤝")
    }
  })

  const handleUpdateProfileSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)

    const form = event.target;
    const username = form?.username?.value;
    const email = form?.email?.value;
    const photoURL = form?.photoURL?.value;

    const updatedProfile = {
      username, email, photoURL
    }

    try {
      await updateProfile(updatedProfile);
    } catch (error) {
      setLoading(false)
      console.log(error);
      toast.error(error.message)
    }
  }
  return (
    <PrivateRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:w-1/2 w-full my-10">
          {
            isLoading ? <div className='flex items-center justify-center'>
              <ImSpinner10 size={35} className='animate-spin' />
            </div> : <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-6">Update Profile</h2>

              <div className="flex flex-col items-center mb-6">
                <img
                  src={user_information?.result?.photoURL}
                  alt="User Avatar"
                  className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{user_information?.result?.username}</h3>
                <p className="text-gray-600 dark:text-gray-400">{user_information?.result?.email}</p>
              </div>

              <form onSubmit={handleUpdateProfileSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1">Username</label>
                  <input
                    type="text"
                    name="username"
                    defaultValue={user_information?.result?.username}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user_information?.result?.email}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    disabled
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1">Photo URL</label>
                  <input
                    type="text"
                    name="photoURL"
                    defaultValue={user_information?.result?.photoURL}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-info btn-block text-white"
                >
                  {
                    loading ? <TbFidgetSpinner className='animate-spin' size={24} /> : "Update Profile"
                  }
                </button>
              </form>
            </div>
          }

        </div>
      </div>
    </PrivateRoute>
  )
}
