'use client'

import { motion } from 'framer-motion'
import AboutHeroSection from './components/AboutHeroSection'
import JourneyTimeline from './components/JourneyTimeline'

export default function AboutPage() {
    return (
        <main className="w-4/5 mx-auto pt-[10%] pb-20">
            <AboutHeroSection />
            <JourneyTimeline />

            {/* Skills */}
            <motion.section
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-paleWhite">
                <li>Next.js</li>
                <li>React.js</li>
                <li>JavaScript / TypeScript</li>
                <li>TailwindCSS / CSS / HTML</li>
                <li>Bootstrap</li>
                <li>Ant Design</li>
                <li>Gatsby</li>
                <li>GraphQL</li>
                <li>Git</li>
                <li>Python</li>
                <li>Performance Optimization</li>
                <li>Framer Motion</li>
                </ul>
            </motion.section>

            {/* Experience */}
            {/* <motion.section
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                <div className="space-y-6 text-paleWhite">
                <div>
                    <h3 className="font-semibold">
                    Junior Web Developer – Scizers Technologies LLP
                    </h3>
                    <p className="text-sm">
                    Created high-performance, multilingual landing pages for large UAE companies, optimized for at least 95% on mobile and desktop performance scores.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">
                    Front-End Development Intern – SCIZERS IoT Pvt. Ltd.
                    </h3>
                    <p className="text-sm">
                    Developed features using Node.js and React.js, focusing on usability and performance.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">
                    Volunteer Educator – 360 Experiential Solutions
                    </h3>
                    <p className="text-sm">
                    Taught 12-year-old kids about finances using simple examples and storytelling. Organized games for sports day.
                    </p>
                </div>
                </div>
            </motion.section> */}

            {/* Projects */}
            {/* <motion.section
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
                <ul className="list-disc list-inside text-paleWhite space-y-2">
                <li>
                    <strong>MAP DXB</strong> – A bilingual property website for the UAE using API integration.
                </li>
                <li>
                    <strong>Legend Design</strong> – A site for aluminum profiles, kitchens, and architectural design.
                </li>
                <li>
                    <strong>Coffique</strong> – An e-commerce store for coffee products and equipment.
                </li>
                <li>
                    <strong>Skiable</strong> – A project focused on smooth performance and unique UI experiences.
                </li>
                </ul>
            </motion.section> */}

            {/* Closing */}
            {/* <motion.section
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <p className="main-p text-paleWhite mb-6">
                Whether it’s building sleek user interfaces or optimizing for
                lightning-fast load times, I approach each project with the same
                dedication: creating results that last.
                </p>
                <a
                href="https://cal.com/bishoy-morgan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#ff220e] text-white rounded-lg hover:bg-[#e01e0c] transition-colors duration-300"
                >
                Book a Free Discovery Call
                </a>
            </motion.section> */}
        </main>
    )
}
