"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BannerSlide from './BannerSlide';

const slidesData = [
    {
        heading: "Savor Every Moment",
        paragraph: "Join us for an experience that celebrates fine dining and warm hospitality. From appetizers to dessert, every dish is crafted with love and attention to detail.",
        image: "https://img.freepik.com/free-photo/restaurant-hall-classic-style-with-green-wooden-chairs-curtains_140725-8026.jpg?ga=GA1.1.1671483150.1710689044&semt=ais_hybrid"
    },
    {
        heading: "Celebrate Authentic Flavors",
        paragraph: "Discover a menu that honors culinary traditions from around the world. Our chefs combine authentic flavors with a modern touch for a unique dining experience.",
        image: "https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?ga=GA1.1.1671483150.1710689044&semt=ais_hybrid"
    },
    {
        heading: "Experience Culinary Excellence",
        paragraph: "Indulge in our carefully crafted dishes, where passion meets flavor. Join us for an unforgettable dining experience that tantalizes your taste buds and warms your soul.",
        image: "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?ga=GA1.1.1671483150.1710689044&semt=ais_hybrid"
    }
];

export default function Banner() {
    return (
        <div className='mt-2'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    slidesData?.map((slide, index) => {
                        return <SwiperSlide key={index}>
                            <BannerSlide heading={slide?.heading} subheading={slide?.paragraph} image={slide?.image} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}
