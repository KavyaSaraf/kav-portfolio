import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"; // ✅ Use Inter as FontSans
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Kavya Saraf - Software Developer",
    description: "Portfolio website of Kavya Vasant Saraf, Software Developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${fontSans.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Toaster
                position="top-right"
                toastOptions={{
                    classNames: {
                        toast: "bg-background border border-border shadow-lg",
                        title: "text-foreground",
                        description: "text-muted-foreground",
                        success: "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none",
                        error: "bg-gradient-to-r from-red-500 to-rose-500 text-white border-none",
                        info: "bg-gradient-to-r from-primary to-secondary text-white border-none",
                    },
                }}
            />
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
