'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import arrow from '@/public/icons/long-arrow.svg'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
}

const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" },
}

const funnyMessages = [
    "This page went out for coffee and never came back.",
    "404: Page not found. Our bad—we checked the couch.",
    "Whoops! Our digital hamster escaped with this page.",
    "This URL is emptier than our office fridge.",
    "The internet gremlins stole this page. We're negotiating."
]

const FallingSock = ({ delay }: { delay: number }) => (
    <motion.div
        className="absolute top-0 left-0 text-7xl"
        initial={{ y: -100, x: Math.random() * window.innerWidth }}
        animate={{ 
            y: window.innerHeight + 100,
            rotate: Math.random() * 360
        }}
        transition={{
            delay,
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear"
        }}
    >
        🧦
    </motion.div>
)

export default function NotFound() {
    const router = useRouter()
    const [showSecret, setShowSecret] = useState(false)
    const [sockCount] = useState(20)
    const [message, setMessage] = useState("Checking the void...")

    useEffect(() => {
        setMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)])
    }, [])

    const handleSecretClick = () => {
        setShowSecret(true)
        setTimeout(() => router.push('/'), 5000)
    }

    return (
        <div className="relative w-95 md:w-4/5 mx-auto flex flex-col h-screen justify-center py-20 overflow-hidden">
            {/* Top Red Line */}
            <div className="w-1/2 py-10 border-r-2 border-red mb-16"></div>

            {/* 404 Content */}
            <motion.div
                className="w-full flex flex-col items-center justify-center"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
            >
                {/* Static 404 text with client-only animation */}
                <h1 className="text-red text-center text-[clamp(3rem,10vw,8rem)] font-bold leading-tight">
                    4
                    <span className="text-white">0</span>
                    4
                </h1>

                <h2 className="hidden md:block text-white text-center mt-6 mb-8">
                    {message}
                </h2>
                <h3 className="md:hidden text-white text-center mt-6 mb-8">
                    {message}
                </h3>

                <p className="main-p text-center max-w-xl mb-12">
                    Meanwhile, here&apos;s a button that <i>actually</i> works:
                </p>

                <motion.div whileHover={buttonHover}>
                    <Button 
                        bgColor="#ff4533" 
                        arrowIcon={arrow}
                        onClick={() => router.push('/')}
                    >
                        Abandon Hope Here
                    </Button>
                </motion.div>

                {/* Clickable hint */}
                <div className="my-12 text-center">
                    <motion.p 
                    className="text-white/50 text-sm cursor-help inline-block"
                    whileHover={{ scale: 1.1 }}
                    onClick={handleSecretClick}
                    >
                        (Try clicking the void for a prize)
                    </motion.p>
                </div>

                {/* Full-screen secret message */}
                <AnimatePresence>
                    {showSecret && (
                        <motion.div
                            className="absolute top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-[#020202] "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {[...Array(sockCount)].map((_, i) => (
                                <FallingSock key={i} delay={i * 0.2} />
                            ))}
                            <motion.h1 
                            className="text-white text-center px-4"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 100 }}
                            >
                                Here lies the mysterious secret hole 
                                that swallows all lost socks!
                                <motion.p 
                                    className="text-paleWhite/50 mt-8 para-sm font-normal"
                                    animate={{ opacity: [0.5, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    We&apos;d let you take one, but they&apos;ll vanish in 5 seconds...
                                </motion.p>
                            </motion.h1>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}