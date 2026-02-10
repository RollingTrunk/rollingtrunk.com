import type { Metadata } from "next";
import { Geist, Geist_Mono, Notable } from "next/font/google";
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
        <footer className="relative w-full py-12 px-6 text-center text-gray-400 text-sm font-medium tracking-wide">
          <div className="max-w-7xl mx-auto border-t border-gray-200/50 pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <p>&copy; {new Date().getFullYear()} Rolling Trunk. All rights reserved.</p>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6">
                <a 
                  href="https://linkedin.com/company/rollingtrunk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/RollingTrunk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </div>
              
              <div className="w-px h-4 bg-gray-200 hidden md:block" />
              
              <div className="flex items-center gap-6">
                <a href="/privacy" className="hover:text-gray-900 transition-colors text-xs uppercase tracking-widest">Privacy</a>
                <a href="/terms" className="hover:text-gray-900 transition-colors text-xs uppercase tracking-widest">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
