"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Projects() {
    const projects = [
        {
            title: "Edu Quest - AI Learning Personalized Learning Platform",
            description:
                "Developed a responsive platform with Next.js, Tailwind CSS, and ShadCN-UI for an optimal user experience across devices. Integrated AI-driven features such as personalized learning paths, AI tutors, and career recommendations using the Gemini model.",
            duration: "Oct 2024 - Dec 2024",
            technologies: [
                "Next.js",
                "Tailwind CSS",
                "ShadCN-UI",
                "Node.js",
                "MongoDB",
                "Clerk",
                "Gemini model",
                "SDK",
                "Vercel",
            ],
            points: [
                "Developed a responsive platform with Next.js, Tailwind CSS, and ShadCN-UI for an optimal user experience across devices.",
                "Integrated AI-driven features such as personalized learning paths, AI tutors, and career recommendations using the Gemini model.",
                "Used Postman and Thunder Client for API testing and debugging.",
                "Implemented secure authentication and streamlined user management with Clerk, ensuring data privacy and protection.",
                "Engineered a scalable backend with Node.js, MongoDB, deployed on Vercel.",
            ],
            github: "#",
            demo: "#",
            color: "from-purple-500/20 to-indigo-500/20",
        },
        {
            title: "Flix Fusion - Movie Matching Engine",
            description:
                "Built a responsive and scalable user interface using Next.js and ShadCN-UI for seamless movie discovery and interaction. Engineered a robust backend with Prisma and MongoDB, optimizing data management for the matching engine.",
            duration: "Nov 2024 - Dec 2024",
            technologies: ["Next.js", "ShadCN-UI", "MongoDB", "Prisma", "Redis"],
            points: [
                "Built a responsive and scalable user interface using Next.js and ShadCN-UI for seamless movie discovery and interaction.",
                "Engineered a robust backend with Prisma and MongoDB, optimizing data management for the matching engine.",
                "Implemented Redis caching to enhance system performance by reducing database query load.",
                "Used Postman and Thunder Client to validate APIs and ensure seamless backend communication.",
            ],
            github: "#",
            demo: "#",
            color: "from-cyan-500/20 to-blue-500/20",
        },
        {
            title: "PG Hub",
            description:
                "Developed a user-friendly platform for discovering and managing Paying Guest (PG) accommodations using HTML, CSS, and JavaScript. First project in Web Development.",
            duration: "Nov 2024 - Dec 2024",
            technologies: ["HTML", "CSS", "JavaScript", "DBMS"],
            points: [
                "Developed a user-friendly platform for discovering and managing Paying Guest (PG) accommodations using HTML, CSS, and JavaScript.",
                "Enabled user registration and authentication for profile management and secure access to PG listings.",
                "Built a database management system (DBMS) to store and manage user data, property listings, and interactions efficiently.",
            ],
            github: "#",
            demo: "#",
            color: "from-pink-500/20 to-rose-500/20",
        },
    ]

    return (
        <section id="projects" className="section-container relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

            <h2 className="section-title mb-12">Projects</h2>

            <div className="grid gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <Card className="border-none shadow-xl overflow-hidden card-hover bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
                            <CardHeader className="relative z-10">
                                <CardTitle className="text-2xl md:text-3xl gradient-text">{project.title}</CardTitle>
                                <CardDescription className="text-base">{project.duration}</CardDescription>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <div className="space-y-6">
                                    <p className="text-lg">{project.description}</p>

                                    <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10">
                                        <h4 className="font-medium mb-4 text-lg">Key Achievements:</h4>
                                        <ul className="space-y-3">
                                            {project.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-primary font-bold text-xl">•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="bg-background/50 backdrop-blur-sm border border-secondary/20 px-3 py-1"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-4 relative z-10">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-primary/20 hover:border-primary/50 transition-colors"
                                    asChild
                                >
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                                    asChild
                                >
                                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live Demo
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

