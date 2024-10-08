import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarWrapper from "../components/sidebarWrapper/SidebarWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-laboratory Management System",
  description: "An online laboratory management system for educational institutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="bg-gray-900">
       <body className={inter.className}>
          <SidebarWrapper>
            { children }
          </SidebarWrapper>
       </body>
    </html>
  );
}
