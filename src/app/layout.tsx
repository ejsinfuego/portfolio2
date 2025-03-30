import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WebVitals } from "./components/webVitals";
import GoogleAnalytics from "./components/google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ej Sinfuego | Software Developer",
  description: "I'm a software developer who enjoys to build things. I have various experiences across Back end and Front end development. I just recently realize that I also love tinkering with DevOps tools. I find fulfillment in crafting robust and scalable solutions that solve real-world problems.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <GoogleAnalytics />
      <WebVitals />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

