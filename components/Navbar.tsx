'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from './ui/Button'
import Image from 'next/image'
import github from '@/public/icons/github.svg'
import linkedin from '@/public/icons/linkedin.svg'
import morganLogo from '@/public/images/M.png'

const Navbar:React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 z-50 w-full flex justify-start ${scrolled ? 'backdrop-blur-sm' : ''}`}>
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
                    <Link href={`#`} className='navLinks'>
                        <Image 
                        src={linkedin}
                        alt='LinkedIn'
                        width={20}
                        height={20}
                        className='2xl:w-6 2xl:h-6 '
                        />
                    </Link>
                    <Link href={`#`} className='navLinks -ml-2'>
                        <Image 
                        src={github}
                        alt='GitHub'
                        width={20}
                        height={20}
                        className='2xl:w-6 2xl:h-6'
                        />
                    </Link>
                    <Button>
                        Direct Contact
                    </Button>
                </div>
            </nav>
            <div className='w-[10%]'></div>
        </div>
    )
}

export default Navbar
