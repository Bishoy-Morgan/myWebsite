'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

import hand from '@/public/icons/hand.svg'

import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import blogsyMobile from '@/public/images/projects/blogsy-mobile.png'
import legendDesktop from '@/public/images/projects/legend-desktop.png'
import legendMobile from '@/public/images/projects/legend-mobile.png'
import skiableDesktop from '@/public/images/projects/skiable-desktop.png'
import skiableMobile from '@/public/images/projects/skiable-mobile.png'
import spaceMortgageDesktop from '@/public/images/projects/spaceMortgage-desktop.png'
import spaceMortgageMobile from '@/public/images/projects/spaceMortgage-mobile.png'

import TextTrail from './ui/TextTrail'
import RedLines from './ui/RedLines'

const projects = [
  {
    id: '1',
    title: 'Blogsy',
    link: 'https://blogsy-ceod.onrender.com',
    image: [blogsyMobile, blogsyDesktop],
  },
  {
    id: '2',
    title: 'Legend',
    link: 'https://legendalu.com',
    image: [legendMobile, legendDesktop],
  },
  {
    id: '3',
    title: 'Skiable',
    link: 'https://blogsy-ceod.onrender.com',
    image: [skiableMobile, skiableDesktop],
  },
  {
    id: '4',
    title: 'Space Mortgage',
    link: 'https://legendalu.com',
    image: [spaceMortgageMobile, spaceMortgageDesktop],
  },
]

// Variants for animations
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}

const mobileVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeOut', delay: 0.2 } },
}

const desktopVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeOut', delay: 0.4 } },
}

const Projects: React.FC = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <section id="projects" className="relative w-full py-10">
      <div className="relative space-y-16 flex flex-col items-center justify-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              sectionRefs.current[index] = el
            }}
            className="relative w-4/5 min-h-screen flex justify-between items-end"
          >
            <RedLines lines={['topRight', 'middleLeft', 'topRightHalf']} />

            {/* Project Title */}
            <motion.div
              className="project-title absolute top-[15%] left-1/4 -translate-x-1/2 w-1/2 h-1/2 px-1 z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={titleVariants}
            >
              <TextTrail
                text={project.title}
                animateColor={true}
                colorCycleInterval={1500}
                noiseFactor={1.5}
                noiseScale={0.002}
                backgroundColor="transparent"
              />
            </motion.div>

            {/* Desktop Image */}
            <Link
              href={`/projects/${project.id}`}
              className="relative group w-1/2 h-[60%] z-20 project-desktop"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={desktopVariants}
                className="relative w-full h-full"
              >
                <Image
                  src={project.image[1].src}
                  alt={`${project.title} desktop`}
                  width={1.78 * 1080}
                  height={1080}
                  priority={index < 2}
                  quality={100}
                  className="w-full h-auto max-h-full object-cover object-left-top shadow-lg shadow-[#020202]"
                />
                <div className="absolute top-0 left-0 w-full h-full group-hover:backdrop-blur-sm transition duration-1000 flex items-center justify-center gap-4">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-1000 text-black text-lg font-semibold">
                    Check it out
                  </span>
                  <Image
                    src={hand}
                    alt="Hands"
                    width={40}
                    height={40}
                    className="opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-[35deg] duration-1000"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Mobile Image */}
            <Link
              href={`/projects/${project.id}`}
              className="relative group w-1/5 h-3/4 project-mobile rounded-t-xl z-20 mr-[2.5%]"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={mobileVariants}
                className="relative w-full h-full"
              >
                <Image
                  src={project.image[0].src}
                  alt={project.title}
                  width={400}
                  height={800}
                  priority={index < 2}
                  quality={100}
                  className="w-full h-full object-cover object-top rounded-xl shadow-xl shadow-[#020202]"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-xl group-hover:backdrop-blur-sm transition duration-1000 flex items-center justify-center gap-4">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-1000 text-black text-lg font-semibold">
                    Check it out
                  </span>
                  <Image
                    src={hand}
                    alt="Hands"
                    width={40}
                    height={40}
                    className="opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-[35deg] duration-1000"
                  />
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
