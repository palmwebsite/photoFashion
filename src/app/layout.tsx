import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import trans from "@/app/locales/translations.et.json";
import { Menu } from "./components/menu/Menu";
import style from "./page.module.css";

const { title, description } = trans;

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

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={`${style.msHeader} ${style.navbarWhite}`}>
          <Menu />
        </header>

        {children}
      </body>
    </html>
  );
}
