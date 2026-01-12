import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen, Notable } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notable = Notable({
  weight: "400",
  variable: "--font-notable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rolling Trunk",
  description: "Rolling Trunk Creative Agency",
  icons: {
    icon: "/favicon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${notable.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
