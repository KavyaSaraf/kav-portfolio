"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Skills() {
    const technicalSkills = [
        { name: "Java", level: 90 },
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "C#", level: 75 },
        { name: "ReactJs", level: 80 },
        { name: "NextJs", level: 75 },
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Git", level: 85 },
        { name: "Postman", level: 90 },
        { name: "ThunderClient", level: 85 },
        { name: "Selenium", level: 70 },
    ]

    const softSkills = ["Communication", "Team Collaboration", "Leadership", "Time Management", "Adaptability"]

    return (
        <section id="skills" className="section-container relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 animated-bg opacity-50 -z-10" />

            <h2 className="section-title mb-12">Skills</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-none shadow-lg overflow-hidden card-hover bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
                    <CardContent className="pt-6 relative z-10">
                        <h3 className="text-xl font-semibold mb-6 gradient-text">Technical Skills</h3>
                        <div className="space-y-4">
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="space-y-1">
                                    <div className="flex justify-between">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-lg overflow-hidden card-hover bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-50" />
                    <CardContent className="pt-6 relative z-10">
                        <h3 className="text-xl font-semibold mb-6 gradient-text">Soft Skills</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {softSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 h-full flex items-center justify-center">
                                        <span className="text-lg font-medium text-center">{skill}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

