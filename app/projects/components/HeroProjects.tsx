'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

type Project = {
    id: string
    title: string
    subTitle: string
    description: string
    link: string
    image: StaticImageData[] 
    technologies: string[]
    role: string
    year: number
}

type HeroProjectsProps = {
    project: Project
}

const fadeUp = {
    hidden: { opacity: 0, y: 40, x: 5 },
    visible: (custom = 0) => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            delay: custom * 0.2,
            duration: 0.8,
            ease: 'easeOut',
        },
    }),
}

const horizontalFade = {
    hidden: { opacity: 0, y: 40, x: -5 },
    visible: (custom = 0) => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            delay: custom * 0.2,
            duration: 0.8,
            ease: 'easeOut',
        },
    }),
}

const HeroProjects: React.FC<HeroProjectsProps> = ({ project }) => {
    if (!project) return <p>Project not found</p>

    return (
        <main className="relative w-full flex flex-col items-center text-white">
            <motion.section
                className="w-4/5 h-dvh max-h-[1080px] flex items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left Column */}
                <motion.div
                className="w-1/2 pt-[5%] pr-4"
                custom={0}
                variants={fadeUp}
                >
                    <motion.h1 className="mb-6" custom={1} variants={fadeUp}>
                        {project.title}
                    </motion.h1>
                    <motion.p
                        className="main-p text-paleWhite py-12 px-2"
                        custom={2}
                        variants={fadeUp}
                    >
                        {project.subTitle}
                    </motion.p>

                    <motion.a href={project.link} target='_blank' custom={3} variants={fadeUp}>
                        <Button>
                            Live Link
                        </Button>
                    </motion.a>
                </motion.div>

                {/* Right Column — Desktop Image */}
                <motion.div
                className="relative w-1/2 mt-[10%] h-full flex items-center justify-center px-1"
                custom={4}
                variants={horizontalFade}
                >
                    <div className="relative w-full h-[60%] overflow-hidden ">
                        <Image
                        src={project.image[1]}
                        alt={`${project.title} desktop`}
                        fill
                        priority
                        quality={100}
                        className="object-cover object-left-top"
                        />
                    </div>
                </motion.div>
            </motion.section>

            <motion.section
                className="w-4/5 h-dvh max-h-[1080px] flex items-center mb-24 mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left Column */}
                <motion.div className="w-1/2" custom={0} variants={fadeUp}>
                    <motion.p
                        className="main-p text-paleWhite pr-4 py-6 px-2"
                        custom={1}
                        variants={fadeUp}
                    >
                        {project.description}
                    </motion.p>
                    <motion.h3 className="my-6 text-red" custom={2} variants={fadeUp}>
                        Technologies
                    </motion.h3>
                    <motion.ul
                        className="w-full grid grid-cols-2 gap-y-8"
                        custom={3}
                        variants={fadeUp}
                    >
                        {project.technologies.map((tech) => (
                        <li
                            key={tech}
                            className="para-16 pl-2 text-paleWhite border-l-2 border-red"
                        >
                            {tech}
                        </li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Right Column — Mobile Image */}
                <motion.div
                className="relative w-1/2 h-full flex items-center justify-center px-1"
                custom={4}
                variants={horizontalFade}
                >
                    <div className="relative w-1/2 h-[80%] rounded-xl overflow-hidden ">
                        <Image
                        src={project.image[0]}
                        alt={`${project.title} mobile`}
                        fill
                        priority
                        quality={100}
                        className="object-cover object-left-top"
                        />
                    </div>
                </motion.div>
            </motion.section>
        </main>
    )
}

export default HeroProjects
