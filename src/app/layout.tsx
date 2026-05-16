import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppOrbit — Launching Ideas Into Orbit",
  description:
    "Cross-platform mobile apps, scalable web solutions, and enterprise software — from first commit to App Store launch.",
  keywords: [
    "Flutter development",
    "mobile app development",
    "web development",
    "Next.js",
    "blockchain",
    "Pune",
    "India",
  ],
  authors: [{ name: "Aditya Patil" }],
  openGraph: {
    title: "AppOrbit — Launching Ideas Into Orbit",
    description:
      "We build cross-platform mobile apps, scalable web solutions, and enterprise software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
