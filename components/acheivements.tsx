"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function Achievements() {
    const achievements = [
        "Winner of Hackathon held in Cicada Tech Fest, Atria University",
        "Selected for CMR Hackfest 2.0 in Telangana. Out of 1531 teams that registered from 20 states across the country, secured a place among the top 121 teams.",
        "Smart India Hackathon - in top 20 teams selected within our college.",
        "Ranked in top 5 VertechX Tech Hackathon conducted by MVJ College Of Engineering",
        "Got an opportunity to attend Nvidia Gaming Event.",
        "Got an opportunity to visit Xperi Company and solved a Movie Matching Engine problem statement, gaining hands-on experience in real-world problem-solving.",
    ]

    const activities = [
        "Participated in dance performances during college events.",
        "Volunteered at the Revelation Fest, contributing to event management and coordination.",
        "Engaged in community volunteering initiatives, demonstrating commitment to social causes.",
        "Participated in awareness walkathons such as Can Walk and Cry Walk, supporting Cancer and Women Empowerment campaigns.",
    ]

    return (
        <section id="achievements" className="section-container relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

            <h2 className="section-title mb-12">Achievements & Activities</h2>

            <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Card className="border-none shadow-lg overflow-hidden card-hover h-full bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50" />
                        <CardHeader className="flex flex-row items-center gap-3 relative z-10">
                            <div className="p-2 bg-background/50 backdrop-blur-sm rounded-full border border-primary/20">
                                <Trophy className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl gradient-text">Academic Achievements</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <ul className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-primary/10"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-primary text-xl mt-0.5">•</span>
                                        <span>{achievement}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Card className="border-none shadow-lg overflow-hidden card-hover h-full bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-50" />
                        <CardHeader className="flex flex-row items-center gap-3 relative z-10">
                            <div className="p-2 bg-background/50 backdrop-blur-sm rounded-full border border-secondary/20">
                                <Star className="h-6 w-6 text-secondary" />
                            </div>
                            <CardTitle className="text-2xl gradient-text">Extracurricular Activities</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <ul className="space-y-4">
                                {activities.map((activity, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-secondary/10"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-secondary text-xl mt-0.5">•</span>
                                        <span>{activity}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

