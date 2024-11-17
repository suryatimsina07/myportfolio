import Link from "next/link"
import React from "react"
import {RiDribbbleFill, RiGithubFill, RiDiscordFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill} from 'react-icons/ri'

const SocialIcons = () => {
  return (
    <div className="flex gap-6 pr-4">
        <Link href={'https://whoisrabbit.com/'} className="bg-[#08d9d6] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"><RiDiscordFill /></Link>
        <Link href={'https://www.ishwor.dev/'} className="bg-[#f9ed69] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"><RiDribbbleFill /></Link>
        <Link href={'https://www.linkedin.com/in/ishwor-tandon'} className="bg-[#eaeaea] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"><RiLinkedinFill /></Link>
        <Link href={'https://github.com/ishworX'} className="bg-[#5272f2] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"><RiGithubFill /></Link>
    </div>
  )
}

export default SocialIcons 