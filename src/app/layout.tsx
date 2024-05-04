import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBarUI";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Fundamentals",
  description: "Next.js best practices, tutorials and concepts.",
};

// children prop here is for the default 'page.tsx' file
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-[Geist]`}>
        <header className="navbar-wrapper">
          <NavBar />
        </header>
        <>{children}</>
      </body>
    </html>
  );
}
