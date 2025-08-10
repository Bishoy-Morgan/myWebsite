import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Beams from '@/public/models/Beams'
import Button from './ui/Button'
import Image from 'next/image'
import celebrate from '@/public/icons/celebrate.svg'


const HeroSection = () => {
    const imgRef = useRef<HTMLDivElement | null>(null)
    const [circleStart, setCircleStart] = useState<{ x: number; y: number } | null>(null)
    const [showRedOverlay, setShowRedOverlay] = useState(false)

    const handleImageClick = () => {
        if (imgRef.current) {
            const rect = imgRef.current.getBoundingClientRect()
            setCircleStart({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            })
        }
    }

    return (
        <main className='relative w-full h-dvh min-h-screen max-h-[1080px] flex justify-center'>
            <div className='group'>
                <div
                    ref={imgRef}
                    className='fixed bottom-[5%] right-[3%] w-[4%] h-[8%]'
                    onClick={handleImageClick}
                >
                    <Image
                        src={celebrate}
                        alt='Celebrate'
                        fill
                    />
                </div>
                <span className='group-hover:block fixed bottom-[25%] -right-[0.5%] rotate-90 font-bold tracking-widest text-white/20 main-p opacity-0 transition-all group-hover:opacity-100 duration-500 ease-in-out'>
                    Don&apos;t Touch
                </span>
            </div>

            {/* Rocket */}
            {circleStart && (
                <motion.div
                    initial={{ x: circleStart.x, y: circleStart.y }}
                    animate={{ y: -50, opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeIn' }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '0.5vw',
                        height: '0.5vw',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                    onAnimationComplete={() => {
                        setCircleStart(null)
                        setShowRedOverlay(true)
                    }}
                />
            )}

            {/* Red overlay reveal */}
            {showRedOverlay && (
                <motion.div
                    initial={{
                        width: 150,
                        height: 150,
                        borderBottomLeftRadius: '100%',
                        borderBottomRightRadius: '0%',
                        borderTopLeftRadius: '0%',
                        borderTopRightRadius: '0%',
                        top: 0,
                        right: 0,
                        left: 'auto',
                        bottom: 'auto'
                    }}
                    animate={{
                        width: '100%',
                        height: '100%',
                        borderBottomLeftRadius: '0%',
                        borderBottomRightRadius: '0%',
                        borderTopLeftRadius: '0%',
                        borderTopRightRadius: '0%',
                        top: 0,
                        right: 0
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        backgroundColor: 'rgba(255, 68, 51, 0.1)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        transform: 'translateZ(0)',
                        willChange: 'transform, opacity',
                        zIndex: 100, 
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    onAnimationComplete={() => {
                        
                    }}
                />
            )}

            <section className='w-4/5 flex'>
                <div className='w-1/2 pt-[15%]'>
                    <h1>
                        Quiet design Loud results
                    </h1>
                    <div className='w-full flex justify-start'>
                        <p className='main-p text-paleWhite py-10 px-2'>
                            I&apos;m a front-end developer who believes the best work speaks softly but leaves a strong impression.<br />I specialize in performance first websites and multilingual experiences, built to be fast, intuitive, and scalable. I don&apos;t chase trends. I deliver results that last.
                        </p>
                    </div>
                    <a
                        href="https://cal.com/bishoy-morgan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button bgColor="#ff220e">Book a Free Discovery Call</Button>
                    </a>
                </div>
                <div className='black-gradient relative w-1/2 px-1 h-full'>
                    <Beams
                        beamWidth={0.3}
                        beamHeight={25}
                        beamNumber={25}
                        lightColor="#FF4533"
                        speed={4}
                        noiseIntensity={0.85}
                        scale={0.2}
                        rotation={180}
                    />
                </div>
            </section>
        </main>
    )
}

export default HeroSection
