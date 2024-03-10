import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KoinX",
  description: "Assignment for KoinX Frontend Developer Role",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
