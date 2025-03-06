"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "About", href: "/portfolio#about" },
        { name: "Skills", href: "/portfolio#skills" },
        { name: "Projects", href: "/portfolio#projects" },
        { name: "Contact", href: "/portfolio#contact" },
    ]

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
            }`}
        >
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="font-bold text-2xl">
                    <span className="gradient-text">Kavya.dev</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Link href={link.href} className="text-foreground hover:text-primary transition-colors relative group">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </motion.div>
                    ))}
                    <ModeToggle />
                </nav>

                <div className="flex md:hidden items-center gap-4">
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="border border-border">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <nav className="flex flex-col gap-4 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

