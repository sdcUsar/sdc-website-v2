"use client";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head></head>
      <body
        className={cn(
          "grainy min-h-screen w-full font-sans antialiased overflow-x-hidden",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
