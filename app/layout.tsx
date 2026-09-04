import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { translations } from "./i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: translations.en.metadata.title,
  description: translations.en.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
