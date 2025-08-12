'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import legendDesktop from '@/public/images/projects/legend-desktop.png'
import skiableDesktop from '@/public/images/projects/skiable-desktop.png'
import spaceMortgageDesktop from '@/public/images/projects/spaceMortgage-desktop.png'
import RedLines from '@/components/ui/RedLines'

const projects = [
  { id: 1, name: 'Blogsy', image: blogsyDesktop },
  { id: 2, name: 'Legend', image: legendDesktop },
  { id: 3, name: 'Skiable', image: skiableDesktop },
  { id: 4, name: 'Space Mortgage', image: spaceMortgageDesktop },
]

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      staggerChildren: 0.15, 
      when: "beforeChildren",
      duration: 0.8,
      ease: "easeOut",
    } 
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const WorkHero = () => {
  const skewAngle = 8
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const cardGap = -230

  return (
    <section className="relative w-4/5 mx-auto pb-24 pt-[10%] flex flex-col items-center">
      <RedLines lines={['bottomLeft', 'middleTopRight', 'middleTopLeft']} />
      <motion.h1
        className="mb-6 max-w-[50%] text-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        Digital Masterpieces in Progress
      </motion.h1>

      <motion.p
        className="main-p max-w-xl text-center text-paleWhite/80 my-4  "
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        Dive into my curated collection of projects<br/>each crafted with precision, creativity, and performance at its core.
      </motion.p>

      <motion.div
        className="relative w-full flex items-center justify-center overflow-visible  px-4 min-h-[70vh]"
        style={{ perspective: '1200px' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index
          return (
            <div
              key={project.id}
              className="relative rounded-sm transition-transform duration-500 ease-in-out"
              style={{
                width: '28vw', 
                aspectRatio: '5 / 3.5', 
                transformOrigin: 'center',
                transform: `skewY(${skewAngle}deg) translateY(${isHovered ? -80 : 0}px)`,
                zIndex: projects.length - index,
                minWidth: '28vw', 
                maxWidth: '32vw',
                marginRight: index < projects.length - 1 ? `${cardGap}px` : '0',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-left-top rounded-sm"
                draggable={false}
              />
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default WorkHero