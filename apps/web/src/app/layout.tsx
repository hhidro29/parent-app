import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNavigation from "@/components/layout/BottomNavigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Parent Monitoring App",
  description: "Monitor your child's learning progress",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased font-['Inter']`}>
        <div className="bg-[#f3fbfc] flex items-center justify-center min-h-screen w-full">
          {/* Mobile Container - Max 450px */}
          <div className="bg-[#f3fbfc] flex flex-col h-[100dvh] max-w-[450px] overflow-hidden relative w-full shadow-2xl">
            {/* Page Content */}
            <div className="flex-1 overflow-y-auto w-full scrollbar-hide">
              {children}
            </div>
            {/* Bottom Navigation */}
            <BottomNavigation />
          </div>
        </div>
      </body>
    </html>
  );
}
