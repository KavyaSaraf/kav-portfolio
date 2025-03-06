"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Laptop, Sparkles, Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LandingPage() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const featuredProjects = [
        {
            title: "Edu Quest",
            description:
                "AI-powered personalized learning platform with Next.js, Tailwind CSS, and Gemini model integration.",
            image: "/placeholder.svg?height=400&width=600",
            tags: ["Next.js", "AI", "MongoDB"],
            color: "from-purple-500/20 to-indigo-500/20",
        },
        {
            title: "Flix Fusion",
            description:
                "Movie matching engine with responsive UI, robust backend, and Redis caching for optimal performance.",
            image: "/placeholder.svg?height=400&width=600",
            tags: ["Next.js", "Prisma", "Redis"],
            color: "from-cyan-500/20 to-blue-500/20",
        },
    ]

    const skills = [
        { name: "Frontend Development", icon: <Code className="h-5 w-5" /> },
        { name: "Backend Development", icon: <Laptop className="h-5 w-5" /> },
        { name: "Database Management", icon: <Star className="h-5 w-5" /> },
        { name: "API Integration", icon: <Sparkles className="h-5 w-5" /> },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 animated-bg" />

                {/* Decorative circles */}
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter gradient-text mb-4">
                                Kavya Saraf
                            </h1>
                            <p className="mt-4 text-2xl md:text-3xl text-muted-foreground">Software Developer & Tech Enthusiast</p>
                            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                                <div className="w-full h-full bg-primary/5 rounded-full blur-3xl"></div>
                            </div>
                        </motion.div>

                        <motion.p
                            className="max-w-[800px] text-muted-foreground mt-4 text-lg md:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            A motivated and enthusiastic technology professional with a strong passion for software development and
                            innovation. Proficient in Java, JavaScript, and modern web frameworks with a focus on creating efficient,
                            user-friendly applications.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap justify-center gap-4 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                                asChild
                            >
                                <Link href="/portfolio">
                                    View Portfolio
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-primary/20 hover:border-primary/50 transition-colors"
                                asChild
                            >
                                <Link href="#featured">Featured Projects</Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isLoaded ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full bg-background/50 backdrop-blur-sm border border-border"
                                    asChild
                                >
                                    <Link href="#featured">
                                        <ChevronDown className="h-5 w-5" />
                                        <span className="sr-only">Scroll Down</span>
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Overview */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
                <div className="absolute inset-0 animated-bg opacity-30" />

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Core Expertise</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Combining technical skills with a problem-solving mindset to create innovative solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Card className="border-none shadow-lg overflow-hidden card-hover h-full bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <CardContent className="p-6 relative z-10 flex flex-col items-center text-center">
                                        <div className="p-3 bg-background/50 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
                                            {skill.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section id="featured" className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 animated-bg opacity-20" />

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Showcasing some of my recent work and technical capabilities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-none shadow-xl overflow-hidden card-hover h-full bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
                                    <CardContent className="p-0 relative z-10">
                                        <div className="relative h-48 md:h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                                            <img
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-muted-foreground mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag, i) => (
                                                    <Badge
                                                        key={i}
                                                        variant="secondary"
                                                        className="bg-background/50 backdrop-blur-sm border border-secondary/20"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Button
                                                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity w-full"
                                                asChild
                                            >
                                                <Link href="/portfolio#projects">
                                                    View Details
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-primary/20 hover:border-primary/50 transition-colors"
                            asChild
                        >
                            <Link href="/portfolio#projects">
                                View All Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
                <div className="absolute inset-0 animated-bg opacity-30" />

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Let's Work Together</h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                            </p>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                                asChild
                            >
                                <Link href="/portfolio#contact">
                                    Get In Touch
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

