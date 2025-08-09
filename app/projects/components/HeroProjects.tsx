'use client'

import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import blogsyMobile from '@/public/images/projects/blogsy-mobile.png'
import legendDesktop from '@/public/images/projects/legend-desktop.png'
import legendMobile from '@/public/images/projects/legend-mobile.png'


const projects = [
    {
        id: '1',
        title: 'Blogsy',
        subTitle:
            'A fast and modern blogging platform designed for creators, offering seamless content creation, intuitive UI, and powerful SEO features.',
        description: 
            `Blogsy is a sleek, user-friendly blogging platform designed with the latest web technologies to deliver fast and seamless performance.
            It offers an intuitive editor, customizable themes, and advanced SEO tools to help content creators reach their audience effectively.
            With responsive design, Blogsy ensures a smooth experience on both desktop and mobile devices.
            The platform supports multimedia content, social sharing, and analytics integration for tracking engagement.
            Security and privacy are prioritized with built-in protection features.
            Blogsy is built to scale, making it suitable for individual bloggers and professional publishing.`,
        link: 'https://blogsy-ceod.onrender.com',
        image: [blogsyMobile, blogsyDesktop],
        technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Vercel'],
        role: 'Frontend & Backend Developer',
        year: 2023,
    },
    {
        id: '2',
        title: 'Legend',
        subTitle:
            'An elegant portfolio and storytelling platform crafted for creatives, featuring smooth animations, responsive layouts, and rich multimedia support.',
        description: 
            `Legend is a portfolio website tailored for creative professionals and storytellers to showcase their work in a visually captivating way.
            It leverages smooth animations, responsive layouts, and dynamic content loading for an immersive user experience.
            The site is optimized for performance and SEO to help users stand out in a competitive market.
            Legend supports multiple languages and accessibility standards to reach a broad audience.
            Built with a modern tech stack, it integrates easily with CMS and social media platforms.
            Its modular design allows easy customization and extension over time.`,
        link: 'https://legendalu.com',
        image: [legendMobile, legendDesktop],
        technologies: ['React.js', 'Gatsby', 'GraphQL', 'Styled Components', 'Contentful CMS'],
        role: 'Lead Frontend Developer',
        year: 2022,
    },
    {
        id: '3',
        title: 'Skiable',
        subTitle:
            'A winter sports booking and management web app, designed for ski resorts and enthusiasts to easily book, manage, and enjoy winter activities.',
        description: 
            `Skiable offers an all-in-one platform for winter sports enthusiasts to explore, book, and manage ski trips with ease.
            It provides real-time updates on weather conditions, available slopes, and equipment rentals.
            The app features user profiles, secure payments, and customizable itineraries for a personalized experience.
            Skiable is built with scalability in mind to support multiple resorts and thousands of users simultaneously.
            It integrates with social media and community forums to foster engagement.
            The intuitive UI is optimized for both mobile and desktop devices.`,
        link: 'https://skiable-example.com',
        image: [blogsyMobile, blogsyDesktop], // Replace with actual Skiable images if you have them
        technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Firebase', 'Stripe'],
        role: 'Full Stack Developer',
        year: 2024,
    },
    {
        id: '4',
        title: 'Space Mortgage',
        subTitle:
            'Futuristic real estate and mortgage solutions designed to streamline property financing and buying experiences.',
        description: 
            `Space Mortgage revolutionizes the property financing process by offering an intuitive platform for buyers and lenders.
            It features mortgage calculators, loan comparison tools, and real-time consultation booking.
            The platform supports multilingual interfaces, including Arabic and English, to serve diverse markets.
            Built for performance and accessibility, Space Mortgage ensures quick load times and mobile responsiveness.
            It integrates with various financial institutions to provide up-to-date rates and offers.
            Security and data privacy are at the forefront, with strict compliance to industry standards.`,
        link: 'https://space-mortgage-example.com',
        image: [legendMobile, legendDesktop], // Replace with actual Space Mortgage images if you have them
        technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'AWS'],
        role: 'Frontend Developer',
        year: 2024,
    },
]


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

const HeroProjects = () => {
    const project = projects[0]

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

                    <motion.a href={`/projects/${project.id}`} custom={3} variants={fadeUp}>
                        <Button>View Project</Button>
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
                        className="object-cover object-left-top"
                        />
                    </div>
                </motion.div>
            </motion.section>
        </main>
    )
}

export default HeroProjects
