import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pratham Dupare - Software Developer & Problem Solver",
  description: "Portfolio of Pratham Dupare - Software Developer specializing in modern web applications, browser extensions, and mobile apps. Currently pursuing BS-MS Mathematics at IISER Bhopal.",
  keywords: "Pratham Dupare, Software Developer, Full Stack Developer, React, Next.js, React Native, Browser Extensions, Portfolio",
  authors: [{ name: "Pratham Dupare" }],
  creator: "Pratham Dupare",
  openGraph: {
    title: "Pratham Dupare - Software Developer Portfolio",
    description: "Explore projects and work by Pratham Dupare - passionate software developer creating digital solutions that matter.",
    url: "https://blog.fosspage.tech",
    siteName: "Pratham Dupare Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratham Dupare - Software Developer",
    description: "Software Developer specializing in web applications, browser extensions, and mobile apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
