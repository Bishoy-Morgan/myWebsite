'use client'

import { useParams } from 'next/navigation'
import HeroProjects from '@/app/projects/components/HeroProjects'
import Footer from '@/components/Footer'
import { projects } from '@/app/data/projects'

export default function ProjectsPage() {
    const params = useParams()
    const projectId = params.id

    const project = projects.find(p => p.id === projectId)

    if (!project) {
        return <p className="text-center mt-10">Project not found.</p>
    }

    return (
        <main className="relative w-full z-10">
            <HeroProjects project={project} />
            <Footer />
        </main>
    )
}
