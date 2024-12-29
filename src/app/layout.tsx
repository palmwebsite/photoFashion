import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import trans from "@/app/locales/translations.et.json";
import { Menu } from "./components/menu/Menu";
import style from "./page.module.css";

const { metaTitle, metaDescription } = trans;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// this metadata is used automatically by vercel (i think)
export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={`${style.msHeader}`}>
          <Menu />
        </header>

        {children}
      </body>
    </html>
  );
}
