'use client'
import React from 'react'
import { motion } from 'framer-motion'
import RedLines from './ui/RedLines'
import Button from './ui/Button'
import Link from 'next/link'

const BehindTheScreen: React.FC = () => {
    return (
        <section className="relative w-4/5 mx-auto flex justify-center py-32">
            <RedLines lines={['topRight', 'middleRight', 'bottomLeft']} />

            {/* Content */}
            <motion.div
                className="w-2/5 flex flex-col items-center justify-center gap-y-8"
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
                viewport={{ once: true }}
            >
                {/* Heading */}
                <motion.h2
                className="text-center px-0 py-8 "
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
                >
                    Behind the screen
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                className="main-p text-paleWhite text-center mb-16"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
                >
                    Think of me as your backstage crew<br />invisible to the crowd, <br />indispensable to the show.
                </motion.p>
                <Link href={`/about`}>
                    <Button bgColor="#ff220e">
                        Backstage pass
                    </Button>
                </Link>
            </motion.div>
        </section>
    )
}

export default BehindTheScreen
