'use client'

import React from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import arrow from '@/public/icons/arrow.svg'
import aquaArc from '@/public/images/projects/1.jpg'
import coffique from '@/public/images/projects/1.jpg'
import legend from '@/public/images/projects/1.jpg'
import mapdxb from '@/public/images/projects/1.jpg'
import palmJebelAli from '@/public/images/projects/1.jpg'
import spaceMortgage from '@/public/images/projects/1.jpg'
import Button from './ui/Button'

const ProjectsHighlight = () => {
    const [sliderRef, slider] = useKeenSlider({
        slides: {
            perView: 4,
            spacing: 0,
        },
            // loop: true,
    })

    const projects = [
        { 
            id: 1,
            imageSrc: mapdxb,
            title: "MAP DXB",
            describtion: 'MAP DXB is website selling all kinds of properties from villas, townhouses and more in UAE', 
            techniques: ["HTML5", "CSS3","TailwindCSS", "Javascript", "ReactJS", "NextJS", "NodeJS"],
            href: 'https://mapdxb-com.vercel.app'
        },
        { 
            id: 2,
            imageSrc: coffique,
            title: "COFFIQUE",
            describtion: 'COFFIQUE is an e-commerce website especialize in all about coffee.', 
            techniques: ["HTML5", "TailwindCSS", "Javascript", "ReactJS", "NextJS", "NodeJS"],
            href: '#'
        },
        { 
            id: 3,
            imageSrc: legend,
            title: "Legend Design",
            describtion: 'LEGEND is an interior and exterior design company, Especialized in alluminum profiles.', 
            techniques: ["HTML5", "TailwindCSS", "Javascript", "ReactJS", "NextJS", "NodeJS"],
            href: 'https://legend-design.vercel.app/'
        },
        { 
            id: 4,
            imageSrc: spaceMortgage,
            title: "Space Mortgage",
            describtion: 'Space Mortgage is a website offering mortgage services for UAE resident and international resident in UAE.', 
            techniques: ["HTML5", "Tailwindcss", "SASS", "Javascript", "Typescript", "ReactJS"],
            href: 'https://spacemortgage.ae'
        },
        { 
            id: 5,
            imageSrc: palmJebelAli,
            title: "Palm Jebel Ali",
            describtion: 'Palm Jebel Ali is real estate landing page offers services of villas and townhouses in Ras El-Khaimah.',
            techniques: ["HTML5", "Tailwindcss", "Javascript", "ReactJS"],
            href: 'https://www.uaeluxuryresidences.com/promotions-palm-jebel-ali'
        },
        { 
            id: 6,
            imageSrc: aquaArc,
            title: "Aqua Arc",
            describtion: 'Aqua Arc is real estate landing page offers luxury villas and townhouses at Al Marjan Island in UAE.', 
            techniques: ["HTML5", "Tailwindcss", "Javascript", "ReactJS"],
            href: 'https://www.aquaarc-bnw.com'
        },
    ]
    return (
        <section className='w-full flex flex-col justify-center items-center pb-32 '>
            <div className='w-4/5 flex justify-center py-20 mb-8 border-l-2 border-red'>
                <h2 >
                    Projects highlight
                </h2>
            </div>
            <div className='w-full flex  '>
                {/* Left Arrow */}
                <div className='w-[10%] flex items-center justify-center '>
                    <Button
                        onClick={() => slider.current?.prev()}
                        className='px-4 flex items-center justify-center'
                    >
                        <Image 
                        src={arrow}
                        alt='Left Arrow'
                        width={12}
                        height={12}
                        className='rotate-180'
                        />
                    </Button>
                </div>
                <div className='relative w-4/5 h-[80vh]'>
                    <div ref={sliderRef} className='keen-slider w-full h-full'>
                        {projects.map((project) => (
                            <div key={project.id} className='keen-slider__slide !w-1/4 !h-full relative z-50 group transition-all duration-500 ease-in-out hover:!scale-y-95 !origin-top '>
                                <Image 
                                src={project.imageSrc}
                                alt={project.title}
                                fill
                                quality={100}
                                className='object-cover object-center'
                                />
                                <div className='absolute top-0 left-0 z-10 group-hover:z-0 w-full h-full bg-black/80 group-hover:bg-black/20 transition-all duration-300 ease-in-out'></div>
                                <div className='absolute bottom-20 left-1/2 -translate-x-1/2 w-4/5 z-10'>
                                    <p className='text-[#808080] group-hover:text-white text-sm italic max-w-52 '>
                                        {project.describtion}
                                    </p>
                                    <span className='inline-block text-white main-p font-semibold'>
                                        {project.title}
                                    </span>
                                    <span className='text-red text-base font-semibold block'>Dicover it</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right Arrow */}
                <div className='w-[10%] flex items-center justify-center '>
                    <Button
                        onClick={() => slider.current?.next()}
                        className='px-4 flex items-center justify-center'
                    >
                        <Image 
                        src={arrow}
                        alt='Left Arrow'
                        width={12}
                        height={12}
                        />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ProjectsHighlight
