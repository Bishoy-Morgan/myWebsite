'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Button from './ui/Button'
import Image from 'next/image'
import github from '@/public/icons/github.svg'
import linkedin from '@/public/icons/linkedin.svg'
import morganLogo from '@/public/images/M.png'
import ContactForm from './ContactForm'

const Navbar:React.FC = () => {
    const [isContactOpen, setContactOpen] = useState(false)

    return (
        <>
            <div className={`absolute top-0 left-0 z-50 w-full flex justify-start `}>
                <div className='w-[10%] flex items-start justify-center '>
                    <Image 
                    src={morganLogo}
                    alt='Morgan Logo'
                    width={135}
                    height={180}
                    objectFit='cover'
                    />
                </div>
                <nav className='w-4/5 mx-auto flex items-center justify-between '>
                    <ul className='w-1/4 flex items-center justify-between text-sm '>
                        <Link 
                        href={`/`} 
                        className="navLinks"
                        >
                            Home
                        </Link >
                        <Link 
                        href={`/about`}
                        className="navLinks"
                        >
                            About
                        </Link >
                        <Link 
                        href={`/projects`} 
                        className="navLinks pr-2" 
                        >
                            Projects
                        </Link >
                    </ul>
                    <div className='w-1/4 flex items-center justify-between pr-2'>
                        <a href={`https://www.linkedin.com/in/bishoy-morgan-ba979a310`} target='_blank' className='navLinks'>
                            <Image 
                            src={linkedin}
                            alt='LinkedIn'
                            width={20}
                            height={20}
                            className='2xl:w-6 2xl:h-6 '
                            />
                        </a>
                        <a href={`https://github.com/Bishoy-Morgan`} target='_blank' className='navLinks -ml-2'>
                            <Image 
                            src={github}
                            alt='GitHub'
                            width={20}
                            height={20}
                            className='2xl:w-6 2xl:h-6'
                            />
                        </a>
                        <Button onClick={() => setContactOpen(true)}>
                            Direct Contact
                        </Button>
                    </div>
                </nav>
                <div className='w-[10%]'></div>
            </div>

            {/* Popup for Direct Contact */}
            <ContactForm isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
        </>
    )
}

export default Navbar
