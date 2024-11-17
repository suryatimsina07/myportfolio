'use client'

import Image from "next/image"
import CountUp from "react-countup"
import { FaStar } from "react-icons/fa6"

const Badge = ({ containerStyles, icon, endCountNum, endCountText, badgeText, reviewCount }) => {
    return (
        <div className={`${containerStyles} badge`}>
            {icon && <div className="text-3xl text-primary dark:text-black">{icon}</div>}
            {endCountNum && <div className="flex flex-col"> <div className="flexCenter gap-x-2">
                <div className="bold-36 leading-none text-primary dark:text-black">
                    <CountUp end={endCountNum} duration={5} delay={1} />
                    {endCountText}
                </div>
                <div className="max-w-[77px] leading-none medium-15 dark:text-black">{badgeText}</div>
            </div>
            </div>
            }
            {/* reviews card*/}
            {reviewCount && <div>
                <div className="flex gap-x-4">
                    <Image src={'/surya.jpg'} alt="" height={41} width={41} className="rounded-full" />
                    <div className="flex flex-col">
                        <span className="bold-15 text-black">Surya Timsina</span>
                        <span className="flexCenter text-xs text-primary dark:text-black">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span className="text-black pl-1">
                                (<CountUp end={reviewCount} duration={4} delay={1} />)
                            </span>
                        </span>
                    </div>
                </div>
                {/* details */}
                <div>
                    <h4 className="bold-15 my-2 text-black">Recent Work</h4>
                    <div className="flex flex-col gap-3">
                        <div className="flexCenter gap-x-2 text-black">
                            <span className="bg-[#eaeaea] h-8 w-8 flexCenter rounded-full">YZ</span>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold leading-none">YonZon Barber $ Beauty</span>
                                <p className="text-xs ">UI & UX Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Badge
