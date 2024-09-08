import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Open_Sans, Signika } from "next/font/google";

const signika = Signika({ subsets: ["latin"] });
export const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Food",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={signika.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
