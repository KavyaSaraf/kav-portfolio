import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t py-8 mt-16 relative overflow-hidden">
            <div className="absolute inset-0 animated-bg opacity-20" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
                        <Link href="/" className="font-bold text-2xl">
                            <span className="gradient-text">Kavya.dev</span>
                        </Link>
                        <p className="text-center text-sm text-muted-foreground md:text-left">
                            &copy; {currentYear} Kavya Vasant Saraf. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <Link
                            href="https://github.com/KavyaSaraf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-background/80 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
                        >
                            <Github className="h-5 w-5 text-foreground" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://linkedin.com/in/kavya-saraf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-background/80 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
                        >
                            <Linkedin className="h-5 w-5 text-foreground" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="mailto:sarafkavya29@gmail.com"
                            className="bg-background/80 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
                        >
                            <Mail className="h-5 w-5 text-foreground" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

