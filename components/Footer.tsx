import React from 'react'
// import morganLogo from '@/public/images/M.png'
import Image from 'next/image'
import Link from 'next/link'
import github from '@/public/icons/github.svg'
import linkedin from '@/public/icons/linkedin.svg'
import m from '@/public/images/M-footer.png'


const Footer = () => {
    return (
        <footer className='w-full flex justify-center py-16'>
            <div className='w-4/5 flex justify-between '>
                <div className='w-1/4 py-16 px-2'>
                    <ul className='flex flex-col space-y-8'>
                        <Link href={`#`} className='text-white/40  hover:text-white hover:translate-x-2 transition-all duration-150 ease-linear'>Home</Link>
                        <Link href={`#`} className='text-white/40  hover:text-white hover:translate-x-2 transition-all duration-150 ease-linear'>About</Link>
                        <Link href={`#`} className='text-white/40  hover:text-white hover:translate-x-2 transition-all duration-150 ease-linear'>Projects</Link>
                    </ul>
                    <span className='block text-xs mt-20 text-white/40 '>
                        Copyright &copy; 2025 Bishoy Morgan, All Rights Reserved
                    </span>
                </div>
                <div className='w-1/2 flex justify-center items-start '>
                    <Image 
                    src={m}
                    alt='Morgan Logo'
                    width={220}
                    height={80}
                    className=''
                    />
                </div>
                <div className='w-1/4 py-16  flex flex-col justify-between '>
                    <div className='flex items-center justify-start space-x-4'>
                        <Link href={`#`} className='navLinks ' >
                            <Image 
                            src={linkedin}
                            alt='LinkedIn'
                            width={28}
                            height={28}
                            />
                        </Link>
                        <Link href={`#`} className='navLinks' >
                            <Image 
                            src={github}
                            alt='GitHub'
                            width={28}
                            height={28}
                            />
                        </Link>
                    </div>
                    <div className='px-2 flex justify-between text-xs mt-20 text-white/40 '>
                        <Link href={`#`} className='text-sm hover:text-white transition-all ease-in-out duration-300'>Privacy Policy</Link>
                        <span className='text-sm hover:text-white transition-all ease-in-out duration-300'>Cookie-free Website</span>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer
