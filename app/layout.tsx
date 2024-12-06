'use client'
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/app/components/navbar";
import { usePathname } from 'next/navigation';

const geistSans = localFont({
  src: "../public/fonts/Alexandria-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/Alexandria-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Qudrah",
//   description: "مصدرك الأول للدرجات العالية",
// };

function NavBarWrapper() {
  const pathname = usePathname();
  // Don't show navbar on checkout and confirmation pages
  if (pathname?.startsWith('/checkout')) return null;
  return <NavBar />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Noto+Sans+Arabic:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics/>
        <NavBarWrapper />
        {children}
      </body>
    </html>
  );
}
