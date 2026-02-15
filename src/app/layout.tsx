import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S2 — A content-based social app",
  description:
    "A content-based social app for meeting new people. Privacy policy, terms of service, and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <header className="border-b border-gray-100">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/">
              <Image
                src="/logo-transparent.png"
                alt="S2"
                width={32}
                height={32}
                className="rounded-md"
              />
            </Link>
            <nav className="flex gap-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-black">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-black">
                Terms
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>
        <footer className="border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 py-8 text-center text-sm text-gray-500">
            <p>
              Contact:{" "}
              <a
                href="mailto:s2.shootyourshot@gmail.com"
                className="underline hover:text-black"
              >
                s2.shootyourshot@gmail.com
              </a>
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} S2. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
