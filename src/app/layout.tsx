import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
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
        <TopHeader title="Kicthen's Next App"></TopHeader>
        <div className="px-5 py-2">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
