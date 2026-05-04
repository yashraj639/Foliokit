import type { Metadata } from "next";
import { Instrument_Sans, Sora } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My portfolio website built with Foliokit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}