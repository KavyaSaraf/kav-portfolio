"use client";

import { useState } from "react";
import type React from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Toaster, toast } from "sonner";

import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.success("Message sent! Thank you for reaching out. I'll get back to you soon.");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        setIsSubmitting(false);
    };

    return (
        <>
            <Toaster />
            <section id="contact" className="section-container relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

                <h2 className="section-title mb-12">Contact Me</h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-none shadow-lg overflow-hidden card-hover h-full bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50" />
                            <CardHeader className="relative z-10">
                                <CardTitle className="text-2xl gradient-text">Get In Touch</CardTitle>
                                <CardDescription className="text-base">
                                    Fill out the form below, and I'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <Input
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                                        aria-label="Your Name"
                                    />
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                                        aria-label="Your Email"
                                    />
                                    <Input
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                                        aria-label="Subject"
                                    />
                                    <Textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                                        aria-label="Your Message"
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                <Send className="h-4 w-4" />
                                                Send Message
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-none shadow-lg overflow-hidden card-hover h-full bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-50" />
                            <CardHeader className="relative z-10">
                                <CardTitle className="text-2xl gradient-text">Contact Information</CardTitle>
                                <CardDescription className="text-base">
                                    Feel free to reach out through any of these channels.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8 relative z-10">
                                <ContactItem icon={<Mail className="h-6 w-6 text-primary" />} label="Email" value="sarafkavya29@gmail.com" />
                                <ContactItem icon={<Phone className="h-6 w-6 text-secondary" />} label="Phone" value="+91 8762150772" />
                                <ContactItem icon={<MapPin className="h-6 w-6 text-accent" />} label="Location" value="Bangalore, India" />
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

// Reusable Contact Item Component
const ContactItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <motion.div
        className="flex items-start gap-4 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-secondary/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
    >
        <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
        <div>
            <h3 className="font-medium text-lg">{label}</h3>
            <p className="text-muted-foreground">{value}</p>
        </div>
    </motion.div>
);
