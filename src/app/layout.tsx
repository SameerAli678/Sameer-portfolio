// "use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Charm, Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const charm = Charm({
  subsets: ["latin"],
  weight: "400",
  variable: "--charm",
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sameer Portfolio",
  description:
    "Frontend developer specializing in React, Next.js & Tailwind CSS. Focused on creating modern, fast, and user-friendly interfaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${charm.variable}`}>
      <body
        className={`${montserrat.className} bg-black p-3 text-white`}
        suppressHydrationWarning
      >
        <Navbar />

        <div className="flex flex-col gap-y-6">
          <Toaster />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
