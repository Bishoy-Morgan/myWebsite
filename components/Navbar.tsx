'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Button from './ui/Button'
import Image from 'next/image'
import github from '@/public/icons/github.svg'
import linkedin from '@/public/icons/linkedin.svg'
import morganLogo from '@/public/images/MRGN.png'
import ContactForm from './ContactForm'

const Navbar:React.FC = () => {
    const [isContactOpen, setContactOpen] = useState(false)

    return (
        <>
            <div className={`absolute top-0 left-0 z-50 w-full h-[15%] flex items-center  `}>
                <div className='relative w-[10%] h-full  '>
                    <Image 
                    src={morganLogo}
                    alt='Morgan Logo'
                    fill
                    objectFit='contain'
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
                        <a
                        href="#projects"
                        className="navLinks pr-2"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('projects');
                            if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        >
                            Projects
                        </a>
                    </ul>
                    <div className='w-[31%] flex items-center justify-between pr-2'>
                        <a href={`https://www.linkedin.com/in/bishoy-morgan-ba979a310`} target='_blank' className='navLinks'>
                            <Image 
                            src={linkedin}
                            alt='LinkedIn'
                            width={20}
                            height={20}
                            className='icon-vw '
                            />
                        </a>
                        <a href={`https://github.com/Bishoy-Morgan`} target='_blank' className='navLinks -ml-2'>
                            <Image 
                            src={github}
                            alt='GitHub'
                            width={20}
                            height={20}
                            className='icon-vw'
                            />
                        </a>
                        <Button 
                        onClick={() => setContactOpen(true)}
                        bgColor="#ff220e"
                        >
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
