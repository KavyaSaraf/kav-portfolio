"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function About() {
    return (
        <section id="about" className="section-container relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

            <h2 className="section-title mb-12">About Me</h2>

            <Card className="border-none shadow-lg overflow-hidden card-hover bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
                <CardContent className="pt-6 relative z-10">
                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed">
                            A motivated and enthusiastic technology professional with a strong passion for software development and
                            innovation. Committed to staying updated with industry trends and applying innovative solutions.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10">
                                <h3 className="text-xl font-semibold mb-4 gradient-text">Key Strengths</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold text-xl">•</span>
                                        <span>Quick learner with a problem-solving mindset.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold text-xl">•</span>
                                        <span>Proficient in Java and interested in automation and AI-driven solutions.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold text-xl">•</span>
                                        <span>Adaptable and eager to explore emerging technologies.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold text-xl">•</span>
                                        <span>Strong analytical skills with a keen focus on efficiency and optimization.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/10">
                                <h3 className="text-xl font-semibold mb-4 gradient-text">Interests</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Cooking",
                                        "Classical Dance",
                                        "Studying Numerology",
                                        "Watching Podcasts",
                                        "Conducting Events",
                                        "Exploring",
                                        "Spending time with friends",
                                    ].map((interest, index) => (
                                        <div
                                            key={index}
                                            className="bg-background/50 p-3 rounded-lg border border-accent/10 flex items-center justify-center text-center"
                                        >
                                            <span>{interest}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

