import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
    href={'/'}
    className='bold-32 !font-extrabold'
    >

    T.<span className='text-primary'> Surya </span>   
    </Link>
  )
}

export default Logo