import type { Metadata } from "next";
import { Geist, Geist_Mono, Uncial_Antiqua, Cinzel } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const uncial = Uncial_Antiqua({
  weight: "400", 
  variable: "--font-uncial",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${uncial.variable} ${cinzel.variable} antialiased font-cinzel`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
