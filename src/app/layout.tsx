import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { PropsWithChildren } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Control System",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header title={metadata.title as string}></Header>
        <div className="px-5 py-2">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
