import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kavya Saraf - Portfolio",
    description: "Portfolio of Kavya Vasant Saraf, Software Developer",
}

export default function PortfolioLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}

