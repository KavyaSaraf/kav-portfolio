"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function Certifications() {
    const certifications = [
        "IBM Data Science Certificate",
        "NPTEL Operating System",
        "NPTEL Java-Elite",
        "SQL Certification on Code Chef",
    ]

    const workshops = ["DevOps Workshop", "Robo Soccer Workshop", "Golang Workshop"]

    return (
        <section id="certifications" className="section-container relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 animated-bg opacity-30 -z-10" />

            <h2 className="section-title mb-12">Certifications & Workshops</h2>

            <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Card className="border-none shadow-lg overflow-hidden card-hover h-full bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50" />
                        <CardHeader className="flex flex-row items-center gap-3 relative z-10">
                            <div className="p-2 bg-background/50 backdrop-blur-sm rounded-full border border-primary/20">
                                <CheckCircle className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl gradient-text">Certifications</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        <div className="relative overflow-hidden rounded-xl">
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-70 group-hover:opacity-100 transition-opacity" />
                                            <div className="relative bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-primary/10 h-full flex items-center justify-center">
                                                <span className="text-center font-medium">{cert}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Card className="border-none shadow-lg overflow-hidden card-hover h-full bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-50" />
                        <CardHeader className="flex flex-row items-center gap-3 relative z-10">
                            <div className="p-2 bg-background/50 backdrop-blur-sm rounded-full border border-secondary/20">
                                <BookOpen className="h-6 w-6 text-secondary" />
                            </div>
                            <CardTitle className="text-2xl gradient-text">Workshops</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {workshops.map((workshop, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        <div className="relative overflow-hidden rounded-xl">
                                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-70 group-hover:opacity-100 transition-opacity" />
                                            <div className="relative bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-secondary/10 h-full flex items-center justify-center">
                                                <span className="text-center font-medium">{workshop}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

