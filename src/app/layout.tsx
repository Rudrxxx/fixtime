import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaHome, FaCalendarAlt } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FixTime - Book Appointments in Style",
  description: "Book appointments with your favorite service providers in a snap!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50`}>
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link 
                href="/" 
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  FixTime
                </span>
              </Link>
              <div className="flex items-center space-x-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <FaHome className="w-5 h-5" />
                  <span className="font-medium">Home</span>
                </Link>
                <Link
                  href="/appointments"
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <FaCalendarAlt className="w-5 h-5" />
                  <span className="font-medium">My Appointments</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-[calc(100vh-4rem)] pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
