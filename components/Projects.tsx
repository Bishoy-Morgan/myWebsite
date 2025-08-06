'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import blogsyMobile from '@/public/images/projects/blogsy-mobile.png'
import legendDesktop from '@/public/images/projects/legend-desktop.png'
import legendMobile from '@/public/images/projects/legend-mobile.png'

import Image from 'next/image'
import TextTrail from './ui/TextTrail'

gsap.registerPlugin(ScrollTrigger)

const Projects: React.FC = () => {
    const projects = [
        {
        id: 1,
        title: 'Blogsy',
        link: 'https://blogsy-ceod.onrender.com',
        image: [blogsyMobile, blogsyDesktop],
        },
        {
        id: 2,
        title: 'Legend',
        link: 'https://legendalu.com',
        image: [legendMobile, legendDesktop],
        },
    ]

    // Typed ref array for div elements
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        sectionRefs.current.forEach((el) => {
        if (!el) return

        const title = el.querySelector('.project-title')
        const mobile = el.querySelector('.project-mobile')
        const desktop = el.querySelector('.project-desktop')

        gsap.fromTo(
        title,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
            trigger: el,
            start: 'top center',
            end: 'bottom center', 
            scrub: true,           
            },
        }
        )


        gsap.fromTo(
            mobile,
            { y: 200, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                delay: 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top center',
                    toggleActions: 'play none none reverse',
                },
            }
        )

        gsap.fromTo(
            desktop,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                delay: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top center',
                    toggleActions: 'play none none reverse',
                },
            }
        )
        })
    }, [])

    return (
        <div className="w-full mb-20 h-screen overflow-y-scroll no-scrollbar">
            <div className="w-4/5 mx-auto flex flex-col items-center gap-10 min-h-[200vh]">
                {projects.map((project, index) => (
                    <div
                    key={project.id}
                    ref={(el) => {
                        sectionRefs.current[index] = el
                    }}
                    className="relative w-full h-screen flex justify-between items-end "
                    >
                        {/* Project Title */}
                        <div className="absolute top-0 right-0 w-3/4 h-1/2 flex justify-center items-center project-title">
                            <TextTrail
                                text={project.title}
                                animateColor={true}
                                colorCycleInterval={1500}
                                noiseFactor={1.5}
                                noiseScale={0.002}
                                backgroundColor="transparent"
                            />
                        </div>

                        {/* Mobile Image */}
                        <div className="relative w-1/4 h-3/4 project-mobile rounded-t-xl">
                            <Image
                                src={project.image[0].src}
                                alt={project.title}
                                fill
                                sizes="(max-width: 430px) 100vw, (min-width: 430px) 100vw"
                                priority
                                quality={100}
                                className="w-full h-auto object-cover object-top rounded-t-xl "
                            />
                        </div>

                        {/* Desktop Image */}
                        <div className="w-3/5 project-desktop">
                            <Image
                                src={project.image[1].src}
                                alt={`${project.title} desktop`}
                                width={1.78 * 1080}
                                height={1080}
                                priority
                                quality={100}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
