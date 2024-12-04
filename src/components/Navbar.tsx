"use client";
import Link from 'next/link';
import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <nav className='bg-blue-800 h-12 py-2 px-3 flex justify-between items-center text-white'>
            <div><h1 className='text-2xl font-semibold text-red-500'>
                <a href='#!'>Faiza Amir</a>
                </h1></div>
            <div>
                <ul className='flex space-x-5'>
                    <li><Link href="/"className='hover:text-red-400'>Home</Link></li>
                    <li> <Link href="/about"className='hover:text-red-400' >About</Link></li>
                    <li><Link href="/contect" className='hover:text-red-400'>Contect</Link></li>
                </ul>
            </div>
            <div>
                <ul className='flex space-x-3'>
                    <li><Link href="#!"className='hover:text-red-400'>Log in</Link></li>
                    <li><Link href="#!" className='hover:text-red-400'>Sign up</Link></li>
                </ul>
            </div>
        </nav>
        </div>
  )
}
export default Navbar
