
import Link from 'next/link';
import React from 'react';

const EstateCard = ({ estate }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
            {/* Estate Image */}
            <img
                className="w-full h-48 object-cover rounded-md"
                src={estate?.image}
                alt={estate?.estate_title}
            />

            {/* Estate Information */}
            <div className="py-4">
                {/* Title and Price */}
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {estate?.estate_title}
                    </h2>
                    <span className="text-lg font-semibold text-green-500">
                        ${estate?.price}
                    </span>
                </div>

                {/* Segment and Area */}
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                    <span>{estate?.segment_name}</span>
                    <span>{estate?.area} sq ft</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4">
                    {estate?.description}
                </p>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 012 0v1a1 1 0 11-2 0V9zm1 3a1 1 0 100 2 1 1 0 000-2z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span>{estate?.location}</span>
                </div>

                {/* Facilities */}
                <div className="text-sm text-gray-600 mb-4">
                    <p><strong>Facilities:</strong> {estate?.facilities.join(', ')}</p>
                </div>
            </div>

            {/* View Property Button */}
            <Link
                className="btn btn-info btn-block"
                href={`/estate_details/${estate?._id}`}
            >
                View Property
            </Link>
        </div>
    );
};

export default EstateCard;
