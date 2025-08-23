'use client'

import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import celebrate from '@/public/icons/celebrate.svg'
import { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from 'next-intl';

const Beams = dynamic(() => import("@/public/models/Beams"), { ssr: false });

const HeroSection = () => {
    const t = useTranslations("HeroSection")
    const locale = useLocale();
    const [showBeams, setShowBeams] = useState(false);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    // const imgRef = useRef<HTMLDivElement | null>(null)
    // const [circleStart, setCircleStart] = useState<{ x: number; y: number } | null>(null)
    // const [showRedOverlay, setShowRedOverlay] = useState(false)

    // const handleImageClick = () => {
    //     if (imgRef.current) {
    //         const rect = imgRef.current.getBoundingClientRect()
    //         setCircleStart({
    //             x: rect.left + rect.width / 2,
    //             y: rect.top + rect.height / 2
    //         })
    //     }
    // }

    const messages = [
        t("welcomeMessage1"),
        t("welcomeMessage2"), 
        t("welcomeMessage3")
    ];

    useEffect(() => {
        if (showBeams) {
            const interval = setInterval(() => {
                setCurrentMessageIndex((prev) => {
                    if (prev < messages.length - 1) {
                        return prev + 1;
                    } else if (prev === messages.length - 1) {
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        return prev;
                    }
                });
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [showBeams,  messages.length]);

    return (
        <main className='relative w-full h-dvh min-h-screen max-h-[1080px] flex justify-center overflow-x-hidden'>
            {/* <div className='group'>
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
            </div> */}

            {/* Rocket */}
            {/* {circleStart && (
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
            )} */}

            {/* Red overlay reveal */}
            {/* {showRedOverlay && (
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
            )} */}

            <section className='w-full md:w-4/5 h-full flex items-end md:items-center justify-center md:justify-start'>
                <motion.div
                    className={`${locale === 'es' ? 'h-[95%]' : 'h-4/5'} w-95 md:w-1/2  flex flex-col items-start justify-center md:justify-end `}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h1>
                        {t("title")}
                    </h1>
                    <div className="w-full flex justify-start">
                        <p className="main-p text-paleWhite py-10 px-2">
                            {t("paragraphA")}
                            <br />
                            {t("paragraphB")}
                        </p>
                    </div>
                    <a
                    href="https://cal.com/bishoy-morgan"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Button bgColor="#ff220e">
                            {t("button")}
                        </Button>
                    </a>
                </motion.div>
                <motion.div
                    className='black-gradient absolute top-0 left-0 w-full md:relative md:w-1/2 md:px-1 h-full -z-10 md:z-0 opacity-40 md:opacity-100'
                    onViewportEnter={() => setShowBeams(true)}
                    viewport={{ once: true, margin: '200px' }}
                >
                    {showBeams && (
                        <Suspense>
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
                        </Suspense>
                    )}
                    <div className='hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-95 z-10 text-center'>
                        <AnimatePresence mode="wait">
                            {showBeams && (
                                <motion.h2
                                    key={currentMessageIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    style={{ 
                                        textShadow: '0 0 10px rgba(0, 0, 0, 1), 2px 2px 4px rgba(0, 0, 0, 1), -2px -2px 4px rgba(0, 0, 0, 0.8)',
                                        color: 'white', 
                                    }}
                                >
                                    {messages[currentMessageIndex]}
                                </motion.h2>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

export default HeroSection