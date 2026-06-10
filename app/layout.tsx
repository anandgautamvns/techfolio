import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Sidebar from "@/components/layout/Sidebar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechPortfolio — Anand Gautam",
  description: "Senior Software Developer — Full Stack Web & Mobile",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen antialiased" style={{ background: "#090c16", color: "#f1f5f9" }}>
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 lg:ml-[220px] min-h-screen overflow-x-hidden">
              <div className="px-4 sm:px-6 lg:px-8 xl:px-10 pt-14 lg:pt-0">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
