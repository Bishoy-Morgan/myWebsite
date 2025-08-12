import React from 'react'
import { motion } from 'framer-motion'
import RedLines from '@/components/ui/RedLines'

const AboutHeroSection = () => {
    return (
        <main className='relative w-4/5 mx-auto pt-[10%]'>
            <RedLines lines={['middleLeft', 'middleTopRight', 'bottomRight']} />
            {/* Heading */}
            <motion.h1
                className="text-center mb-16 "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Backstage Pass
            </motion.h1>

            {/* Intro */}
            <motion.section
                className="w-full flex items-center justify-center text-center mx-auto mb-16 px-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <div className="text-paleWhite flex flex-col items-center justify-center text-center mx-auto space-y-6">
                    <span 
                    className="italic w-1/2 " 
                    style={{ fontSize: 'clamp(1vw, 1.25vw, 1.25vw)' }} 
                    >
                        Looks like you’re curious about who’s running the show behind the screen
                    </span>
                    <h4 
                    className="text-white font-bold tracking-tighter mt-4 mb-6"
                    style={{ fontSize: 'clamp(1vw, 2vw, 2vw)' }}
                    >
                        let me introduce myself
                    </h4>
                    <p 
                    className="secondary-p leading-relaxed text-paleWhite/70 "                     
                    >
                        I’m the person quietly pulling the levers, tweaking the lights, and making sure every scene flows just right. My stage is made of code, my props are pixels, and my goal is to make the audience — your users — walk away impressed without ever seeing the work it took to get there.
                    </p>
                    <p 
                    className="secondary-p mt-6 leading-relaxed text-paleWhite/70 "  
                    >
                        In my world, timing is everything, a perfectly placed animation, a page that loads in the blink of an eye, because every second counts. And just like a stage set built down to the tiniest screw,<br/>I obsess over the details that most people will never notice, but everyone will feel.
                    </p>
                </div>
            </motion.section>
        </main>
    )
}

export default AboutHeroSection
