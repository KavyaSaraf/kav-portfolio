"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 animated-bg" />

            {/* Decorative circles */}
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter gradient-text mb-2">
                            Kavya Vasant Saraf
                        </h1>
                        <p className="mt-2 text-xl md:text-2xl text-muted-foreground">Software Developer</p>
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                            <div className="w-full h-full bg-primary/5 rounded-full blur-3xl"></div>
                        </div>
                    </motion.div>

                    <motion.p
                        className="max-w-[700px] text-muted-foreground mt-4 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        A motivated and enthusiastic technology professional with a strong passion for software development and
                        innovation.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                            asChild
                        >
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-primary/20 hover:border-primary/50 transition-colors"
                            asChild
                        >
                            <Link href="#projects">View Projects</Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex gap-6 mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Link
                            href="https://github.com/KavyaSaraf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-background/80 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
                        >
                            <Github className="h-6 w-6 text-foreground" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://linkedin.com/in/kavya-saraf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-background/80 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
                        >
                            <Linkedin className="h-6 w-6 text-foreground" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="mailto:sarafkavya29@gmail.com"
                            className="bg-background/80 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
                        >
                            <Mail className="h-6 w-6 text-foreground" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-background/50 backdrop-blur-sm border border-border"
                        asChild
                    >
                        <Link href="#about">
                            <ArrowDown className="h-5 w-5" />
                            <span className="sr-only">Scroll Down</span>
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

