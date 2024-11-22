import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaEye } from 'react-icons/fa6'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { Badge } from './badge';

const PortfolioCard = ({ url, title, category, des, github, live }) => {
    return (
        <Card 
            className="relative group rounded-xl overflow-hidden 
            w-[380px] h-[370px] flex flex-col justify-between"
        >
            <CardHeader>
                <div>
                    <Badge className='mb-3 capitalize'>
                        {category}
                    </Badge>
                </div>
                <div className="relative rounded-lg overflow-hidden w-full h-[200px]">
                    <Image
                        src={url}
                        alt={title}
                        layout="fill" /* Ensures the image fills the container */
                        objectFit="cover" /* Ensures the image scales properly */
                        className="rounded-lg"
                    />
                    {/* Overlay */}
                    <div className="absolute top-0 left-0 inset-0 bg-[#fdf3fb] dark:bg-background opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-lg overflow-hidden"></div>
                    {/* Icons */}
                    <div className="flexCenter gap-x-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                        <Link href={'/portfolio'} className="flexCenter gap-x-2 rounded-md px-1 ring-1 ring-primary text-primary"><MdOutlineZoomOutMap /></Link>
                        <Link href={github} className="flexCenter gap-x-2 rounded-md px-1 ring-1 ring-primary text-primary"><FaGithub /><p>Github</p></Link>
                        <Link href={live} className="flexCenter gap-x-2 rounded-md px-1 ring-1 ring-primary text-primary"><FaEye /><p>Live</p></Link>
                    </div>
                </div>
            </CardHeader>
            {/* Info */}
            <CardContent className="flex-grow flex flex-col justify-end">
                <CardTitle className='mb-2'>{title}</CardTitle>
                <CardDescription>{des}</CardDescription>
            </CardContent>
        </Card>
    )
}

export default PortfolioCard
