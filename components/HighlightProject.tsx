import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import blogsyMobile from '@/public/images/projects/blogsy-mockup.png'
import Button from './ui/Button'
// import blogsyMobile from '@/public/images/projects/blogsy-mobile.png'

const currentProject = [
  {
    id: 1,
    name: 'Blogsy',
    description: 'Blogsy is a sleek, user-friendly blogging platform designed with the latest web technologies to deliver fast and seamless performance.',
    desktopImage: blogsyDesktop,
    mobileImage: blogsyMobile,
  }
]


const HighlightProject = () => {
  return (
    <section className="w-4/5 mx-auto pt-20 flex flex-col items-center  ">
      <h2 className="mb-20 ">In Development</h2>
      {currentProject.map((project) => (
        <div key={project.id} className="relative w-full flex flex-col items-center justify-center gap-y-6 px-2">
          <div className="w-1/2 flex flex-col text-center items-center justify-center">
            <h2 className="font-bold shiny-text mb-8">
              {project.name}
            </h2>
            <p className="mb-8 secondary-p text-paleWhite/80">
              {project.description}
            </p>
            <Link href="/work">
              <Button bgColor='#ff220e'>
                See All Work
              </Button>
            </Link>
          </div>
          {/* Red lines  */}
          <div className='absolute -top-[20%] right-0 w-1/4 h-1/4 border-r border-red '></div>
          <div className='absolute top-0 left-0 w-1/4 h-[5%] border-l border-red '></div>
          <div className='absolute top-[18%] left-0 w-1/4 h-[2.5%] border-r border-red skew-y-12 '></div>
          
          <div className="relative group w-full h-[80vh] ">
            <div 
            className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-y-10 z-30 '
            >
              <a href="https://blogsy-ceod.onrender.com" target='_blank'>
                <h1 className='text-red tracking-[-0.5rem] hover:scale-125 transition-transform duration-300 ease-out '>
                  Visit Website
                </h1>
              </a>
              <Link href={`/projects/${project.id}`}>
                <Button bgColor='#ff4533' className='!text-black '>
                  Check Project Details
                </Button>
              </Link>
            </div>
            {/* Desktop Image */}
            <div className="relative w-[95%] h-full">
              <Image
                src={project.desktopImage}
                alt={`${project.name} Desktop`}
                fill
                quality={100}
                priority
                className="rounded-lg shadow-2xl object-contain"
              />
            </div>

            {/* Mobile Image - overlapping */}
            <div className="absolute right-0 bottom-[2.5%] w-[18%] z-20 rounded-[2.5rem] shadow-3xl ">
              <Image
                src={project.mobileImage}
                alt={`${project.name} Mobile`}
                width={0.46 * 2556}
                height={2556}
                quality={100}
                className=" rounded-[2.5rem] object-cover"
              />
              {/* <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 backdrop-blur-sm transition-all duration-300 ease-in-out '></div> */}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default HighlightProject
