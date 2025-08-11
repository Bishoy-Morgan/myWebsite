'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Milestone {
  season: string
  year: string
  title: string
  subtitle: string
  side: 'left' | 'right'
}

interface TimelineItemProps {
  m: Milestone
  index: number
}

const TimelineItem: React.FC<TimelineItemProps> = ({ m, index }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, x: m.side === 'left' ? 50 : -50, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <motion.div
      ref={ref}
      className={`absolute flex flex-col max-w-[43%] ${
        m.side === 'left'
          ? 'left-0 items-end text-right '
          : 'right-0 items-start text-left pr-4'
      }`}
      style={{ top: `${index * 16}rem` }}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.p variants={childVariants}>
        <motion.span className="para-sm text-paleWhite/80" variants={childVariants}>
          {m.season}
        </motion.span>{' '}
        <motion.span className="main-p text-paleWhite font-bold tracking-tighter" variants={childVariants}
        >
          {m.year}
        </motion.span>
      </motion.p>

      <motion.h3 className="text-red font-bold tracking-tight my-2" variants={childVariants}>
        {m.title}
      </motion.h3>

      <motion.p className="para-sm text-paleWhite" variants={childVariants}>
        {m.subtitle}
      </motion.p>
    </motion.div>
  )
}

export default function JourneyTimeline() {
  const milestones: Milestone[] = [
    {
      season: 'Spring ',
      year: '2023',
      title: 'Opening Night',
      subtitle: 'The moment the curtains lifted on my career.',
      side: 'right',
    },
    {
      season: 'Summer ',
      year: '2023',
      title: 'First Cue',
      subtitle: 'My debut project — where the lights first hit the stage.',
      side: 'left',
    },
    {
      season: 'Winter ',
      year: '2023',
      title: 'Perfect Timing',
      subtitle: 'Learning that milliseconds can steal the show.',
      side: 'right',
    },
    {
      season: 'Spring ',
      year: '2024',
      title: 'Speaking in Many Tongues',
      subtitle: 'Building experiences that feel native in any language.',
      side: 'left',
    },
    {
      season: 'Summer ',
      year: '2025',
      title: 'Encore',
      subtitle: 'Delivering work that keeps the audience coming back.',
      side: 'right',
    },
  ]

  return (
    <section className="w-4/5 h-[1248px] 2xl:h-[1448px] mx-auto py-20 relative flex justify-center">
      <div className="relative w-1/2 h-full flex justify-center">
        {/* Timeline Line */}
        <div className="relative w-[1px] bg-red overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-red rounded-full origin-top"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>

        {/* Timeline Items */}
        {milestones.map((m, i) => (
          <TimelineItem key={i} m={m} index={i} />
        ))}
      </div>
    </section>
  )
}
