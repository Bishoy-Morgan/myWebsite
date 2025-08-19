'use client'

import AboutHeroSection from './components/AboutHeroSection'
import JourneyTimeline from './components/JourneyTimeline'
import Philosophy from './components/Philosophy'
import CoreCompetencies from './components/CoreCompetencies'
import Footer from '@/components/Footer'


export default function AboutPage() {
    return (
        <main className="w-full mx-auto">
            <AboutHeroSection />
            <JourneyTimeline />
            <Philosophy />
            <CoreCompetencies />
            <Footer />
        </main>
    )
}
