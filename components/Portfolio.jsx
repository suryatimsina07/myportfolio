"use client"
import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { WORKDATA } from "@/public/data";
import PortfolioCard from './ui/PortfolioCard';


const Portfolio = () => {
    return (
        <section className='max-padd-container py-16 xl:py-28 text-center xl:text-start bg-[#fdf3fb] dark:bg-transparent'>
            {/* container */}
            <div className="flex flex-col xl:flex-row gap-6">
                {/* title */}
                <div className="flex flex-col xl:justify-center">
                    <span className="text-primary uppercase font-bold">Reffrences</span>
                    <h3 className='h3 font-extrabold'>testimonials</h3>
                </div>
                {/* Projects */}
                <div className="mx-auto max-w-[70%] md:max-w-full xl:max-w-[70%]">
                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="h-[422px] sm:h-[477px] mt-10"
                    >
                        {WORKDATA.map((project, i) => {
                            if (project.category === 'fullStack') {
                                return <SwiperSlide key={i} className="flexCenter">
                                    <PortfolioCard 
                                        url={project.url}
                                        github={project.github}
                                        live={project.live}
                                        title={project.title}
                                        category={project.category}
                                        des={project.des}
                                    />
                                </SwiperSlide>
                            }
                        })}
                    </Swiper>
                </div>
            </div>
        </section >
    );
};


export default Portfolio