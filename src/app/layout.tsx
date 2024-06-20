import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import Header from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: '500',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "E-Stunting",
  description: "Aplikasi klasifikasi stunting berdasarkan tinggi badan, umur, dan jenis kelamin yang menggunkan teknologi kecerdasan buatan dengan akurasi 95 persen keatas. Rentang umur balita adalah 0-5 tahun yang akan diconvert ke bulan",
  authors: [{
    name: "Rayhan Zulfitri Dwi Cahyo",
    url: "rayhanzulfitri@gmail.com"
  }],
  keywords: "PWA, Machine Learning, Stunting",
  manifest:'/manifest.json',
  icons:{
    icon: '/icons/icon-256x256.png',
    apple: '/icons/apple-icon-144x144.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript/>
      </head>
      <body className={`${roboto.className} `}>
        <Header/>
        <main className="flex min-h-screen flex-col items-center justify-between py-24 px-1">
          {children}
        </main>
      </body>
    </html>
  );
}
