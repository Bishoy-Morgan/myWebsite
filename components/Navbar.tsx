'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Button from './ui/Button'
import Image from 'next/image'
import github from '@/public/icons/github.svg'
import linkedin from '@/public/icons/linkedin.svg'
import morganLogo from '@/public/images/MRGN.png'
import ContactForm from './ContactForm'
import { useTranslations } from 'next-intl'

const Navbar: React.FC = () => {
    const t = useTranslations("Navbar")
    const [isContactOpen, setContactOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            <div className={`absolute top-0 left-0 z-50 w-full h-[15%] flex items-center  `}>
                <div className='relative w-[10%] h-full  '>
                    <Image 
                        src={morganLogo}
                        alt='Morgan Logo'
                        fill
                        priority
                        sizes="(max-width: 768px) 40vw, 20vw"
                        className='object-contain'
                    />
                </div>
                <nav className='w-4/5 mx-auto flex items-center justify-between '>
                    <ul className='w-1/4 flex items-center justify-between text-sm '>
                        <Link 
                            href={`/`} 
                            className={`navLinks ${pathname === '/' ? '!border-red' : ''}`}
                        >
                            {t("home")}
                        </Link>
                        <Link 
                            href={`/about`}
                            className={`navLinks ${pathname === '/about' ? '!border-red' : ''}`}
                        >
                            {t("about")}
                        </Link>
                        <Link 
                            href={`/work`}
                            className={`navLinks pr-2 ${pathname === '/work' ? '!border-red' : ''}`}
                        >
                            {t("work")}
                        </Link>
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
                            {t("button")}
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