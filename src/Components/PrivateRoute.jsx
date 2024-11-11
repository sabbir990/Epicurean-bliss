"use client"

import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { ImSpinner9 } from "react-icons/im";

export default function PrivateRoute({ children }) {
    const session = useSession();
    const router = useRouter();
    const pathname = usePathname();

    if (session?.status === 'loading') {
        return <div className='flex items-center justify-center mt-10'>
            <ImSpinner9 className='animate-spin' size={35} />
        </div>
    }

    if (session?.status === 'unauthenticated') {
        return router.push(`/login?redirect=${encodeURIComponent(pathname)}`)
    }

    return children;
}
