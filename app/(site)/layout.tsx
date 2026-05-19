import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "EduSense",
  description: "The modern way to analyse and understand your students performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
