import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topheader from "@/components/Topheader";
import { Toaster } from "@/components/ui/toaster";
import { PropsWithChildren } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kicthen's Next App",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topheader title="Kicthen's Next App"></Topheader>
        <div className="px-5 py-2">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
