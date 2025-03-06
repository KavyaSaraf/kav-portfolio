"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function Education() {
    const education = [
        {
            degree: "BE",
            institution: "New Horizon College Of Engineering, Bangalore",
            score: "CGPA: 9.25",
            year: "2026",
            icon: <GraduationCap className="h-8 w-8" />,
            color: "from-primary/20 to-secondary/20",
        },
        {
            degree: "PUC",
            institution: "Expert Pre-University College, Mangalore",
            score: "Percentage: 95.50",
            year: "2022",
            icon: <Award className="h-8 w-8" />,
            color: "from-secondary/20 to-accent/20",
        },
        {
            degree: "School",
            institution: "Anand Ashram Convent High School, Bhatkal",
            score: "Percentage: 96.16",
            year: "2020",
            icon: <Award className="h-8 w-8" />,
            color: "from-accent/20 to-primary/20",
        },
    ]

    return (
        <section id="education" className="section-container relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 animated-bg opacity-30 -z-10" />

            <h2 className="section-title mb-12">Education</h2>

            <div className="grid gap-8 md:grid-cols-3">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-none shadow-lg overflow-hidden card-hover h-full bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                            <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-50`} />
                            <div className="absolute top-0 right-0 p-4 text-primary">{edu.icon}</div>
                            <CardHeader className="relative z-10 pb-2">
                                <CardTitle className="text-2xl gradient-text">{edu.degree}</CardTitle>
                                <CardDescription className="text-base">{edu.year}</CardDescription>
                            </CardHeader>
                            <CardContent className="relative z-10 pt-2">
                                <p className="font-medium text-lg">{edu.institution}</p>
                                <p className="text-muted-foreground mt-2 text-base bg-background/50 backdrop-blur-sm inline-block px-3 py-1 rounded-full border border-primary/10">
                                    {edu.score}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

