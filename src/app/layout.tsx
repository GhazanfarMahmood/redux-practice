import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable : "--font-roboto",
  subsets : ["latin"],
})

export const metadata: Metadata = {
  title: "Task Manager With Help of Redux Toolkit",
  description: "Here's we manage the task with the help of redux toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
