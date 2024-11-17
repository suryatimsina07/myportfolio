"use client"
import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import SocialIcons from './ui/SocialIcons'
import Image from 'next/image'
import Badge from './Badge'
import { FaPython, FaReact, FaUsers } from 'react-icons/fa'
import { SiNextdotjs, SiCplusplus } from 'react-icons/si'

const handleClick = () => {
  window.location.href = '/contact';
};

const openCVInNewTab = () => {
  const cvUrl = "suryaresume.pdf";

  // Open the CV in a new tab
  window.open(cvUrl, "_blank");
};

const Hero = () => {
  return (
    <section className='max-padd-container py-20 bg-[#fdf3fb] dark:bg-transparent'>
    <div className='flexCenter gap-24 flex-col xl:flex-row'>
      {/* Left Side of the hero section! */}
      <div className='flex flex-1 flex-col pt-12 xl:pt-32'>
        <h1 className='h1 !font-extrabold'>
          Hello, World
        </h1>
        <h2 className='h2 !font-bold'>My name is Surya Timsina</h2>
        <p>
          I am a full-time student at Lethbridge Polytechnic, currently pursuing a diploma in Computer Information Technology. 
          Passionate about innovation and driven by a deep sense of purpose, my mission is to work hard and make meaningful 
          contributions, not just in my field but for the well-being and happiness of my family.
        </p>
  
        <div className='mt-6 flex gap-4'>
          <Button className='gap-x-2 shadow-xl' onClick={handleClick}>
            Contact Me <MoveRight size={20} />
          </Button>
  
          <Button className='shadow-xl bg-black hover:bg-[#222] text-white' onClick={openCVInNewTab}>
  View Resume
</Button>
        </div>
  
        <div className='mt-20'>
          <SocialIcons />
        </div>
      </div>
  
      {/* Right part of the Section */}
      <div className='flex flex-1 relative z-10 top-12'>
        <div>
          <Image src={'/surya.jpg'} height={488} width={488} priority alt='myPortrait' className='drop-shadow-sm' />
        </div>
  
        {/* Photo badges */}
        <div className='hidden xl:flex'>
          <Badge
            containerStyles={'absolute top-[60%] left-0'} icon={<SiCplusplus />} />
          <Badge
            containerStyles={'absolute -top-5 right-[45%]'} icon={<FaReact />} />
          <Badge
            containerStyles={'absolute bottom-[10%] right-[27%]'} icon={<SiNextdotjs />} />
          <Badge
            containerStyles={'absolute top-[10%] -left-12 !h-[55px]'} icon={<FaUsers />}
            badgeText={'Projects Completed'}
            endCountNum={10}
            endCountText={'+'}
          />
          <Badge
            containerStyles={'absolute top-[22%] right-0'} reviewCount={33} />
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Hero