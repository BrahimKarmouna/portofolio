import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "../..//src/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "../../src/components/panel/ThemeSwitch";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "it's my- Portfolio",
  description: "urFolio - a Open Source portfolio web application",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeSwitch />
          <Sidebar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
