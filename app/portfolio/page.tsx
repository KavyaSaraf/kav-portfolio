import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Achievements from "@/components/acheivements"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Portfolio() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <Certifications />
            <Contact />
            <Footer />
        </main>
    )
}

