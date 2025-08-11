'use client'
import { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function JourneyTimeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({ height: '100%' })
    } else {
      controls.start({ height: '0%' })
    }
  }, [inView, controls])

  return (
    <section className="w-1/2 mx-auto py-20 relative ">
      <div className="relative flex justify-center items-start">
        {/* Vertical timeline line */}
        <div className="relative h-[300px] w-[1px] bg-red  overflow-hidden">
          <motion.div
            ref={ref}
            className="absolute top-0 left-0 w-full bg-red-600 rounded-full origin-top"
            style={{ height: 0 }}
            animate={controls}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>

        {/* Right milestone */}
        <div className="absolute right-0 -top-[3%] w-1/2 pl-8 flex justify-start items-center gap-x-3  ">
          <span className='para-16 text-paleWhite/80'>Starts</span>
          <span className='secondary-p font-bold tracking-tighter hover:scale-125 hover:translate-x-4 transition-all duration-300 ease-in-out text-paleWhite '>2023</span>
        </div>

        {/* Left milestone */}
        <div className="absolute left-0 top-[100px] w-1/2 pl-8 text-left">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
            First project
          </div>
        </div>
      </div>
    </section>
  )
}
