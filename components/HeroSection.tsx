import Beams from '@/public/models/Beams'
import React from 'react'
import Button from './ui/Button'

const HeroSection = () => {
    return (
        <main className='relative w-full h-dvh flex justify-center '>
            <section className='w-4/5 flex '>
                <div className='w-1/2 pt-[15%] '>
                    <h1>
                        Quiet design Loud results
                    </h1>
                    <div className='w-full flex justify-start '>
                        <p className='main-p text-paleWhite py-10 px-2'>
                            I&apos;m a front-end developer who believes the best work speaks softly but leaves a strong impression.<br/>I specialize in performance first websites and multilingual experiences, built to be fast, intuitive, and scalable. I don&apos;t chase trends. I deliver results that last.
                        </p>
                    </div>
                    <a 
                    href="https://cal.com/bishoy-morgan/30min?overlayCalendar=true" 
                    // target="_blank"
                    >
                        <Button>Book a Free Discovery Call</Button>
                    </a>
                </div>
                <div className='black-gradient relative w-1/2 px-1 h-full '>
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
